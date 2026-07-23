window.MATH_DATASETS = window.MATH_DATASETS || {};
window.MATH_DATASETS.rikaido_2507_beta = {
  "source_file_summary": {
    "detected_pages": 8,
    "notes": "トライ 高3 理解度確認テスト（2025年度7月）数学βコース I〜VII。冊子内の【II】【III】は科目選択（数学I・II・A／数学I・II・A・B・Cの別）で、(3)(4)(5)は共通問題のため別大問として重複収録している。原典は結果のみを記す記述式・空所補充だが、式・不等式・場合分けそのものが答えになる9問（I(2)、II/III(3)(4)(5)、IV(2)(3)、VI(3)、VII(3)(4)）は本人希望によりマーク式（4択・選択肢番号を1マスに入力）へ作り替え。誤答選択肢は模範解答の典型的な計算ミスを想定してAIが作成したものなので要確認。マス目は1マス1文字（符号込み）で、2桁以上の値は\\boxed{}を桁数分並べている。"
  },
  "problem_groups": [
    {
      "group_number": "1",
      "page_numbers": [1],
      "title": "【I】小問集合（対称式・絶対値不等式・データの平均・確率・角の二等分線）",
      "subject": "数学",
      "unit": "理解度確認テスト(2025年7月) βコース 共通問題",
      "topic_tag": "数と式・データの分析・確率・図形と計量",
      "difficulty": 2,
      "source_name": "理解度確認テスト",
      "source_year": "2025年7月",
      "stem_md": "《共通問題》次の問いに答えよ。(40点)",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$x=\\dfrac{1}{\\sqrt{3}+\\sqrt{2}}$，$y=\\dfrac{1}{\\sqrt{3}-\\sqrt{2}}$ とする。このとき，$x+y=\\boxed{1}\\sqrt{3}$，$xy=\\boxed{2}$，$x^{2}+y^{2}=\\boxed{3}\\boxed{4}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["1"]},
            {"format": "integer", "value": "1", "boxes": ["2"]},
            {"format": "integer", "value": "1", "boxes": ["3"]},
            {"format": "integer", "value": "0", "boxes": ["4"]}
          ],
          "solution_md": "分母を有理化すると $x=\\sqrt3-\\sqrt2$，$y=\\sqrt3+\\sqrt2$。$x+y=2\\sqrt3$，$xy=3-2=1$。$x^2+y^2=(x+y)^2-2xy=12-2=10$。",
          "learning_points": [
            "分母の有理化ではなく、対称式 $x+y$, $xy$ を先に求めると計算が速い。",
            "$x^2+y^2$ は基本対称式 $(x+y)^2-2xy$ で表せる。"
          ]
        },
        {
          "label": "(2)",
          "stem_md": "不等式 $|3x-2|<1$ を解け。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $x<\\dfrac{1}{3}$\n\n② $\\dfrac{1}{3}<x<1$\n\n③ $\\dfrac{1}{3}\\leqq x\\leqq1$\n\n④ $x<\\dfrac{1}{3}$ または $1<x$",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["番号"]}
          ],
          "solution_md": "$|3x-2|<1$ より $-1<3x-2<1$、両辺に2を足して $1<3x<3$、3で割って $\\dfrac13<x<1$。②が正しい。",
          "learning_points": [
            "$|X|<a$（$a>0$）の解は $-a<X<a$ の1本の範囲になる（$|X|>a$ の2本に分かれる形と混同しない）。",
            "不等式の各辺を正の数で割るときは不等号の向きは変わらない。"
          ]
        },
        {
          "label": "(3)",
          "stem_md": "中学生5人，高校生10人に対して行ったテストの得点からなるデータについて，中学生のデータの総和は20，高校生のデータの総和は70である。このとき，中学生のデータの平均値は$\\boxed{5}$，高校生のデータの平均値は$\\boxed{6}$である。また，データ全体の平均値は$\\boxed{7}$である。",
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["5"]},
            {"format": "integer", "value": "7", "boxes": ["6"]},
            {"format": "integer", "value": "6", "boxes": ["7"]}
          ],
          "solution_md": "中学生の平均は $20\\div5=4$、高校生の平均は $70\\div10=7$。全体の平均は総和の和を人数の和で割り $(20+70)\\div(5+10)=90\\div15=6$。",
          "learning_points": [
            "全体平均は各グループの平均の単純平均ではなく、総和どうし・人数どうしを先に足してから割る。"
          ]
        },
        {
          "label": "(4)",
          "stem_md": "当たりくじ2本を含む9本のくじの中から，A，Bの2人がこの順に1本ずつくじを引く。引いたくじをもとに戻さないとすると，Aが当たる確率は$\\dfrac{\\boxed{8}}{\\boxed{9}}$，Bが当たる確率は$\\dfrac{\\boxed{10}}{\\boxed{11}}$である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["8"]},
            {"format": "integer", "value": "9", "boxes": ["9"]},
            {"format": "integer", "value": "2", "boxes": ["10"]},
            {"format": "integer", "value": "9", "boxes": ["11"]}
          ],
          "solution_md": "$P(A\\text{当})=\\dfrac29$。$P(B\\text{当})=P(A\\text{当}\\cap B\\text{当})+P(A\\text{外}\\cap B\\text{当})=\\dfrac29\\cdot\\dfrac18+\\dfrac79\\cdot\\dfrac28=\\dfrac{1}{36}+\\dfrac{7}{36}=\\dfrac{8}{36}=\\dfrac29$。",
          "learning_points": [
            "くじ引きでは、引く順番によらず各人が当たる確率は等しい（対称性）。",
            "条件付き確率の考え方を使うと、Bが当たる確率は「Aが当たってBも当たる」「Aが外れてBが当たる」の和になる。"
          ]
        },
        {
          "label": "(5)",
          "stem_md": "$AB=6$，$BC=7$，$CA=3$ である$\\triangle ABC$の内心を$I$とし，直線$AI$と辺$BC$の交点を$D$とする。このとき，$AI:ID=\\boxed{12}:\\boxed{13}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "9", "boxes": ["12"]},
            {"format": "integer", "value": "7", "boxes": ["13"]}
          ],
          "solution_md": "角の二等分線の定理より $BD:DC=AB:AC=6:3=2:1$ なので $CD=\\dfrac73$。再び角の二等分線の定理（$\\triangle ACD$と直線$BI$）より $AI:ID=AC:DC=3:\\dfrac73=9:7$。",
          "learning_points": [
            "三角形の内角の二等分線の交点は内心になる。",
            "角の二等分線の定理を2回使う：まず頂角の二等分線で対辺を分け、次に内心を通る線分の比を求める。"
          ]
        }
      ]
    },
    {
      "group_number": "2",
      "page_numbers": [2],
      "title": "【II】小問集合（因数定理・複素数・円・指数不等式・接線）",
      "subject": "数学",
      "unit": "理解度確認テスト(2025年7月) βコース 選択問題(数学I・II・A)",
      "topic_tag": "数と式・複素数・図形と方程式・指数関数・微分",
      "difficulty": 3,
      "source_name": "理解度確認テスト",
      "source_year": "2025年7月",
      "stem_md": "《選択問題》数学I・II・A選択者のみ解答すること（数学I・II・A・B・C選択者は解答しないこと）。(40点)",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "多項式 $x^{3}+ax^{2}-x-2$ が $x-2$ で割り切れるような定数$a$の値は $a=-\\boxed{1}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["1"]}
          ],
          "solution_md": "$P(x)=x^3+ax^2-x-2$ とおく。因数定理より $P(2)=8+4a-2-2=4a+4=0$ なので $a=-1$。",
          "learning_points": [
            "多項式 $P(x)$ が $x-\\alpha$ で割り切れる $\\iff$ $P(\\alpha)=0$（因数定理）。"
          ]
        },
        {
          "label": "(2)",
          "stem_md": "$i$は虚数単位とする。$\\dfrac{1+3i}{2+i}=a+bi$ を満たす実数$a$，$b$は，$a=\\boxed{2}$，$b=\\boxed{3}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["2"]},
            {"format": "integer", "value": "1", "boxes": ["3"]}
          ],
          "solution_md": "分母の共役 $2-i$ を分子分母に掛けると $\\dfrac{(1+3i)(2-i)}{(2+i)(2-i)}=\\dfrac{5+5i}{5}=1+i$。よって $a=1$，$b=1$。",
          "learning_points": [
            "複素数の分数は、分母の共役複素数を分子分母に掛けて実数化する。"
          ]
        },
        {
          "label": "(3)",
          "stem_md": "点$(2,1)$を中心とし，原点を通る円の方程式を求めよ。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $(x-2)^{2}+(y-1)^{2}=5$\n\n② $(x-2)^{2}+(y-1)^{2}=25$\n\n③ $(x+2)^{2}+(y+1)^{2}=5$\n\n④ $(x-1)^{2}+(y-2)^{2}=5$",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["番号"]}
          ],
          "solution_md": "中心$(2,1)$、半径$r$の円は $(x-2)^2+(y-1)^2=r^2$。原点を通るので $r^2=(0-2)^2+(0-1)^2=5$。①が正しい。",
          "learning_points": [
            "円の方程式は「中心と半径」で決まる。半径そのものではなく半径の2乗を右辺に置く。"
          ]
        },
        {
          "label": "(4)",
          "stem_md": "不等式 $\\left(\\dfrac{1}{9}\\right)^{x}>\\left(\\dfrac{1}{3}\\right)^{-x+1}$ を解け。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $x<\\dfrac{1}{3}$\n\n② $x>\\dfrac{1}{3}$\n\n③ $x<1$\n\n④ $x<-\\dfrac{1}{3}$",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["番号"]}
          ],
          "solution_md": "左辺を $\\left(\\frac13\\right)^{2x}$ に変形すると $\\left(\\frac13\\right)^{2x}>\\left(\\frac13\\right)^{-x+1}$。底 $\\frac13$ は1より小さいので不等号の向きが反転し $2x<-x+1$、$3x<1$、$x<\\dfrac13$。①が正しい。",
          "learning_points": [
            "指数関数 $y=a^x$ は、底 $0<a<1$ のとき減少関数なので、指数を比べるときに不等号の向きが反転する。"
          ]
        },
        {
          "label": "(5)",
          "stem_md": "曲線 $y=x^{2}-3x+1$ 上の点$(2,-1)$における接線の方程式を求めよ。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $y=x-3$\n\n② $y=-x+3$\n\n③ $y=x+3$\n\n④ $y=2x-3$",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["番号"]}
          ],
          "solution_md": "$y'=2x-3$ より、$x=2$ での傾きは $2\\cdot2-3=1$。接線は $y-(-1)=1\\cdot(x-2)$ より $y=x-3$。①が正しい。",
          "learning_points": [
            "接線の傾きは、接点の$x$座標を導関数に代入して求める。"
          ]
        }
      ]
    },
    {
      "group_number": "3",
      "page_numbers": [2, 3],
      "title": "【III】小問集合（三角関数・ベクトル・円・指数不等式・接線）",
      "subject": "数学",
      "unit": "理解度確認テスト(2025年7月) βコース 選択問題(数学I・II・A・B・C)",
      "topic_tag": "三角関数・ベクトル・図形と方程式・指数関数・微分",
      "difficulty": 3,
      "source_name": "理解度確認テスト",
      "source_year": "2025年7月",
      "stem_md": "《選択問題》数学I・II・A・B・C選択者のみ解答すること（数学I・II・A選択者は解答しないこと）。(3)〜(5)は【II】と同一問題。(40点)",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$\\pi<\\theta<\\dfrac{3}{2}\\pi$ で，$\\cos\\theta=-\\dfrac{4}{5}$ のとき，$\\sin\\theta=-\\dfrac{\\boxed{1}}{\\boxed{2}}$，$\\sin2\\theta=\\dfrac{\\boxed{3}\\boxed{4}}{\\boxed{5}\\boxed{6}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["1"]},
            {"format": "integer", "value": "5", "boxes": ["2"]},
            {"format": "integer", "value": "2", "boxes": ["3"]},
            {"format": "integer", "value": "4", "boxes": ["4"]},
            {"format": "integer", "value": "2", "boxes": ["5"]},
            {"format": "integer", "value": "5", "boxes": ["6"]}
          ],
          "solution_md": "$\\pi<\\theta<\\frac32\\pi$（第3象限）より $\\sin\\theta<0$。$\\sin^2\\theta=1-\\cos^2\\theta=1-\\frac{16}{25}=\\frac{9}{25}$ より $\\sin\\theta=-\\frac35$。2倍角の公式より $\\sin2\\theta=2\\sin\\theta\\cos\\theta=2\\cdot\\left(-\\frac35\\right)\\cdot\\left(-\\frac45\\right)=\\frac{24}{25}$。",
          "learning_points": [
            "$\\theta$ の象限を先に確認し、$\\sin\\theta$ の符号を決めてから $\\sin^2\\theta+\\cos^2\\theta=1$ を使う。",
            "2倍角の公式 $\\sin2\\theta=2\\sin\\theta\\cos\\theta$ はそのまま代入すればよい。"
          ]
        },
        {
          "label": "(2)",
          "stem_md": "$|\\vec{a}|=2$，$|\\vec{b}|=3$ で，$\\vec{a}$と$\\vec{b}$のなす角が$60^{\\circ}$のとき，$\\vec{a}\\cdot\\vec{b}=\\boxed{7}$ であり，$|2\\vec{a}-\\vec{b}|=\\sqrt{\\boxed{8}\\boxed{9}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["7"]},
            {"format": "integer", "value": "1", "boxes": ["8"]},
            {"format": "integer", "value": "3", "boxes": ["9"]}
          ],
          "solution_md": "$\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos60^\\circ=2\\cdot3\\cdot\\frac12=3$。$|2\\vec a-\\vec b|^2=4|\\vec a|^2-4\\vec a\\cdot\\vec b+|\\vec b|^2=16-12+9=13$ より $|2\\vec a-\\vec b|=\\sqrt{13}$。",
          "learning_points": [
            "ベクトルの大きさは2乗して内積の性質で展開してから、最後に平方根を取る。"
          ]
        },
        {
          "label": "(3)",
          "stem_md": "点$(2,1)$を中心とし，原点を通る円の方程式を求めよ。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $(x-2)^{2}+(y-1)^{2}=5$\n\n② $(x-2)^{2}+(y-1)^{2}=25$\n\n③ $(x+2)^{2}+(y+1)^{2}=5$\n\n④ $(x-1)^{2}+(y-2)^{2}=5$",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["番号"]}
          ],
          "solution_md": "中心$(2,1)$、半径$r$の円は $(x-2)^2+(y-1)^2=r^2$。原点を通るので $r^2=(0-2)^2+(0-1)^2=5$。①が正しい。",
          "learning_points": [
            "円の方程式は「中心と半径」で決まる。半径そのものではなく半径の2乗を右辺に置く。"
          ]
        },
        {
          "label": "(4)",
          "stem_md": "不等式 $\\left(\\dfrac{1}{9}\\right)^{x}>\\left(\\dfrac{1}{3}\\right)^{-x+1}$ を解け。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $x<\\dfrac{1}{3}$\n\n② $x>\\dfrac{1}{3}$\n\n③ $x<1$\n\n④ $x<-\\dfrac{1}{3}$",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["番号"]}
          ],
          "solution_md": "左辺を $\\left(\\frac13\\right)^{2x}$ に変形すると $\\left(\\frac13\\right)^{2x}>\\left(\\frac13\\right)^{-x+1}$。底 $\\frac13$ は1より小さいので不等号の向きが反転し $2x<-x+1$、$3x<1$、$x<\\dfrac13$。①が正しい。",
          "learning_points": [
            "指数関数 $y=a^x$ は、底 $0<a<1$ のとき減少関数なので、指数を比べるときに不等号の向きが反転する。"
          ]
        },
        {
          "label": "(5)",
          "stem_md": "曲線 $y=x^{2}-3x+1$ 上の点$(2,-1)$における接線の方程式を求めよ。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $y=x-3$\n\n② $y=-x+3$\n\n③ $y=x+3$\n\n④ $y=2x-3$",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["番号"]}
          ],
          "solution_md": "$y'=2x-3$ より、$x=2$ での傾きは $2\\cdot2-3=1$。接線は $y-(-1)=1\\cdot(x-2)$ より $y=x-3$。①が正しい。",
          "learning_points": [
            "接線の傾きは、接点の$x$座標を導関数に代入して求める。"
          ]
        }
      ]
    },
    {
      "group_number": "4",
      "page_numbers": [3, 4],
      "title": "【IV】置き換えによる4次関数の分析",
      "subject": "数学",
      "unit": "理解度確認テスト(2025年7月) βコース 共通問題",
      "topic_tag": "数と式・2次関数・置き換え",
      "difficulty": 3,
      "source_name": "理解度確認テスト",
      "source_year": "2025年7月",
      "stem_md": "《共通問題》関数 $f(x)=(x^{2}+2x+1)(x^{2}+2x-3)$ とする。このとき，以下の問に答えよ。(40点)",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$t=x^{2}+2x$ とするとき，$t$のとり得る値の範囲は $t\\geqq-\\boxed{1}$ である。また，$f(x)$を$t$を用いて表すと $f(x)=t^{2}-\\boxed{2}t-\\boxed{3}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["1"]},
            {"format": "integer", "value": "2", "boxes": ["2"]},
            {"format": "integer", "value": "3", "boxes": ["3"]}
          ],
          "solution_md": "$t=x^2+2x=(x+1)^2-1\\geqq-1$。$f(x)=(t+1)(t-3)=t^2-2t-3$。",
          "learning_points": [
            "平方完成すると、置き換えた変数のとり得る値の範囲がわかる。",
            "$f(x)$ を $t$ の式に置き換えると、4次式が2次式として扱える。"
          ]
        },
        {
          "label": "(2)",
          "stem_md": "方程式 $f(x)=-4$ を解け。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $x=-1\\pm\\sqrt{2}$\n\n② $x=1\\pm\\sqrt{2}$\n\n③ $x=-1\\pm\\sqrt{3}$\n\n④ $x=-2\\pm2\\sqrt{2}$",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["番号"]}
          ],
          "solution_md": "$t^2-2t-3=-4$ より $t^2-2t+1=0$、$(t-1)^2=0$ で $t=1$（$t\\geqq-1$ を満たす）。$x^2+2x=1$ より $x^2+2x-1=0$、$x=-1\\pm\\sqrt2$。①が正しい。",
          "learning_points": [
            "$t$ について解いたら、$t\\geqq-1$ の条件を満たすか必ず確認する。",
            "$t$ の値から $x$ に戻すときは、もとの置き換え式 $t=x^2+2x$ に代入して2次方程式を解く。"
          ]
        },
        {
          "label": "(3)",
          "stem_md": "$a$を実数の定数とする。方程式 $f(x)=a$ の実数解の個数を，次の①〜④から選び，番号をマスに入れよ。\n\n① $a<-4$ のとき0個，$a=-4$ のとき2個，$-4<a<0$ のとき4個，$a=0$ のとき3個，$0<a$ のとき2個\n\n② $a<-4$ のとき0個，$a=-4$ のとき1個，$-4<a<0$ のとき4個，$a=0$ のとき3個，$0<a$ のとき2個\n\n③ $a<-4$ のとき0個，$a=-4$ のとき2個，$-4<a<0$ のとき4個，$a=0$ のとき4個，$0<a$ のとき2個\n\n④ $a\\leqq-4$ のとき0個，$-4<a\\leqq0$ のとき4個，$0<a$ のとき2個",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["番号"]}
          ],
          "solution_md": "$g(t)=t^2-2t-3=(t-1)^2-4$（$t\\geqq-1$）は $t=-1$ でも $g=0$ になる点に注意。$g(t)=a$ を満たす $t$ の個数は、$a<-4$:0個、$a=-4$:1個（$t=1$）、$-4<a<0$:2個、$a=0$:2個（$t=-1,3$）、$0<a$:1個。1つの $t$ に対応する $x$ の個数は、$t<-1$:0個、$t=-1$:1個、$-1<t$:2個。これらを掛け合わせると、$a<-4$:0個、$a=-4$:$1\\times2=2$個、$-4<a<0$:$2\\times2=4$個、$a=0$:（$t=-1$の1個）＋（$t=3$の2個）＝3個、$0<a$:$1\\times2=2$個。①が正しい。",
          "learning_points": [
            "解の個数は「$t$ の個数」と「1つの $t$ に対応する $x$ の個数」を段階的に掛け合わせて数える。",
            "$t\\geqq-1$ の端点 $t=-1$ で $x$ の個数が1個から2個に切り替わることに注意する。"
          ]
        }
      ]
    },
    {
      "group_number": "5",
      "page_numbers": [4],
      "title": "【V】部屋割りの場合の数",
      "subject": "数学",
      "unit": "理解度確認テスト(2025年7月) βコース 共通問題",
      "topic_tag": "場合の数",
      "difficulty": 3,
      "source_name": "理解度確認テスト",
      "source_year": "2025年7月",
      "stem_md": "《共通問題》一郎，二郎，三郎を含む6人が，A，B，Cの3部屋に分かれて入る。ただし，A，B，Cの部屋にはそれぞれ3人，2人，1人が入るものとする。このとき，以下の問に答えよ。(40点)",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "一郎，二郎，三郎の3人がAの部屋に入る場合の数は $\\boxed{1}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["1"]}
          ],
          "solution_md": "一郎・二郎・三郎がAに入ると、残り3人がB(2人)・C(1人)に分かれる。Cに入る1人の選び方は ${}_3C_1=3$ 通り。",
          "learning_points": [
            "3人部屋に誰が入るか決まったら、残りの人数配分を先に確認してから場合の数を数える。"
          ]
        },
        {
          "label": "(2)",
          "stem_md": "一郎，二郎，三郎がそれぞれA，B，Cの部屋に入る場合の数は $\\boxed{2}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["2"]}
          ],
          "solution_md": "一郎がA、二郎がB、三郎がCに入ると決まると、残り3人のうちAに2人・Bに1人が入る。Aに入る2人の選び方は ${}_3C_2=3$ 通り。",
          "learning_points": [
            "3人のうち誰がどの部屋かが先に決まっている場合でも、残りの人の割り振り方を別途数える。"
          ]
        },
        {
          "label": "(3)",
          "stem_md": "一郎，二郎，三郎のうち，2人だけが同じ部屋に入る場合の数は $\\boxed{3}\\boxed{4}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["3"]},
            {"format": "integer", "value": "9", "boxes": ["4"]}
          ],
          "solution_md": "6人の部屋の入り方の総数は ${}_6C_1\\cdot{}_5C_2=6\\times10=60$ 通り。余事象は「3人とも同じ部屋」（(1)より3通り）と「3人ともばらばらの部屋」（(2)より $3!\\times3=18$ 通り）。求める場合の数は $60-(3+18)=39$ 通り。",
          "learning_points": [
            "「2人だけが同じ部屋」は直接数えにくいので、余事象（全員同じ／全員ばらばら）を引いて求める。"
          ]
        },
        {
          "label": "(4)",
          "stem_md": "人数が2人増えて8人になったので，A，B，Cの部屋にはそれぞれ4人，3人，1人が入ることにした。このとき，一郎，二郎，三郎のうち，2人だけが同じ部屋に入る場合の数は $\\boxed{5}\\boxed{6}\\boxed{7}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["5"]},
            {"format": "integer", "value": "9", "boxes": ["6"]},
            {"format": "integer", "value": "5", "boxes": ["7"]}
          ],
          "solution_md": "8人の部屋の入り方の総数は ${}_8C_1\\cdot{}_7C_3=8\\times35=280$ 通り。「3人とも同じ部屋」は ${}_5C_1\\cdot{}_4C_1+{}_5C_1=20+5=25$ 通り、「3人ともばらばらの部屋」は $6\\times{}_5C_2=60$ 通り。求める場合の数は $280-(25+60)=195$ 通り。",
          "learning_points": [
            "部屋の定員が変わっても、余事象を使う考え方は(3)と同じまま使える。"
          ]
        }
      ]
    },
    {
      "group_number": "6",
      "page_numbers": [5],
      "title": "【VI】単位円上の三角形の面積",
      "subject": "数学",
      "unit": "理解度確認テスト(2025年7月) βコース 選択問題(数学I・II・A・B・C)",
      "topic_tag": "三角関数・図形と計量",
      "difficulty": 4,
      "source_name": "理解度確認テスト",
      "source_year": "2025年7月",
      "stem_md": "《選択問題》数学I・II・A・B・C選択者のみ解答すること。$0<\\theta\\leqq\\pi$ のとき，3点 $A(1,0)$，$B(\\cos\\theta,\\sin\\theta)$，$C\\left(\\cos\\left(\\theta+\\dfrac{\\pi}{2}\\right),\\sin\\left(\\theta+\\dfrac{\\pi}{2}\\right)\\right)$ を頂点とする$\\triangle ABC$の面積を$S$とする。このとき，以下の問に答えよ。(40点)",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$\\theta=\\dfrac{\\pi}{2}$ のとき，$S=\\boxed{1}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["1"]}
          ],
          "solution_md": "$\\theta=\\frac\\pi2$ のとき $A(1,0)$，$B(0,1)$，$C(-1,0)$ で、$\\triangle ABC$ は底辺 $AC=2$、高さ1の三角形。$S=\\frac12\\cdot2\\cdot1=1$。",
          "learning_points": [
            "具体的な角度のときは、まず各点の座標を求めてから面積を計算するとよい。"
          ]
        },
        {
          "label": "(2)",
          "stem_md": "$\\theta=\\dfrac{\\pi}{4}$ のとき，$S=\\dfrac{\\boxed{2}}{\\boxed{3}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["2"]},
            {"format": "integer", "value": "2", "boxes": ["3"]}
          ],
          "solution_md": "$\\theta=\\frac\\pi4$ のとき $B\\left(\\frac{1}{\\sqrt2},\\frac{1}{\\sqrt2}\\right)$，$C\\left(-\\frac{1}{\\sqrt2},\\frac{1}{\\sqrt2}\\right)$。$S=\\frac12\\cdot\\left(2\\cdot\\frac{1}{\\sqrt2}\\right)\\cdot\\frac{1}{\\sqrt2}=\\frac12$。",
          "learning_points": [
            "$B$と$C$は$y$座標が等しいので、線分$BC$を底辺、$A$からの距離を高さとみなすと計算しやすい。"
          ]
        },
        {
          "label": "(3)",
          "stem_md": "$S$を$\\theta$を用いて表せ。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $S=\\dfrac{1}{2}(\\sin\\theta-\\cos\\theta+1)$\n\n② $S=\\dfrac{1}{2}(\\sin\\theta+\\cos\\theta+1)$\n\n③ $S=\\dfrac{1}{2}(\\sin\\theta-\\cos\\theta-1)$\n\n④ $S=\\dfrac{1}{2}(\\cos\\theta-\\sin\\theta+1)$",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["番号"]}
          ],
          "solution_md": "$0<\\theta\\leqq\\frac\\pi2$ と $\\frac\\pi2<\\theta\\leqq\\pi$ で場合分けして $\\triangle OAB+\\triangle OCA$（または $-\\triangle OCA$）を計算すると、どちらの場合も同じ式 $S=\\frac12(\\sin\\theta-\\cos\\theta+1)$ に一致する。①が正しい。",
          "learning_points": [
            "$C$ が $y$ 軸のどちら側にあるかで面積の足し引きが変わるように見えるが、場合分けしても最終的に同じ1つの式にまとまることがある。"
          ]
        },
        {
          "label": "(4)",
          "stem_md": "$\\theta$が$0<\\theta\\leqq\\pi$の範囲を動くときの$S$の最大値は $\\dfrac{\\boxed{4}}{\\boxed{5}}\\left(\\sqrt{\\boxed{6}}+\\boxed{7}\\right)$ であり，$S$が最大となる$\\theta$の値は $\\theta=\\dfrac{\\boxed{8}}{\\boxed{9}}\\pi$ である。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["4"]},
            {"format": "integer", "value": "2", "boxes": ["5"]},
            {"format": "integer", "value": "2", "boxes": ["6"]},
            {"format": "integer", "value": "1", "boxes": ["7"]},
            {"format": "integer", "value": "3", "boxes": ["8"]},
            {"format": "integer", "value": "4", "boxes": ["9"]}
          ],
          "solution_md": "$S=\\frac12\\left\\{\\sqrt2\\sin\\left(\\theta-\\frac\\pi4\\right)+1\\right\\}$。$0<\\theta\\leqq\\pi$ より $-\\frac\\pi4<\\theta-\\frac\\pi4\\leqq\\frac{3}{4}\\pi$ なので、$\\theta-\\frac\\pi4=\\frac\\pi2$ すなわち $\\theta=\\frac{3}{4}\\pi$ のとき最大値 $\\frac12(\\sqrt2+1)$ をとる。",
          "learning_points": [
            "$\\sin\\theta-\\cos\\theta$ の形は三角関数の合成 $\\sqrt2\\sin\\left(\\theta-\\frac\\pi4\\right)$ にすると最大・最小が扱いやすくなる。",
            "合成後は、$\\theta$ の範囲を「合成した角」の範囲に置き換えてから最大値を探す。"
          ]
        }
      ]
    },
    {
      "group_number": "7",
      "page_numbers": [5, 6],
      "title": "【VII】等差数列と部分分数分解",
      "subject": "数学",
      "unit": "理解度確認テスト(2025年7月) βコース 選択問題(数学I・II・A・B・C)",
      "topic_tag": "数列",
      "difficulty": 4,
      "source_name": "理解度確認テスト",
      "source_year": "2025年7月",
      "stem_md": "《選択問題》数学I・II・A・B・C選択者のみ解答すること。初項が0ではない等差数列$\\{a_n\\}$が次の関係式を満たしている。$$S_{2n-1}=a_na_{n+1}\\quad(n=1,2,3,\\cdots)$$ ただし，$S_n=a_1+a_2+\\cdots+a_n$ である。このとき，以下の問に答えよ。(40点)",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$a_2$ を求めよ。$a_2=\\boxed{1}$",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["1"]}
          ],
          "solution_md": "与式で $n=1$ とすると $S_1=a_1a_2$。$S_1=a_1$ なので $a_1=a_1a_2$、$a_1(a_2-1)=0$。$a_1\\neq0$ より $a_2=1$。",
          "learning_points": [
            "数列の和の関係式は、まず $n=1$ を代入して手がかりを作る。"
          ]
        },
        {
          "label": "(2)",
          "stem_md": "$a_1$ を求めよ。$a_1=-\\boxed{2}$",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["2"]}
          ],
          "solution_md": "与式で $n=2$ とすると $S_3=a_2a_3$。$a_2=1$ より $a_1+a_2+a_3=a_3$、すなわち $a_1+1=0$ で $a_1=-1$。",
          "learning_points": [
            "次に $n=2$ を代入すると、(1)で求めた $a_2$ を使って $a_1$ が求まる。"
          ]
        },
        {
          "label": "(3)",
          "stem_md": "$a_n$を$n$を用いて表せ。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $a_n=2n-3$\n\n② $a_n=2n-1$\n\n③ $a_n=n-2$\n\n④ $a_n=3n-4$",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["番号"]}
          ],
          "solution_md": "公差は $a_2-a_1=1-(-1)=2$。よって $a_n=-1+2(n-1)=2n-3$。①が正しい。",
          "learning_points": [
            "$\\{a_n\\}$ が等差数列と分かっているので、$a_1,a_2$ の2項から公差を求めれば一般項が決まる。"
          ]
        },
        {
          "label": "(4)",
          "stem_md": "$\\displaystyle\\sum_{k=1}^{n}\\dfrac{1}{S_{2k-1}}$ を$n$を用いて表せ。次の①〜④から正しいものを1つ選び，番号をマスに入れよ。\n\n① $-\\dfrac{n}{2n-1}$\n\n② $\\dfrac{n}{2n-1}$\n\n③ $-\\dfrac{n}{2n+1}$\n\n④ $-\\dfrac{2n-1}{n}$",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["番号"]}
          ],
          "solution_md": "$a_n=2n-3$ より $S_{2k-1}=a_ka_{k+1}=(2k-3)(2k-1)$。部分分数分解 $\\dfrac{1}{(2k-3)(2k-1)}=\\dfrac12\\left(\\dfrac{1}{2k-3}-\\dfrac{1}{2k-1}\\right)$ を使って和を取ると、途中が打ち消し合い $\\dfrac12\\left(-1-\\dfrac{1}{2n-1}\\right)=-\\dfrac{n}{2n-1}$。①が正しい。",
          "learning_points": [
            "分数の数列の和は、部分分数分解して途中の項が打ち消し合う形（望遠鏡和）を作れないか考える。"
          ]
        }
      ]
    }
  ]
};

window.MATH_SCHOOLS = (window.MATH_SCHOOLS || []).concat([{
  id: "rikaido",
  name: "理解度確認テスト",
  eyebrow: "RIKAIDO CHECK TEST / MATH",
  exams: [
    {
      key: "rikaido_2507_beta",
      label: "2025年7月 βコース",
      shortLabel: "2507 βコース",
      sourceTitle: "2025年7月 理解度確認テスト",
      sourceText: "高3 数学βコース",
    },
  ],
}]);
