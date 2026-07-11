const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

// 帝京の既存データ（window.TEIKYO_DATASETS）と、新規追加分（window.MATH_DATASETS）を統合。
// 各 exam.key は DATASETS 内で一意（進捗キーの識別子を兼ねるため衝突不可）。
const DATASETS = { ...(window.TEIKYO_DATASETS || {}), ...(window.MATH_DATASETS || {}) };
if (!Object.keys(DATASETS).length && window.TEIKYO_DATA) DATASETS.sougou = window.TEIKYO_DATA;

// 学校（出典）→ 方式・年度 の2階層。新しい学校は window.MATH_SCHOOLS に配列で追記して増やす
// （帝京は下記の既定に含まれる。追加校のデータは window.MATH_DATASETS へ登録する）。
const DEFAULT_SCHOOLS = [
  {
    id: "teikyo",
    name: "帝京大学",
    eyebrow: "TEIKYO UNIVERSITY / MATH",
    exams: [
      {
        key: "sougou",
        label: "総合型選抜",
        shortLabel: "総合型",
        sourceTitle: "2026 総合型選抜",
        sourceText: "薬・理工学部 数学",
        legacyProgressKey: "teikyo_2026_math_practice_v1",
      },
      {
        key: "recommend",
        label: "学校推薦型選抜",
        shortLabel: "学校推薦型",
        sourceTitle: "2026 学校推薦型選抜",
        sourceText: "薬・理工学部 数学",
        legacyProgressKey: "teikyo_2026_recommend_math_practice_v1",
      },
    ],
  },
];
const SCHOOLS = [...DEFAULT_SCHOOLS, ...(window.MATH_SCHOOLS || [])];

// exam.key -> { ...exam, schoolId, eyebrow }（データが存在する方式のみ）
const EXAMS = {};
const SCHOOL_BY_EXAM = {};
SCHOOLS.forEach((school) => {
  (school.exams || []).forEach((exam) => {
    if (!DATASETS[exam.key]) return;
    EXAMS[exam.key] = { ...exam, schoolId: school.id, eyebrow: exam.eyebrow || school.eyebrow };
    SCHOOL_BY_EXAM[exam.key] = school;
  });
});
const AVAILABLE_EXAMS = Object.keys(EXAMS);
const AVAILABLE_SCHOOLS = SCHOOLS.filter((school) => (school.exams || []).some((exam) => DATASETS[exam.key]));
const CURRENT_EXAM_KEY = "teikyo_2026_math_current_exam_v1";
let currentExamKey = loadCurrentExam();
let DATA = DATASETS[currentExamKey] || { problem_groups: [] };
let groups = DATA.problem_groups || [];
const LEGACY_PROGRESS_KEY = "teikyo_2026_math_practice_v1";
const STUDENTS_KEY = "teikyo_2026_math_students_unified_v1";
const LEGACY_STUDENT_KEYS = ["teikyo_2026_math_students_v1", "teikyo_2026_recommend_math_students_v1"];
const CURRENT_STUDENT_KEY = "teikyo_2026_math_current_student_v1";
const PROGRESS_PREFIX = "teikyo_2026_math_progress_v2:";
const DRAFT_PREFIX = "teikyo_2026_math_drafts_v2:";

let currentGroup = 0;
let answers = {};
let answerDrafts = {};
let graded = false;
let active = null;
let modalReturnFocus = null;
let checkedSubs = {};
let students = loadStudents();
let currentStudentName = loadCurrentStudent();
let progress = {};

const HINT_LEVELS = ["着眼点", "立式", "計算", "答え合わせ"];

const DETAIL_TEXT = {
  "1-(1)": [
    "因数分解では、まず共通因数や公式を探し、複数の文字がある式では「1つの文字について整理する」のが基本方針。今回は $x$ の係数が扱いやすいので、$x$ の2次式として見る。",
    "元の式を $x$ について整理すると、$x^2+(6-y)x+(-6y^2-8y+8)$ となる。",
    "次に、定数部分 $-6y^2-8y+8$ を因数分解する。$-6y^2-8y+8=(2y+4)(-3y+2)$。",
    "ここで $x^2+(A+B)x+AB=(x+A)(x+B)$ の形にしたい。$A=2y+4$、$B=-3y+2$ とすると、$A+B=(2y+4)+(-3y+2)=6-y$ で、$x$ の係数と一致する。",
    "したがって $x^2+(6-y)x+(-6y^2-8y+8)=(x+2y+4)(x-3y+2)$。",
    "最後に空欄の形 $(x+\\boxed{ア}y+\\boxed{イ})(x-\\boxed{ウ}y+\\boxed{エ})$ に合わせて、ア=2、イ=4、ウ=3、エ=2。"
  ],
  "1-(2)": [
    "$360$ を素因数分解する。$360=36\\times10=2^3\\cdot3^2\\cdot5$。",
    "正の約数の個数は、各素因数の指数に $1$ を足して掛ける。",
    "$(3+1)(2+1)(1+1)=4\\times3\\times2=24$。",
    "2桁の空欄なので、オ=2、カ=4。"
  ],
  "1-(3)": [
    "対数の底が $3,9,5,25$ と混ざっているので、まず底の変換公式 $\\log_a b=\\dfrac{\\log_c b}{\\log_c a}$ を使って底をそろえる。",
    "$9=3^2$、$25=5^2$ だから、$\\log_9 5=\\dfrac{\\log_3 5}{\\log_3 9}=\\frac12\\log_3 5$、$\\log_{25}3=\\dfrac{\\log_5 3}{\\log_5 25}=\\frac12\\log_5 3$。",
    "第1括弧は $\\log_3 25+\\log_9 5=2\\log_3 5+\\frac12\\log_3 5=\\frac52\\log_3 5$。",
    "第2括弧は $\\log_5 27+\\log_{25}3=3\\log_5 3+\\frac12\\log_5 3=\\frac72\\log_5 3$。",
    "$\\log_3 5\\cdot\\log_5 3=1$ なので、積は $\\frac52\\cdot\\frac72=\\frac{35}{4}$。"
  ],
  "1-(4)": [
    "共通接線を $y=mx+c$ とおく。",
    "$y=-x^2+1$ に接する条件は、$-x^2+1=mx+c$ が重解をもつこと。整理すると $x^2+mx+(c-1)=0$ なので $m^2-4(c-1)=0$。",
    "$y=x^2-2x+6$ に接する条件は、$x^2-2x+6=mx+c$ が重解をもつこと。整理すると $x^2-(m+2)x+(6-c)=0$ なので $(m+2)^2-4(6-c)=0$。",
    "2つの条件から $c=1+\\frac{m^2}{4}$ と $c=6-\\frac{(m+2)^2}{4}$。等置して $m^2+2m-8=0$。",
    "$m=2,-4$。それぞれ $c=2,5$ だから、$y=2x+2$、$y=-4x+5$。"
  ],
  "1-(5)": [
    "これは積分範囲が $-1$ から $1$ で、上端や下端に $x$ が入っていない。したがって、参照ページでいう「定数型」の積分方程式である。",
    "定数型では、まず定積分全体を文字で置く。$\\displaystyle k=\\int_{-1}^{1}f(t)\\,dt$ とおく。",
    "すると元の式は $f(x)=6x^2-2x+k$ と書ける。ここで $k$ はまだ未知の定数。",
    "次に、この $f(x)$ を定積分の中へ戻す。$k=\\displaystyle\\int_{-1}^{1}(6t^2-2t+k)\\,dt$。",
    "計算すると、$\\displaystyle\\int_{-1}^{1}6t^2dt=4$、$\\displaystyle\\int_{-1}^{1}(-2t)dt=0$、$\\displaystyle\\int_{-1}^{1}k\\,dt=2k$。",
    "よって $k=4+2k$。これを解くと $k=-4$。",
    "元の $f(x)=6x^2-2x+k$ に戻して、$f(x)=6x^2-2x-4$。したがって空欄は $4$。"
  ],
  "2-(1)": [
    "$\\triangle ABC$ で余弦定理を使う。",
    "$AC^2=AB^2+BC^2-2\\cdot AB\\cdot BC\\cos60^\\circ$。",
    "$AC^2=2^2+3^2-2\\cdot2\\cdot3\\cdot\\frac12=4+9-6=7$。",
    "したがって $AC=\\sqrt7$。"
  ],
  "2-(2)": [
    "円に内接する四角形では、向かい合う角の和が $180^\\circ$。",
    "$\\angle ABC=60^\\circ$ なので $\\angle ADC=120^\\circ$。",
    "$\\triangle ACD$ に余弦定理を使い、$AC^2=AD^2+CD^2-2\\cdot AD\\cdot CD\\cos120^\\circ$。",
    "$7=AD^2+1+AD$ となる。$AD^2+AD-6=0$ より、正の解は $AD=2$。"
  ],
  "2-(3)": [
    "$\\triangle ABC$ で正弦定理、または面積公式を使う。",
    "正弦定理から $\\frac{BC}{\\sin\\angle BAC}=\\frac{AC}{\\sin60^\\circ}$。",
    "$\\sin\\angle BAC=\\frac{BC\\sin60^\\circ}{AC}=\\frac{3\\cdot\\frac{\\sqrt3}{2}}{\\sqrt7}$。",
    "分母を有理化して $\\frac{3\\sqrt{21}}{14}$。"
  ],
  "2-(4)": [
    "$\\triangle ABC$ の外接円が四角形 $ABCD$ の円でもある。",
    "正弦定理の拡張 $\\frac{AC}{\\sin\\angle ABC}=2R$ を使う。",
    "$2R=\\frac{\\sqrt7}{\\sin60^\\circ}=\\frac{\\sqrt7}{\\sqrt3/2}=\\frac{2\\sqrt7}{\\sqrt3}$。",
    "$R=\\frac{\\sqrt7}{\\sqrt3}=\\frac{\\sqrt{21}}{3}$。"
  ],
  "2-(5)": [
    "四角形を対角線 $AC$ で $\\triangle ABC$ と $\\triangle ACD$ に分ける。",
    "$\\triangle ABC$ の面積は $\\frac12\\cdot2\\cdot3\\cdot\\sin60^\\circ=\\frac{3\\sqrt3}{2}$。",
    "$\\triangle ACD$ は $AD=2, CD=1, \\angle ADC=120^\\circ$ なので、面積は $\\frac12\\cdot2\\cdot1\\cdot\\sin120^\\circ=\\frac{\\sqrt3}{2}$。",
    "合計は $2\\sqrt3$。"
  ],
  "3-(1)": [
    "この問題は、さいころを何回も投げるので反復試行の確率として考える。1回ごとに「奇数」か「偶数」かの2択で、どちらも確率は $\\frac12$。",
    "奇数が出た回数を $k$ とすると、3回後に $A=k$、$B=2+(3-k)=5-k$ となる。",
    "$B>A$ は $5-k>k$、つまり $k\\le2$。これは「奇数が3回出る場合以外」と同じ。",
    "反復試行の公式では $P(k=3)={}_3C_3(\\frac12)^3=\\frac18$。",
    "したがって $P(B>A)=1-\\frac18=\\frac78$。"
  ],
  "3-(2)": [
    "Aの座標は、奇数が出た回数そのもの。よって $A=3$ は「4回中ちょうど3回奇数が出る」こと。",
    "反復試行の公式は、事象Aがちょうど $k$ 回起こる確率 $ {}_nC_kp^k(1-p)^{n-k}$。",
    "ここでは $n=4$、$k=3$、$p=\\frac12$。",
    "${}_4C_3(\\frac12)^3(\\frac12)^1=4\\cdot\\frac1{16}=\\frac14$。"
  ],
  "3-(3)": [
    "Aが座標4に到達するには、5回中少なくとも4回奇数が出ればよい。",
    "「少なくとも」は、該当する回数を場合分けして足す。ここでは奇数が4回または5回。",
    "反復試行の公式より、確率は ${}_5C_4(\\frac12)^4(\\frac12)^1+{}_5C_5(\\frac12)^5$。",
    "これは $\\frac5{32}+\\frac1{32}=\\frac6{32}=\\frac3{16}$。",
    "このとき偶数は1回以下なので、Bは座標4に届かず、AがBより先に座標4へ到達している。"
  ],
  "3-(4)": [
    "5回中、奇数が $k$ 回なら $A=k$。偶数は $5-k$ 回なので $B=2+(5-k)=7-k$。",
    "$A>B$ は $k>7-k$、つまり $k\\ge4$。",
    "したがって、奇数が4回または5回出る確率を反復試行の公式で足す。",
    "${}_5C_4(\\frac12)^4(\\frac12)^1+{}_5C_5(\\frac12)^5=\\frac5{32}+\\frac1{32}=\\frac3{16}$。"
  ],
  "3-(5)": [
    "6回中、奇数が $k$ 回なら $A=k$。偶数は $6-k$ 回なので $B=2+(6-k)=8-k$。",
    "同じ座標になる条件は $k=8-k$、つまり $k=4$。",
    "これは「6回中ちょうど4回奇数が出る」反復試行。",
    "${}_6C_4(\\frac12)^4(\\frac12)^2={}_6C_4(\\frac12)^6=15\\cdot\\frac1{64}=\\frac{15}{64}$。"
  ],
  "4-(1)": [
    "$t=\\sin\\theta+\\cos\\theta$ とおくと、$t^2=\\sin^2\\theta+2\\sin\\theta\\cos\\theta+\\cos^2\\theta$。",
    "つまり $t^2=1+\\sin2\\theta$ なので、$\\sin2\\theta=t^2-1$。",
    "$y=\\sin2\\theta+2(\\sin\\theta+\\cos\\theta)-2$ に代入する。",
    "$y=(t^2-1)+2t-2=t^2+2t-3$。"
  ],
  "4-(2)": [
    "$\\sin\\theta+\\cos\\theta$ は合成して $\\sqrt2\\sin(\\theta+\\frac\\pi4)$ と表せる。",
    "$\\sin$ の値域は $-1$ から $1$。",
    "したがって $t$ の値域は $-\\sqrt2\\le t\\le\\sqrt2$。"
  ],
  "4-(3)": [
    "(1)より $y=t^2+2t-3$。平方完成すると $y=(t+1)^2-4$ である。",
    "(2)より $t$ の範囲は $-\\sqrt2\\le t\\le\\sqrt2$。つまり、$y=(t+1)^2-4$ をこの区間だけで考える。",
    "この二次関数は上に開く放物線で、頂点は $t=-1$、最小値は $-4$。しかも $-1$ は区間 $[-\\sqrt2,\\sqrt2]$ の中にあるので、この最小値は実際にとれる。",
    "次に $t=-1$ となる $\\theta$ を求める。$t=\\sin\\theta+\\cos\\theta=\\sqrt2\\sin(\\theta+\\frac\\pi4)$ だから、$\\sqrt2\\sin(\\theta+\\frac\\pi4)=-1$。",
    "よって $\\sin(\\theta+\\frac\\pi4)=-\\frac1{\\sqrt2}$。$0\\le\\theta<2\\pi$ で調べると、$\\theta=\\pi,\\frac32\\pi$ の2つが該当する。",
    "最大値は、上に開く放物線なので頂点ではなく区間の端で起こる。端点 $t=-\\sqrt2$ と $t=\\sqrt2$ を比べる。",
    "$t=-\\sqrt2$ のとき $y=2-2\\sqrt2-3=-1-2\\sqrt2$、$t=\\sqrt2$ のとき $y=2+2\\sqrt2-3=-1+2\\sqrt2$。",
    "大きいのは $-1+2\\sqrt2$ なので最大値は $-1+2\\sqrt2$。",
    "このとき $t=\\sqrt2$、つまり $\\sin\\theta+\\cos\\theta=\\sqrt2$。これは $\\sqrt2\\sin(\\theta+\\frac\\pi4)=\\sqrt2$ なので $\\sin(\\theta+\\frac\\pi4)=1$。",
    "$0\\le\\theta<2\\pi$ では $\\theta+\\frac\\pi4=\\frac\\pi2$ となり、$\\theta=\\frac\\pi4$。"
  ]
};

const DETAIL_TEXTS = {
  sougou: DETAIL_TEXT,
  ...(window.TEIKYO_DETAIL_TEXTS || {}),
  ...(window.MATH_DETAIL_TEXTS || {}),
};

function loadCurrentExam() {
  const requested = new URLSearchParams(window.location.search).get("exam");
  if (requested && AVAILABLE_EXAMS.includes(requested)) return requested;
  const stored = localStorage.getItem(CURRENT_EXAM_KEY);
  if (stored && AVAILABLE_EXAMS.includes(stored)) return stored;
  if (AVAILABLE_EXAMS.includes("sougou")) return "sougou";
  return AVAILABLE_EXAMS[0] || "sougou";
}

function setCurrentExam(key) {
  if (!DATASETS[key]) return;
  currentExamKey = key;
  localStorage.setItem(CURRENT_EXAM_KEY, key);
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("exam", key);
  window.history.replaceState(null, "", nextUrl);
  DATA = DATASETS[currentExamKey] || { problem_groups: [] };
  groups = DATA.problem_groups || [];
  currentGroup = 0;
  progress = loadProgressFor(currentStudentName);
  answerDrafts = loadDraftsFor(currentStudentName);
  migrateLegacyProgress();
  progress = loadProgressFor(currentStudentName);
  answerDrafts = loadDraftsFor(currentStudentName);
  ensureAnswersForGroup();
  render();
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function normalizeStudentName(name = "") {
  return String(name).trim().replace(/\s+/g, " ");
}

function progressKeyFor(name) {
  return `${PROGRESS_PREFIX}${currentExamKey}:${encodeURIComponent(name)}`;
}

function draftKeyFor(name) {
  return `${DRAFT_PREFIX}${currentExamKey}:${encodeURIComponent(name)}`;
}

function loadStudents() {
  const lists = [readJson(STUDENTS_KEY, []), ...LEGACY_STUDENT_KEYS.map((key) => readJson(key, []))];
  return [...new Set(lists.flat().map(normalizeStudentName).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "ja"));
}

function saveStudents() {
  writeJson(STUDENTS_KEY, students);
}

function loadCurrentStudent() {
  const name = normalizeStudentName(localStorage.getItem(CURRENT_STUDENT_KEY) || "");
  return name;
}

function setCurrentStudent(name) {
  currentStudentName = normalizeStudentName(name);
  localStorage.setItem(CURRENT_STUDENT_KEY, currentStudentName);
  progress = loadProgressFor(currentStudentName);
  answerDrafts = loadDraftsFor(currentStudentName);
}

function loadProgressFor(name) {
  if (!name) return {};
  return readJson(progressKeyFor(name), {});
}

function loadDraftsFor(name) {
  if (!name) return {};
  return readJson(draftKeyFor(name), {});
}

function saveProgress() {
  if (!currentStudentName) return;
  writeJson(progressKeyFor(currentStudentName), progress);
}

function saveDrafts() {
  if (!currentStudentName) return;
  writeJson(draftKeyFor(currentStudentName), answerDrafts);
}

function migrateLegacyProgress() {
  const legacyKey = EXAMS[currentExamKey]?.legacyProgressKey || LEGACY_PROGRESS_KEY;
  const migratedKey = `${legacyKey}_migrated_into_unified`;
  const legacyRaw = localStorage.getItem(legacyKey);
  if (!legacyRaw || localStorage.getItem(migratedKey)) return;
  const legacy = readJson(legacyKey, {});
  if (!legacy || !Object.keys(legacy).length) {
    localStorage.setItem(migratedKey, "1");
    return;
  }
  const legacyStudent = "既存データ";
  if (!students.includes(legacyStudent)) {
    students.push(legacyStudent);
    saveStudents();
  }
  if (!localStorage.getItem(progressKeyFor(legacyStudent))) {
    writeJson(progressKeyFor(legacyStudent), legacy);
  }
  if (!currentStudentName) setCurrentStudent(legacyStudent);
  localStorage.setItem(migratedKey, "1");
}

function escapeHtml(text = "") {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function mdLite(text = "") {
  return escapeHtml(text)
    .replace(/\n{2,}/g, "</p><p>")
    .replace(/\n/g, "<br>");
}

function renderMath(root = document.body) {
  if (!window.renderMathInElement) return;
  window.renderMathInElement(root, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true },
    ],
    throwOnError: false,
  });
}

function groupKey(index) {
  return `group-${groups[index]?.group_number || index + 1}`;
}

function groupDraftKey(index) {
  return groupKey(index);
}

function subKey(groupIndex, subIndex) {
  return `${groupKey(groupIndex)}-${subIndex}`;
}

function allSubProblems() {
  return groups.flatMap((group, groupIndex) =>
    (group.sub_problems || []).map((sub, subIndex) => ({ group, groupIndex, sub, subIndex }))
  );
}

function completedCount() {
  return allSubProblems().filter(({ groupIndex, subIndex }) => progress[subKey(groupIndex, subIndex)]?.correct).length;
}

function totalCount() {
  return allSubProblems().length;
}

function normalize(value) {
  return String(value || "")
    .trim()
    .replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
    .replace(/[−ー－]/g, "-")
    .replace(/\s+/g, "");
}

function fieldValue(field) {
  const cells = answers[field.uid] || [];
  return normalize(cells.join(""));
}

function isFieldFilled(field) {
  const cells = answers[field.uid] || [];
  return cells.every((cell) => String(cell || "").trim() !== "");
}

function isFieldCorrect(field) {
  return fieldValue(field) === normalize(field.value);
}

function createViewFields(groupIndex, subIndex, sub) {
  return (sub.answer_fields || []).map((field, fieldIndex) => {
    const labels = field.boxes || [...(field.num_boxes || []), ...(field.den_boxes || [])];
    return {
      ...field,
      uid: `${groupIndex}-${subIndex}-${fieldIndex}`,
      labels,
      title: labels.join(""),
      cellCount: Math.max(1, labels.length || String(field.value || "").length),
    };
  });
}

function ensureAnswersForGroup() {
  const group = groups[currentGroup];
  const draftKey = groupDraftKey(currentGroup);
  answers = answerDrafts[draftKey] || {};
  (group.sub_problems || []).forEach((sub, subIndex) => {
    createViewFields(currentGroup, subIndex, sub).forEach((field) => {
      const stored = Array.isArray(answers[field.uid]) ? answers[field.uid] : [];
      answers[field.uid] = Array.from({ length: field.cellCount }, (_, index) => stored[index] || "");
    });
  });
  answerDrafts[draftKey] = answers;
  graded = false;
  checkedSubs = {};
  setFirstAvailableActive();
}

function persistCurrentAnswers() {
  answerDrafts[groupDraftKey(currentGroup)] = answers;
  saveDrafts();
}

function currentFields() {
  const group = groups[currentGroup];
  return (group.sub_problems || []).flatMap((sub, subIndex) =>
    createViewFields(currentGroup, subIndex, sub).map((field) => ({ field, sub, subIndex }))
  );
}

function fieldEntries() {
  return currentFields().flatMap(({ field, sub, subIndex }) =>
    Array.from({ length: field.cellCount }, (_, cellIndex) => ({ field, sub, subIndex, cellIndex }))
  );
}

function setFirstAvailableActive() {
  const blank = fieldEntries().find(({ field, cellIndex }) => !answers[field.uid]?.[cellIndex]);
  const first = blank || fieldEntries()[0];
  active = first ? { uid: first.field.uid, cellIndex: first.cellIndex } : null;
}

function renderExamShell() {
  const exam = EXAMS[currentExamKey] || EXAMS[AVAILABLE_EXAMS[0]];
  const school = SCHOOL_BY_EXAM[currentExamKey] || AVAILABLE_SCHOOLS[0];
  document.title = `${school.name} ${exam.label}｜数学過去問演習`;
  $("#appTitle").textContent = `${school.name} ${exam.label}`;
  $("#sourceTitle").textContent = exam.sourceTitle;
  $("#sourceText").textContent = exam.sourceText;
  $(".brand .eyebrow").textContent = exam.eyebrow || school.eyebrow || "MATH / PAST EXAMS";

  // 学校が1つだけのときは学校切替パネルを隠す
  $("#schoolPanel").classList.toggle("hidden", AVAILABLE_SCHOOLS.length <= 1);
  $("#schoolSwitch").innerHTML = AVAILABLE_SCHOOLS.map((s) => {
    const active = s.id === school.id;
    return `<button class="exam-option ${active ? "active" : ""}" type="button" role="tab"
      aria-selected="${active ? "true" : "false"}" data-school="${escapeHtml(s.id)}">
      <span>${escapeHtml(s.name)}</span>
      <small>${examCountForSchool(s)}方式</small>
    </button>`;
  }).join("");
  $$("[data-school]").forEach((button) => {
    button.addEventListener("click", () => setCurrentSchool(button.dataset.school));
  });

  const schoolExams = (school.exams || []).filter((e) => DATASETS[e.key]);
  $("#examSwitch").innerHTML = schoolExams.map((option) => {
    const key = option.key;
    return `<button class="exam-option ${key === currentExamKey ? "active" : ""}" type="button" role="tab"
      aria-selected="${key === currentExamKey ? "true" : "false"}" data-exam="${escapeHtml(key)}">
      <span>${escapeHtml(option.shortLabel)}</span>
      <small>${totalCountFor(key)}小問</small>
    </button>`;
  }).join("");
  $$("[data-exam]").forEach((button) => {
    button.addEventListener("click", () => setCurrentExam(button.dataset.exam));
  });
}

function examCountForSchool(school) {
  return (school.exams || []).filter((exam) => DATASETS[exam.key]).length;
}

function setCurrentSchool(schoolId) {
  const school = AVAILABLE_SCHOOLS.find((s) => s.id === schoolId);
  if (!school) return;
  if (SCHOOL_BY_EXAM[currentExamKey]?.id === schoolId) return;
  const firstExam = (school.exams || []).find((exam) => DATASETS[exam.key]);
  if (firstExam) setCurrentExam(firstExam.key);
}

function totalCountFor(examKey) {
  return (DATASETS[examKey]?.problem_groups || []).reduce((sum, group) => sum + (group.sub_problems || []).length, 0);
}

function renderGroups() {
  $("#groupCount").textContent = `${groups.length}題`;
  $("#groupList").innerHTML = groups.map((group, index) => {
    const subs = group.sub_problems || [];
    const done = subs.every((_, subIndex) => progress[subKey(index, subIndex)]?.correct);
    const nDone = subs.filter((_, subIndex) => progress[subKey(index, subIndex)]?.correct).length;
    return `<button class="group-item ${index === currentGroup ? "active" : ""} ${done ? "done" : ""}" data-group="${index}" type="button">
      <span class="num">[${escapeHtml(group.group_number)}]</span>
      <span class="name">${escapeHtml(group.title)}</span>
      <span class="mini">${nDone}/${subs.length} 完了</span>
    </button>`;
  }).join("");
  $$("[data-group]").forEach((button) => {
    button.addEventListener("click", () => {
      currentGroup = Number(button.dataset.group);
      ensureAnswersForGroup();
      render();
    });
  });
}

function renderProgress() {
  const done = completedCount();
  const total = totalCount();
  $("#progressText").textContent = `${done} / ${total} 小問完了`;
  $("#progressFill").style.width = total ? `${Math.round((done / total) * 100)}%` : "0%";
}

function renderStudentMenu() {
  const sel = $("#studentSel");
  sel.innerHTML = [`<option value="">ゲスト（記録なし）</option>`]
    .concat(students.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`))
    .concat([`<option value="__add__">＋ 新しい生徒を追加…</option>`])
    .join("");
  sel.value = students.includes(currentStudentName) ? currentStudentName : "";
  if (sel.value !== currentStudentName) setCurrentStudent("");

  const hasStudent = Boolean(currentStudentName);
  $("#renameStudentBtn").disabled = !hasStudent;
  $("#deleteStudentBtn").disabled = !hasStudent;
  $("#studentHint").textContent = hasStudent
    ? `${currentStudentName} さんの進捗を保存中です。`
    : "ゲスト：記録は保存されません。生徒を選ぶと進捗が残ります。";
}

function refreshStudentView() {
  ensureAnswersForGroup();
  render();
}

function showAddStudentInput() {
  const input = $("#newStudent");
  input.classList.remove("hidden-input");
  input.focus();
}

function addStudent() {
  const input = $("#newStudent");
  if (input.classList.contains("hidden-input")) {
    showAddStudentInput();
    return;
  }
  const name = normalizeStudentName(input.value);
  if (!name) {
    input.focus();
    return;
  }
  if (!students.includes(name)) {
    students.push(name);
    students.sort((a, b) => a.localeCompare(b, "ja"));
    saveStudents();
  }
  input.value = "";
  input.classList.add("hidden-input");
  setCurrentStudent(name);
  refreshStudentView();
}

function renameStudent() {
  const oldName = currentStudentName;
  if (!oldName) return;
  const nextName = normalizeStudentName(prompt("新しい生徒名を入力してください。", oldName) || "");
  if (!nextName || nextName === oldName) return;

  const oldProgress = loadProgressFor(oldName);
  const nextProgress = loadProgressFor(nextName);
  const mergedProgress = { ...oldProgress, ...nextProgress };

  students = students.filter((name) => name !== oldName);
  if (!students.includes(nextName)) students.push(nextName);
  students.sort((a, b) => a.localeCompare(b, "ja"));
  saveStudents();
  writeJson(progressKeyFor(nextName), mergedProgress);
  localStorage.removeItem(progressKeyFor(oldName));
  setCurrentStudent(nextName);
  refreshStudentView();
}

function deleteStudent() {
  const name = currentStudentName;
  if (!name) return;
  if (!confirm(`${name} さんの進捗記録を削除しますか。`)) return;
  students = students.filter((student) => student !== name);
  saveStudents();
  localStorage.removeItem(progressKeyFor(name));
  setCurrentStudent("");
  refreshStudentView();
}

function renderField(field) {
  const values = answers[field.uid] || [];
  const cells = values.map((value, cellIndex) => {
    const subIndex = Number(field.uid.split("-")[1]);
    const checked = isSubChecked(subIndex);
    const state = checked ? (isFieldCorrect(field) ? "correct" : "wrong") : "";
    const isActive = active && active.uid === field.uid && active.cellIndex === cellIndex;
    return `<button class="cell ${state} ${isActive ? "active" : ""}" type="button"
      data-cell="${field.uid}" data-cell-index="${cellIndex}" aria-label="${escapeHtml(field.title)} ${cellIndex + 1}マス目">${escapeHtml(value)}</button>`;
  }).join("");
  return `<div class="field">
    <div class="flabel">${escapeHtml(field.title || "空欄")}</div>
    <div class="cells">${cells}</div>
  </div>`;
}

function stepsForSub(group, sub) {
  return DETAIL_TEXTS[currentExamKey]?.[detailKey(group, sub)] || fallbackDetail(sub);
}

function hintLevelLabel(stepIndex, totalSteps) {
  if (totalSteps <= 1) return HINT_LEVELS[0];
  if (stepIndex === totalSteps - 1) return HINT_LEVELS[3];
  const levelIndex = Math.min(HINT_LEVELS.length - 2, Math.floor(stepIndex * (HINT_LEVELS.length - 1) / totalSteps));
  return HINT_LEVELS[levelIndex];
}

function hintSummaryForFields(fields) {
  const summaries = fields.map((field) => {
    const sign = field.format === "signed_integer" || String(field.value || "").startsWith("-") ? "符号に注意" : "";
    return `${field.title || "空欄"}: ${field.cellCount}マス${sign ? ` / ${sign}` : ""}`;
  });
  return summaries.length ? summaries.join("、") : "";
}

function renderHintBox(group, sub, subIndex, fields) {
  if (!$("#hintMode")?.checked) return "";
  const key = subKey(currentGroup, subIndex);
  const entry = progress[key] || {};
  const steps = stepsForSub(group, sub);
  const shown = Math.min(entry.hintsUsed || 0, steps.length);
  const nextNumber = Math.min(shown + 1, steps.length);
  const isAtAnswer = shown === steps.length - 1;
  const fieldHint = hintSummaryForFields(fields);
  const revealed = steps.slice(0, shown).map((step, stepIndex) => `
    <li>
      <span class="hint-level">L${Math.min(stepIndex + 1, 4)} ${escapeHtml(hintLevelLabel(stepIndex, steps.length))}</span>
      <p>${mdLite(step)}</p>
    </li>
  `).join("");
  const emptyText = fieldHint
    ? `<p class="hint-empty">まずは問題文から使う公式を探してください。空欄の形は ${escapeHtml(fieldHint)} です。</p>`
    : `<p class="hint-empty">まずは問題文から、求める量と条件を分けてみてください。</p>`;
  return `<div class="hint-box" data-hint-box="${subIndex}">
    <div class="hint-toolbar">
      <button class="hint-button" type="button" data-hint="${subIndex}" ${shown >= steps.length ? "disabled" : ""}>
        ${shown >= steps.length ? "ヒント完了" : `${isAtAnswer ? "答え合わせへ" : "ヒントを見る"} (${nextNumber}/${steps.length})`}
      </button>
      <span class="hint-status">${shown ? `${shown}段階使用` : "ノーヒント挑戦中"}</span>
    </div>
    <div class="hint-steps">${revealed ? `<ol>${revealed}</ol>` : emptyText}</div>
  </div>`;
}

function subResult(subIndex) {
  return checkedSubs[subKey(currentGroup, subIndex)] || null;
}

function isSubChecked(subIndex) {
  return Boolean(subResult(subIndex));
}

function activeSubIndex() {
  const entry = activeEntry();
  return entry ? entry.subIndex : null;
}

function gradeSubProblem(subIndex) {
  const group = groups[currentGroup];
  const sub = group.sub_problems[subIndex];
  if (!sub) return null;
  const fields = createViewFields(currentGroup, subIndex, sub);
  const blank = fields.some((field) => !isFieldFilled(field));
  if (blank) return null;
  const correctFields = fields.filter(isFieldCorrect).length;
  const result = {
    checked: true,
    correct: correctFields === fields.length,
    correctFields,
    total: fields.length,
    at: new Date().toISOString(),
  };
  checkedSubs[subKey(currentGroup, subIndex)] = result;
  graded = Object.keys(checkedSubs).length > 0;
  if (result.correct) {
    const key = subKey(currentGroup, subIndex);
    progress[key] = { ...(progress[key] || {}), correct: true, at: result.at };
  }
  return result;
}

function invalidateSubCheck(subIndex) {
  if (subIndex == null) return;
  delete checkedSubs[subKey(currentGroup, subIndex)];
  graded = Object.keys(checkedSubs).length > 0;
}

function focusSubFirstBlank(subIndex) {
  const blank = fieldEntries().find(({ field, cellIndex, subIndex: entrySubIndex }) =>
    entrySubIndex === subIndex && !answers[field.uid]?.[cellIndex]
  );
  if (!blank) return;
  active = { uid: blank.field.uid, cellIndex: blank.cellIndex };
  renderProblem();
  renderActiveLabel();
  focusActiveCell();
}

function renderSubProblem(sub, subIndex) {
  const group = groups[currentGroup];
  const fields = createViewFields(currentGroup, subIndex, sub);
  const filled = fields.filter(isFieldFilled).length;
  const result = subResult(subIndex);
  const isCorrect = result?.correct;
  const isWrong = result && !result.correct;
  const hintsUsed = progress[subKey(currentGroup, subIndex)]?.hintsUsed || 0;
  const noHintBadge = isCorrect && hintsUsed === 0 ? `<span class="no-hint-badge">ノーヒント正解</span>` : "";
  const resultText = !result
    ? "未確認"
    : result.correct
      ? "正解です"
      : `${result.correctFields}/${result.total} 正解・入力内容を見直してください`;
  const resultClass = !result ? "pending" : result.correct ? "ok" : "ng";
  return `<article class="sub-card ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}" data-sub="${subIndex}">
    <div class="sub-head">
      <div class="sub-label">${escapeHtml(sub.label)}</div>
      <div class="sub-meta">${noHintBadge}${filled}/${fields.length} 入力</div>
    </div>
    <div class="sub-stem"><p>${mdLite(sub.stem_md)}</p></div>
    <div class="fields">${fields.map(renderField).join("")}</div>
    ${renderHintBox(group, sub, subIndex, fields)}
    <div class="sub-checkbar">
      <span class="check-result ${resultClass}" aria-live="polite">${resultText}</span>
      <button class="sub-check-button ${result ? "ghost" : "primary"}" type="button" data-check-sub="${subIndex}" ${filled < fields.length ? "disabled" : ""}>
        ${result ? "もう一度確認" : "この小問を確認"}
      </button>
    </div>
  </article>`;
}

function renderProblem() {
  const group = groups[currentGroup];
  $("#groupMeta").textContent = `GROUP ${group.group_number} / ${group.source_year}`;
  $("#groupTitle").textContent = group.title;
  $("#problemPosition").textContent = `大問 ${currentGroup + 1} / ${groups.length}`;
  $("#prevGroupBtn").disabled = currentGroup <= 0;
  $("#nextGroupBtn").disabled = currentGroup >= groups.length - 1;
  $("#topicTag").textContent = group.topic_tag || "数学";
  $("#groupStem").innerHTML = `<p>${mdLite(group.stem_md || "")}</p>`;
  $("#subList").innerHTML = (group.sub_problems || []).map(renderSubProblem).join("");
  bindCells();
  bindHints();
  bindSubChecks();
  renderMath($("#groupStem"));
  renderMath($("#subList"));
}

function bindCells() {
  $$(".cell").forEach((cell) => {
    cell.addEventListener("click", () => {
      active = { uid: cell.dataset.cell, cellIndex: Number(cell.dataset.cellIndex) };
      renderProblem();
      renderActiveLabel();
      focusActiveCell();
    });
  });
}

function focusActiveCell() {
  if (!active) return;
  const cell = document.querySelector(`[data-cell="${CSS.escape(active.uid)}"][data-cell-index="${active.cellIndex}"]`);
  cell?.focus();
}

function bindHints() {
  $$("[data-hint]").forEach((button) => {
    button.addEventListener("click", () => revealHint(Number(button.dataset.hint)));
  });
}

function revealHint(subIndex) {
  const group = groups[currentGroup];
  const sub = group.sub_problems[subIndex];
  const key = subKey(currentGroup, subIndex);
  const steps = stepsForSub(group, sub);
  const current = Math.min(progress[key]?.hintsUsed || 0, steps.length);
  if (current >= steps.length) return;
  if (current === steps.length - 1 && !confirm("最後のヒントには答えが含まれます。先に一度、今の答えで採点しますか？\n\nOK: 答え合わせのヒントを開く\nキャンセル: まだ考える")) return;
  progress[key] = {
    ...(progress[key] || {}),
    hintsUsed: current + 1,
    hintAt: new Date().toISOString(),
  };
  saveProgress();
  renderProblem();
  renderScore(true);
}

function renderKeypad() {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "⌫", "消去", "次へ"];
  const keyLabels = { "消去": "全部消す" };
  $("#keypad").innerHTML = keys.map((key) => {
    const wide = key === "消去" || key === "次へ" ? "wide" : "";
    return `<button class="${wide}" type="button" data-key="${key}">${keyLabels[key] || key}</button>`;
  }).join("");
  $$("[data-key]").forEach((button) => {
    button.addEventListener("click", () => handleKey(button.dataset.key));
  });
}

function activeEntry() {
  if (!active) return null;
  return fieldEntries().find(({ field, cellIndex }) => field.uid === active.uid && cellIndex === active.cellIndex) || null;
}

function renderActiveLabel() {
  if (!active) {
    $("#activeLabel").textContent = "マスを選択してください";
    return;
  }
  const entry = activeEntry();
  const box = entry?.field.labels?.[active.cellIndex] || `${active.cellIndex + 1}マス目`;
  $("#activeLabel").textContent = entry
    ? `大問${groups[currentGroup].group_number} ${entry.sub.label} / ${box}`
    : `${active.uid.replaceAll("-", ".")} / ${active.cellIndex + 1}マス目`;
}

function handleKey(key) {
  if (!active) return;
  const editedSubIndex = activeSubIndex();
  const changesAnswer = key !== "次へ";
  if (changesAnswer) invalidateSubCheck(editedSubIndex);
  const cells = answers[active.uid];
  if (!cells) return;
  if (key === "⌫") {
    cells[active.cellIndex] = "";
    movePrevIfEmpty();
  } else if (key === "消去") {
    answers[active.uid] = cells.map(() => "");
    active.cellIndex = 0;
  } else if (key === "次へ") {
    moveNextCell();
  } else {
    cells[active.cellIndex] = key;
    moveNextCell();
  }
  persistCurrentAnswers();
  if (changesAnswer && $("#instantCheck").checked && editedSubIndex != null) {
    gradeSubProblem(editedSubIndex);
    saveProgress();
  }
  renderProblem();
  renderScore(true);
  renderSolutions();
  renderActiveLabel();
}

function moveNextCell() {
  if (!active) return;
  const cells = answers[active.uid] || [];
  if (active.cellIndex < cells.length - 1) {
    active.cellIndex += 1;
    return;
  }
  const ids = Object.keys(answers);
  const idx = ids.indexOf(active.uid);
  if (idx >= 0 && idx < ids.length - 1) {
    active = { uid: ids[idx + 1], cellIndex: 0 };
  }
}

function movePrevIfEmpty() {
  if (!active) return;
  if (active.cellIndex > 0) active.cellIndex -= 1;
}

function gradeCurrent() {
  checkedSubs = {};
  graded = false;
  const group = groups[currentGroup];
  (group.sub_problems || []).forEach((sub, subIndex) => {
    gradeSubProblem(subIndex);
  });
  saveProgress();
  persistCurrentAnswers();
  render();
}

function groupResults() {
  const group = groups[currentGroup];
  return (group.sub_problems || []).map((sub, subIndex) => {
    const fields = createViewFields(currentGroup, subIndex, sub);
    const checked = subResult(subIndex);
    const correctFields = fields.filter(isFieldCorrect).length;
    return {
      sub,
      subIndex,
      fields,
      correctFields,
      total: fields.length,
      checked: Boolean(checked),
      correct: Boolean(checked?.correct),
    };
  });
}

function anyBlankField() {
  return fieldEntries().some(({ field, cellIndex }) => !answers[field.uid]?.[cellIndex]);
}

function anyWrongField() {
  return groupResults().some((result) => result.checked && !result.correct);
}

function renderNextIssueBtn() {
  const button = $("#nextIssueBtn");
  const hasIssue = graded ? anyWrongField() : anyBlankField();
  button.disabled = !hasIssue;
  button.textContent = graded ? "誤答へ" : "未入力へ";
}

function bindSubChecks() {
  $$('[data-check-sub]').forEach((button) => {
    button.addEventListener("click", () => checkSubProblem(Number(button.dataset.checkSub)));
  });
}

function checkSubProblem(subIndex) {
  const result = gradeSubProblem(subIndex);
  if (!result) {
    focusSubFirstBlank(subIndex);
    return;
  }
  saveProgress();
  render();
  const card = document.querySelector(`[data-sub="${subIndex}"]`);
  card?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function movePrevCell() {
  if (!active) return;
  if (active.cellIndex > 0) {
    active.cellIndex -= 1;
    return;
  }
  const ids = Object.keys(answers);
  const idx = ids.indexOf(active.uid);
  if (idx > 0) {
    const previousUid = ids[idx - 1];
    active = { uid: previousUid, cellIndex: Math.max(0, (answers[previousUid] || []).length - 1) };
  }
}

function renderScore(forceBlank = false) {
  if (!graded && forceBlank) {
    $("#scoreBox").innerHTML = `<span class="score-main">—</span><span class="score-sub">未採点</span>`;
    $("#resultList").innerHTML = "";
    $("#gradeBtn").textContent = "採点する";
    renderNextIssueBtn();
    return;
  }
  const results = groupResults();
  const correct = results.filter((r) => r.correct).length;
  const checked = results.filter((r) => r.checked).length;
  const total = results.length;
  $("#gradeBtn").textContent = graded ? "再採点する" : "採点する";
  renderNextIssueBtn();
  const scoreLabel = checked < total
    ? `確認済み ${checked}/${total}小問`
    : `正答率 ${Math.round((correct / total) * 100)}%`;
  $("#scoreBox").innerHTML = `<span class="score-main">${correct}/${checked || 0}</span><span class="score-sub">${scoreLabel}</span>`;
  $("#resultList").innerHTML = results.map((r) => `<div class="result-row">
    <span>${escapeHtml(r.sub.label)}</span>
    <span class="${!r.checked ? "pending" : r.correct ? "ok" : "ng"}">${!r.checked ? "未確認" : r.correct ? "正解" : `${r.correctFields}/${r.total}`}</span>
    <small class="hint-log">ヒント${progress[subKey(currentGroup, r.subIndex)]?.hintsUsed || 0}回</small>
  </div>`).join("");
}

function renderSolutions() {
  const group = groups[currentGroup];
  const visibleSubs = $("#hideSolutions").checked
    ? (group.sub_problems || []).filter((_, subIndex) => isSubChecked(subIndex))
    : (group.sub_problems || []);
  if (!visibleSubs.length) {
    $("#solutionList").classList.add("muted");
    $("#solutionList").textContent = $("#hideSolutions").checked
      ? "小問を確認すると、その小問の解説が表示されます。"
      : "解説はありません。";
    return;
  }
  $("#solutionList").classList.remove("muted");
  $("#solutionList").innerHTML = visibleSubs.map((sub) => `
    <button class="solution-card" type="button" data-solution="${currentGroup}-${group.sub_problems.indexOf(sub)}">
      <h3>${escapeHtml(sub.label)} solution</h3>
      <p>${mdLite(sub.solution_md || "")}</p>
      <span class="open-note">クリックして詳細解説</span>
    </button>
  `).join("");
  $$(".solution-card").forEach((card) => {
    card.addEventListener("click", () => {
      const [groupIndex, subIndex] = card.dataset.solution.split("-").map(Number);
      openSolutionModal(groupIndex, subIndex);
    });
  });
  renderMath($("#solutionList"));
}

function answerSummary(sub) {
  return (sub.answer_fields || []).flatMap((field) => {
    const boxes = field.boxes || [...(field.num_boxes || []), ...(field.den_boxes || [])];
    if (!boxes.length) return [];
    return [`<span class="answer-chip">${escapeHtml(boxes.join(""))} = ${escapeHtml(field.value)}</span>`];
  }).join("");
}

function detailKey(group, sub) {
  return `${group.group_number}-${sub.label}`;
}

function fallbackDetail(sub) {
  return [
    "まず問題文から、求める量と条件を分けて確認する。",
    "次に使う公式・定理を決め、式を1本ずつ立てる。",
    "最後に空欄の桁数・符号・分母分子の位置に合わせて答えを入れる。",
    sub.solution_md || ""
  ].filter(Boolean);
}

function detailStepsHtml(group, sub) {
  const steps = stepsForSub(group, sub);
  return `<ol>${steps.map((step) => `<li>${mdLite(step)}</li>`).join("")}</ol>`;
}

function openSolutionModal(groupIndex, subIndex) {
  const group = groups[groupIndex];
  const sub = group.sub_problems[subIndex];
  $("#modalMeta").textContent = `GROUP ${group.group_number} / ${sub.label}`;
  $("#modalTitle").textContent = `${group.title} ${sub.label}`;
  $("#modalBody").innerHTML = `
    <div class="detail-grid">
      <section class="detail-section">
        <h3>問題</h3>
        <p>${mdLite(sub.stem_md || "")}</p>
      </section>
      <section class="detail-section">
        <h3>答え</h3>
        <div>${answerSummary(sub) || "—"}</div>
      </section>
      <section class="detail-section">
        <h3>詳しい解き方</h3>
        ${detailStepsHtml(group, sub)}
      </section>
      <section class="detail-section">
        <h3>短い解説</h3>
        <p>${mdLite(sub.solution_md || "")}</p>
      </section>
    </div>
  `;
  modalReturnFocus = document.activeElement;
  $("#solutionModal").classList.remove("hidden");
  $("#modalCloseBtn").focus();
  renderMath($("#solutionModal"));
}

function closeSolutionModal() {
  $("#solutionModal").classList.add("hidden");
  if (modalReturnFocus instanceof HTMLElement) modalReturnFocus.focus();
  modalReturnFocus = null;
}

function clearCurrent() {
  answerDrafts[groupDraftKey(currentGroup)] = {};
  saveDrafts();
  ensureAnswersForGroup();
  render();
}

function firstUnfinishedGroupIndex() {
  const index = groups.findIndex((group, groupIndex) =>
    (group.sub_problems || []).some((_, subIndex) => !progress[subKey(groupIndex, subIndex)]?.correct));
  return index === -1 ? 0 : index;
}

function continueStudying() {
  currentGroup = firstUnfinishedGroupIndex();
  ensureAnswersForGroup();
  render();
}

function renderContinuePanel() {
  const done = completedCount();
  const total = totalCount();
  const hint = $("#continueHint");
  if (!total) {
    hint.textContent = "";
    return;
  }
  if (done >= total) {
    hint.textContent = "全問完了しました。好きな大問を選んで見直せます。";
    return;
  }
  const target = groups[firstUnfinishedGroupIndex()];
  hint.textContent = target ? `次は [${target.group_number}] ${target.title} です。` : "";
}

function resetProgress() {
  const target = currentStudentName ? `${currentStudentName} さんの進捗` : "ゲストの画面内進捗";
  if (!confirm(`${target}をリセットしますか。`)) return;
  progress = {};
  answerDrafts = {};
  saveProgress();
  saveDrafts();
  ensureAnswersForGroup();
  render();
}

function focusFirstBlank() {
  const blank = fieldEntries().find(({ field, cellIndex }) => !answers[field.uid]?.[cellIndex]);
  if (!blank) return;
  active = { uid: blank.field.uid, cellIndex: blank.cellIndex };
  renderProblem();
  renderActiveLabel();
}

function focusFirstWrong() {
  if (!graded) return;
  const wrong = fieldEntries().find(({ field }) => !isFieldCorrect(field));
  if (!wrong) return;
  active = { uid: wrong.field.uid, cellIndex: wrong.cellIndex };
  renderProblem();
  renderActiveLabel();
}

function focusNextIssue() {
  if (graded) focusFirstWrong();
  else focusFirstBlank();
}

function moveGroup(offset) {
  const next = currentGroup + offset;
  if (next < 0 || next >= groups.length) return;
  currentGroup = next;
  ensureAnswersForGroup();
  render();
  $("#groupTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handlePhysicalKey(event) {
  const target = event.target;
  if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) return;
  if (!active || !$("#solutionModal").classList.contains("hidden")) return;
  if (/^[0-9]$/.test(event.key)) {
    event.preventDefault();
    handleKey(event.key);
  } else if (event.key === "-" || event.key === "Minus") {
    event.preventDefault();
    handleKey("-");
  } else if (event.key === "Backspace") {
    event.preventDefault();
    handleKey("⌫");
  } else if (event.key === "Delete") {
    event.preventDefault();
    handleKey("消去");
  } else if (event.key === "Enter") {
    event.preventDefault();
    gradeCurrent();
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    moveNextCell();
    renderProblem();
    renderActiveLabel();
    focusActiveCell();
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    movePrevCell();
    renderProblem();
    renderActiveLabel();
    focusActiveCell();
  }
}

function bindStaticEvents() {
  $("#gradeBtn").addEventListener("click", gradeCurrent);
  $("#clearBtn").addEventListener("click", clearCurrent);
  $("#nextIssueBtn").addEventListener("click", focusNextIssue);
  $("#continueBtn").addEventListener("click", continueStudying);
  $("#prevGroupBtn").addEventListener("click", () => moveGroup(-1));
  $("#nextGroupBtn").addEventListener("click", () => moveGroup(1));
  $("#resetProgressBtn").addEventListener("click", resetProgress);
  $("#printBtn").addEventListener("click", () => window.print());
  $("#hideSolutions").addEventListener("change", renderSolutions);
  $("#hintMode").addEventListener("change", renderProblem);
  $("#studentSel").addEventListener("change", (event) => {
    const value = event.target.value;
    if (value === "__add__") {
      event.target.value = students.includes(currentStudentName) ? currentStudentName : "";
      showAddStudentInput();
      return;
    }
    setCurrentStudent(value);
    refreshStudentView();
  });
  $("#newStudent").addEventListener("keydown", (event) => {
    if (event.key === "Enter") addStudent();
    if (event.key === "Escape") {
      event.currentTarget.value = "";
      event.currentTarget.classList.add("hidden-input");
    }
  });
  $("#renameStudentBtn").addEventListener("click", renameStudent);
  $("#deleteStudentBtn").addEventListener("click", deleteStudent);
  $("#modalCloseBtn").addEventListener("click", closeSolutionModal);
  $("#solutionModal").addEventListener("click", (event) => {
    if (event.target.id === "solutionModal") closeSolutionModal();
  });
  document.addEventListener("keydown", (event) => {
    const modal = $("#solutionModal");
    if (modal.classList.contains("hidden")) return;
    if (event.key === "Escape") {
      closeSolutionModal();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', modal)
      .filter((element) => !element.disabled && element.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  document.addEventListener("keydown", handlePhysicalKey);
}

function render() {
  renderExamShell();
  renderStudentMenu();
  renderGroups();
  renderProgress();
  renderContinuePanel();
  renderProblem();
  renderKeypad();
  renderActiveLabel();
  renderScore(true);
  renderSolutions();
}

document.addEventListener("DOMContentLoaded", () => {
  migrateLegacyProgress();
  if (currentStudentName && !students.includes(currentStudentName)) {
    students.push(currentStudentName);
    students.sort((a, b) => a.localeCompare(b, "ja"));
    saveStudents();
  }
  progress = loadProgressFor(currentStudentName);
  answerDrafts = loadDraftsFor(currentStudentName);
  bindStaticEvents();
  ensureAnswersForGroup();
  render();
});
