/*
 * 方針データの正本。
 * 問題データに learning_points / hint_strategy があればそれを優先し、
 * 未登録の小問にも必ず3段階の方針を生成する。
 */
(function registerHintStrategies() {
  const datasets = {
    ...(window.TEIKYO_DATASETS || {}),
    ...(window.MATH_DATASETS || {}),
  };
  const templates = [
    {
      test: /確率|場合の数|カード|数直線/,
      summary: "場合の数を数える基準を決め、条件に合うケースだけを整理して確率へつなげる。",
      roadmap: [
        "何を1回・1通りとして数えるかを決める。",
        "条件を満たす場合を、重複や数え漏れがない形に整理する。",
        "全体の場合の数と比較し、確率や個数として答えを確認する。",
      ],
    },
    {
      test: /三角|円|図形|座標|ベクトル/,
      summary: "図形の条件を長さ・角度・平行などの関係に翻訳し、使える定理を順番に適用する。",
      roadmap: [
        "図形の条件を、長さ・角度・平行などの関係に置き換える。",
        "使える定理を選び、既知の量から次の量を求める。",
        "図形全体の条件に戻して、求めた量が整合するか確認する。",
      ],
    },
    {
      test: /微分|積分|放物線|最大|最小|接線/,
      summary: "式を扱いやすい形に変え、定義域や端点を確認してから微分・積分の結果を解釈する。",
      roadmap: [
        "式を置き換えやすい形に整理し、変数の範囲を確認する。",
        "微分・積分など、求める量に対応する計算を行う。",
        "定義域・端点・元の図形や関数に戻して答えを確認する。",
      ],
    },
    {
      test: /数と式|整式|約数|対数|指数|データ|数列/,
      summary: "与えられた式や条件を標準形に整理し、公式を適用できるまとまりを作ってから計算する。",
      roadmap: [
        "式や条件を、公式を使える標準形に整理する。",
        "何を一つのまとまりとして扱うか決め、公式や性質を適用する。",
        "元の条件と空欄の形式に戻して、答えを確認する。",
      ],
    },
  ];
  const fallback = {
    summary: "問題の条件を計算できる関係へ置き換え、得られた結果を元の条件に戻して確認する。",
    roadmap: [
      "問題文から、求める量と条件を分けて整理する。",
      "使う公式・定理を決め、式を順番に立てる。",
      "元の条件と空欄の形式に戻して、答えを確認する。",
    ],
  };

  const registry = window.MATH_HINT_STRATEGIES || {};
  Object.entries(datasets).forEach(([examKey, dataset]) => {
    const entries = registry[examKey] || {};
    (dataset.problem_groups || []).forEach((group) => {
      (group.sub_problems || []).forEach((sub) => {
        const key = `${group.group_number}-${sub.label}`;
        const explicit = sub.hint_strategy || {};
        const points = Array.isArray(sub.learning_points) ? sub.learning_points.filter(Boolean) : [];
        const topic = `${group.title || ""} ${group.topic_tag || ""}`;
        const template = templates.find((candidate) => candidate.test.test(topic)) || fallback;
        const roadmap = explicit.roadmap?.length >= 3
          ? explicit.roadmap
          : points.length >= 3
            ? points
            : template.roadmap;
        entries[key] = {
          summary: explicit.summary || template.summary,
          roadmap,
        };
      });
    });
    registry[examKey] = entries;
  });
  window.MATH_HINT_STRATEGIES = registry;
})();
