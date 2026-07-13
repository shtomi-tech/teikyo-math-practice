window.MATH_DATASETS = window.MATH_DATASETS || {};
window.MATH_DATASETS.nichidai_2026_zengaku1 = {
  "source_file_summary": {
    "detected_pages": 6,
    "notes": "日本大学 2026年度入試 N全学統一方式第1期 数学②（文理・国際関係・理工・生産工・工・医・歯・生物資源科・薬・短期大学部 対象）。旺文社パスナビ過去問ライブラリーのPDF（問題4p・解答2p）から読み取り・全54マス検算済み。大問VIは数III（分数関数の極値・回転体の体積）を含む。"
  },
  "problem_groups": [
    {
      "group_number": "1",
      "page_numbers": [1],
      "title": "小問集合（2次方程式・命題と範囲・複素数・分散・等差数列）",
      "subject": "数学",
      "unit": "日本大学2026 N全学統一(第1期)",
      "topic_tag": "数と式・命題・複素数・データの分析・数列",
      "difficulty": 2,
      "source_name": "日本大学 N全学統一方式第1期",
      "source_year": "2026",
      "stem_md": "次の各問いに答えよ。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$a$は正の実数とする。$x$についての2次方程式 $x^{2}-2ax+a^{2}-9=0$ の解の1つが $x=2$ であるとき,$a=\\boxed{1}$,もう1つの解は $x=\\boxed{2}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "5", "boxes": ["1"]},
            {"format": "integer", "value": "8", "boxes": ["2"]}
          ],
          "solution_md": "$x=2$ を代入すると $4-4a+a^{2}-9=0$ より $a^{2}-4a-5=0$、$(a-5)(a+1)=0$。$a>0$ なので $a=5$。解と係数の関係より2解の和は $2a=10$ なので、もう1つの解は $10-2=8$。",
          "learning_points": [
            "既知の解を代入して、未知の定数を決める方程式を作る。",
            "条件に合わない解を、定義域や符号条件で除外する。",
            "二次方程式の残りの解は、解と係数の関係で求められる。"
          ]
        },
        {
          "label": "(2)",
          "stem_md": "$k$を実数とする。命題「$1\\le x\\le6$ ならば $k^{2}-7k-7\\le x\\le k^{2}-k$」が真であるような,$k$のとり得る値の範囲は $\\boxed{3}\\le k\\le\\boxed{4}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["3"]},
            {"format": "integer", "value": "8", "boxes": ["4"]}
          ],
          "solution_md": "命題が真であるためには区間 $[1,6]$ が区間 $[k^{2}-7k-7,\\,k^{2}-k]$ に含まれればよい。$k^{2}-7k-7\\le1$ より $(k-8)(k+1)\\le0$ で $-1\\le k\\le8$。$k^{2}-k\\ge6$ より $(k-3)(k+2)\\ge0$ で $k\\le-2$ または $k\\ge3$。両方を満たすのは $3\\le k\\le8$。",
          "learning_points": [
            "区間の包含を、左端と右端の2つの不等式に翻訳する。",
            "必要条件を分けて解き、最後に共通範囲をとる。",
            "命題の条件は、数直線上の包含関係に置き換えると整理しやすい。"
          ]
        },
        {
          "label": "(3)",
          "stem_md": "$i$は虚数単位とする。$(1+2i)^{3}$ の実部と虚部の和は $\\boxed{5}\\boxed{6}\\boxed{7}$ である。",
          "answer_fields": [
            {"format": "signed_integer", "value": "-13", "boxes": ["5", "6", "7"]}
          ],
          "solution_md": "$(1+2i)^{3}=1+3(2i)+3(2i)^{2}+(2i)^{3}=1+6i-12-8i=-11-2i$。実部 $-11$、虚部 $-2$ の和は $-13$。",
          "learning_points": [
            "複素数のべきは二項展開し、$i^2=-1$ を使って実部と虚部に分ける。",
            "最後に求める量が実部・虚部のどの組合せかを確認する。"
          ]
        },
        {
          "label": "(4)",
          "stem_md": "7つの値からなるデータ $1,2,3,4,5,6,7$ の分散は $\\boxed{8}$ である。この7つの値それぞれに $0.25$ をかけたデータ $0.25,0.5,0.75,1,1.25,1.5,1.75$ の分散は $\\boxed{9}.\\boxed{10}\\boxed{11}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["8"]},
            {"format": "integer", "value": "0", "boxes": ["9"]},
            {"format": "integer", "value": "25", "boxes": ["10", "11"]}
          ],
          "solution_md": "平均は $4$。偏差の2乗和は $9+4+1+0+1+4+9=28$ なので分散は $28\\div7=4$。全データを $c$ 倍すると分散は $c^{2}$ 倍になるので、$0.25$ 倍したデータの分散は $4\\times0.25^{2}=4\\times0.0625=0.25$。",
          "learning_points": [
            "分散は平均からの偏差を二乗して平均したもの。",
            "データを $c$ 倍すると、分散は $c^2$ 倍になる。",
            "計算を始める前に、使える性質で処理量を減らす。"
          ]
        },
        {
          "label": "(5)",
          "stem_md": "等差数列$\\{a_n\\}$の初項から第$n$項までの和を$S_n$とする。$S_4-S_3=18$,$S_5-S_4=22$であるとき,数列$\\{a_n\\}$の一般項は $a_n=\\boxed{12}n+\\boxed{13}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["12"]},
            {"format": "integer", "value": "2", "boxes": ["13"]}
          ],
          "solution_md": "$S_4-S_3=a_4=18$、$S_5-S_4=a_5=22$。公差は $d=a_5-a_4=4$。$a_4=a_1+3d=18$ より $a_1=6$。よって $a_n=6+4(n-1)=4n+2$。",
          "learning_points": [
            "隣り合う部分和の差は、その間の1項に等しい。",
            "等差数列では、2項の差から公差を決められる。",
            "求めた初項と公差を一般項の形に戻す。"
          ]
        }
      ]
    },
    {
      "group_number": "2",
      "page_numbers": [2],
      "title": "三角関数（2倍角・3θ/2の加法定理）",
      "subject": "数学",
      "unit": "日本大学2026 N全学統一(第1期)",
      "topic_tag": "三角関数(2倍角・加法定理)",
      "difficulty": 3,
      "source_name": "日本大学 N全学統一方式第1期",
      "source_year": "2026",
      "stem_md": "$\\dfrac{\\pi}{2}<\\theta<\\pi$ であり,$\\tan\\theta=-\\dfrac{4}{3}$ とする。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$\\tan\\dfrac{\\theta}{2}=\\boxed{14}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["14"]}
          ],
          "solution_md": "$\\tan\\theta$ が与えられていて、求めるのが $\\tan\\dfrac{\\theta}{2}$ なので、2倍角の公式が使えそうである。$t=\\tan\\dfrac{\\theta}{2}$ と置き換える。$\\dfrac{\\pi}{2}<\\theta<\\pi$ より $\\dfrac{\\pi}{4}<\\dfrac{\\theta}{2}<\\dfrac{\\pi}{2}$ だから、$t>1$。2倍角公式より $\\tan\\theta=\\dfrac{2t}{1-t^2}$ なので、$\\dfrac{2t}{1-t^2}=-\\dfrac43$。これを整理すると $2t^2-3t-2=0$、すなわち $(2t+1)(t-2)=0$。$t>1$ より $t=2$、したがって $\\tan\\dfrac{\\theta}{2}=2$。",
          "learning_points": [
            "求めたい式そのものを文字で置くと、置き換えを最小限にできる。",
            "与えられた条件を、置き換えた文字の方程式へ翻訳する。",
            "方程式を解く前に、置き換えた文字の範囲を確認する。",
            "方程式の解を、元の問題の条件で選別する。"
          ]
        },
        {
          "label": "(2)",
          "stem_md": "$\\tan\\dfrac{3\\theta}{2}=\\dfrac{\\boxed{15}}{\\boxed{16}\\boxed{17}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["15"]},
            {"format": "integer", "value": "11", "boxes": ["16", "17"]}
          ],
          "solution_md": "$\\dfrac{3\\theta}{2}=\\theta+\\dfrac{\\theta}{2}$ に加法定理を用いる。$\\tan\\dfrac{3\\theta}{2}=\\dfrac{\\tan\\theta+\\tan\\frac{\\theta}{2}}{1-\\tan\\theta\\tan\\frac{\\theta}{2}}=\\dfrac{-\\frac43+2}{1-\\left(-\\frac43\\right)\\cdot2}=\\dfrac{2/3}{11/3}=\\dfrac{2}{11}$。",
          "learning_points": [
            "複雑な角は、既知の角の和に分解すると加法定理を使える。",
            "前の小問で求めた値は、次の小問の新しい道具として再利用できる。"
          ]
        }
      ]
    },
    {
      "group_number": "3",
      "page_numbers": [2],
      "title": "指数・対数（対称式）",
      "subject": "数学",
      "unit": "日本大学2026 N全学統一(第1期)",
      "topic_tag": "指数関数・対数関数(対称式)",
      "difficulty": 2,
      "source_name": "日本大学 N全学統一方式第1期",
      "source_year": "2026",
      "stem_md": "$2^{x}+2^{-x}=3$ とする。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$8^{x}+8^{-x}=\\boxed{18}\\boxed{19}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "18", "boxes": ["18", "19"]}
          ],
          "solution_md": "$t=2^{x}$ とおくと $t+\\dfrac1t=3$。$8^{x}+8^{-x}=t^{3}+\\dfrac1{t^{3}}=\\left(t+\\dfrac1t\\right)^{3}-3\\left(t+\\dfrac1t\\right)=27-9=18$。",
          "learning_points": [
            "指数の底をそろえるため、$t=2^x$ のように置き換える。",
            "対称な式は、$t+1/t$ の形をひとまとまりとして扱う。",
            "高い次数の計算を、対称式の公式で低い次数の条件に戻す。"
          ]
        },
        {
          "label": "(2)",
          "stem_md": "$x=\\log_{2}\\dfrac{\\boxed{20}\\pm\\sqrt{\\boxed{21}}}{\\boxed{22}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["20"]},
            {"format": "integer", "value": "5", "boxes": ["21"]},
            {"format": "integer", "value": "2", "boxes": ["22"]}
          ],
          "solution_md": "$t+\\dfrac1t=3$ より $t^{2}-3t+1=0$ なので $t=\\dfrac{3\\pm\\sqrt5}{2}$。$x=\\log_{2}t=\\log_{2}\\dfrac{3\\pm\\sqrt5}{2}$。",
          "learning_points": [
            "分母を払って、置き換えた文字の二次方程式にする。",
            "置き換えを戻すときは、対数の定義に沿って書き直す。",
            "途中で得た複数の解を、元の置き換えと照合する。"
          ]
        }
      ]
    },
    {
      "group_number": "4",
      "page_numbers": [3],
      "title": "場合の数（重複試行・単調数列の個数）",
      "subject": "数学",
      "unit": "日本大学2026 N全学統一(第1期)",
      "topic_tag": "場合の数(重複組合せ)",
      "difficulty": 3,
      "source_name": "日本大学 N全学統一方式第1期",
      "source_year": "2026",
      "stem_md": "1と書いてある玉が1個,2と書いてある玉が1個,…,8と書いてある玉が1個の合わせて8個の玉が袋に入っている。この袋から1個の玉を取り出して,玉に書いてある数を記録して袋に戻す。この試行を繰り返し行い,$k$回目の試行で記録された数を$a_k$とする。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "試行を5回行うとき,$a_1<a_2<a_3<a_4<a_5$ となるような玉の取り出し方は $\\boxed{23}\\boxed{24}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "56", "boxes": ["23", "24"]}
          ],
          "solution_md": "厳密に増加する5個の数の並びは、1〜8から異なる5個を選べば増加順は1通りに定まる。よって ${}_8C_5=56$ 通り。",
          "learning_points": [
            "増加順が指定されているとき、選んだ集合の並べ方は1通り。",
            "順序を数える問題に見えても、組合せに置き換えられる場合がある。"
          ]
        },
        {
          "label": "(2)",
          "stem_md": "試行を4回行うとき,$3\\le a_1\\le a_2\\le a_3\\le a_4\\le6$ となるような玉の取り出し方は $\\boxed{25}\\boxed{26}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "35", "boxes": ["25", "26"]}
          ],
          "solution_md": "$3$〜$6$ の4個の値から重複を許して4個選び非減少に並べる場合の数は重複組合せ ${}_4H_4={}_7C_4=35$ 通り。",
          "learning_points": [
            "非減少の並びは、重複を許した選び方として数える。",
            "重複組合せ ${}_nH_r$ を通常の組合せ ${}_{n+r-1}C_r$ に変換する。"
          ]
        },
        {
          "label": "(3)",
          "stem_md": "試行を4回行うとき,$a_1\\le a_2\\le a_3\\le a_4=a_1+3$ となるような玉の取り出し方について,$a_1$ の最大値は $\\boxed{27}$ であり,$a_1$ が最小であるときの玉の取り出し方は $\\boxed{28}\\boxed{29}$ 通りである。よって,試行を4回行うとき,$a_1\\le a_2\\le a_3\\le a_4=a_1+3$ となるような玉の取り出し方は $\\boxed{30}\\boxed{31}$ 通りである。",
          "answer_fields": [
            {"format": "integer", "value": "5", "boxes": ["27"]},
            {"format": "integer", "value": "10", "boxes": ["28", "29"]},
            {"format": "integer", "value": "50", "boxes": ["30", "31"]}
          ],
          "solution_md": "$a_4=a_1+3\\le8$ より $a_1\\le5$ なので最大値は $5$。$a_1$が最小の $1$ のとき $a_4=4$、$a_2,a_3$ は $1\\le a_2\\le a_3\\le4$ を満たす重複組合せで ${}_4H_2={}_5C_2=10$ 通り。$a_1=1,2,3,4,5$ のどの場合も範囲の幅は同じ4個なので各10通りずつ、合計 $5\\times10=50$ 通り。",
          "learning_points": [
            "数列の制約から、まず端の項がとれる範囲を決める。",
            "場合分けしても各場合の構造が同じなら、代表例を数えて掛け算できる。",
            "非減少条件は重複組合せで表せる。"
          ]
        }
      ]
    },
    {
      "group_number": "5",
      "page_numbers": [3],
      "title": "台形のベクトルと面積",
      "subject": "数学",
      "unit": "日本大学2026 N全学統一(第1期)",
      "topic_tag": "平面ベクトル(台形・面積比)",
      "difficulty": 3,
      "source_name": "日本大学 N全学統一方式第1期",
      "source_year": "2026",
      "stem_md": "$AB=4$,$BC=CD=2$,$DA=3$,$AB\\parallel DC$ であるような台形$ABCD$がある。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "辺$AB$の中点を$E$とすると,$DE=\\boxed{32}$ である。また,内積 $\\overrightarrow{AB}\\cdot\\overrightarrow{AD}$ の値は $\\boxed{33}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["32"]},
            {"format": "integer", "value": "9", "boxes": ["33"]}
          ],
          "solution_md": "$A(0,0)$,$B(4,0)$,$D(p,h)$,$C(p+2,h)$ とおく。$DA=3$ より $p^{2}+h^{2}=9$、$BC=2$ より $(p-2)^{2}+h^{2}=4$。辺々引いて $4p-4=5$ より $p=\\dfrac94$,$h^{2}=9-\\dfrac{81}{16}=\\dfrac{63}{16}$。$E(2,0)$ なので $DE^{2}=\\left(2-\\frac94\\right)^{2}+h^{2}=\\dfrac1{16}+\\dfrac{63}{16}=4$、$DE=2$。$\\overrightarrow{AB}\\cdot\\overrightarrow{AD}=(4,0)\\cdot\\left(\\frac94,h\\right)=9$。",
          "learning_points": [
            "図形の条件を座標に置き、長さを二次方程式に翻訳する。",
            "同じ高さをもつ2つの式を引くと、未知量を減らせる。",
            "最後に求める量に合う公式へ戻す。"
          ]
        },
        {
          "label": "(2)",
          "stem_md": "$\\triangle ABD$の面積は $\\dfrac{\\boxed{34}}{\\boxed{35}}\\sqrt{\\boxed{36}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["34"]},
            {"format": "integer", "value": "2", "boxes": ["35"]},
            {"format": "integer", "value": "7", "boxes": ["36"]}
          ],
          "solution_md": "$\\triangle ABD=\\dfrac12\\left|\\,4h-0\\cdot\\dfrac94\\,\\right|=2h$。$h=\\dfrac{3\\sqrt7}{4}$ なので面積は $\\dfrac32\\sqrt7$。",
          "learning_points": [
            "座標が与えられた三角形の面積は、底辺と高さまたは行列式で求める。",
            "前問で求めた値を、次の小問の計算に再利用する。"
          ]
        },
        {
          "label": "(3)",
          "stem_md": "辺$BC$の中点を$M$,辺$CD$の中点を$N$,線分$AM$と線分$BN$の交点を$P$とするとき,$\\overrightarrow{AP}=\\dfrac{\\boxed{37}}{\\boxed{38}}\\overrightarrow{AB}+\\dfrac{\\boxed{39}}{\\boxed{40}}\\overrightarrow{AD}$ である。また,四角形$PMCN$の面積は $\\dfrac{\\boxed{41}}{\\boxed{42}\\boxed{43}}\\sqrt{\\boxed{44}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["37"]},
            {"format": "integer", "value": "3", "boxes": ["38"]},
            {"format": "integer", "value": "4", "boxes": ["39"]},
            {"format": "integer", "value": "9", "boxes": ["40"]},
            {"format": "integer", "value": "7", "boxes": ["41"]},
            {"format": "integer", "value": "24", "boxes": ["42", "43"]},
            {"format": "integer", "value": "7", "boxes": ["44"]}
          ],
          "solution_md": "$\\overrightarrow{u}=\\overrightarrow{AB}$,$\\overrightarrow{v}=\\overrightarrow{AD}$ とおくと $\\overrightarrow{DC}=\\frac12\\overrightarrow{u}$ なので $C=\\overrightarrow{v}+\\frac12\\overrightarrow{u}$。$M=\\frac34\\overrightarrow{u}+\\frac12\\overrightarrow{v}$（$BC$の中点),$N=\\frac14\\overrightarrow{u}+\\overrightarrow{v}$（$CD$の中点)。直線$AM$は$t\\left(\\frac34u+\\frac12v\\right)$、直線$BN$は$u+s\\left(-\\frac34u+v\\right)$。係数を比較して $t=\\frac89$、$\\overrightarrow{AP}=\\frac23\\overrightarrow{u}+\\frac49\\overrightarrow{v}$。$P,M,C,N$を$(u,v)$係数平面でシューレースすると面積比は $\\frac{7}{72}$、実面積は $\\frac{7}{72}\\times3\\sqrt7=\\frac{7}{24}\\sqrt7$。",
          "learning_points": [
            "ベクトルの基底を置くと、図形の点を係数で表せる。",
            "直線の交点は、基底ごとの係数を比較して求める。",
            "係数平面の面積比を、元の図形の面積へ戻す。"
          ]
        }
      ]
    },
    {
      "group_number": "6",
      "page_numbers": [4],
      "title": "分数関数の極値と回転体の体積（数III）",
      "subject": "数学",
      "unit": "日本大学2026 N全学統一(第1期)",
      "topic_tag": "微分積分(数III・分数関数・回転体)",
      "difficulty": 4,
      "source_name": "日本大学 N全学統一方式第1期",
      "source_year": "2026",
      "stem_md": "関数 $f(x)=\\dfrac{ax+2}{x^{2}+b}$ はすべての$x$において連続で,$x=1$で極値$1$をもつ。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$a=\\boxed{45}$,$b=\\boxed{46}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "2", "boxes": ["45"]},
            {"format": "integer", "value": "3", "boxes": ["46"]}
          ],
          "solution_md": "すべての$x$で連続なので $b>0$。$f(1)=\\dfrac{a+2}{1+b}=1$ より $a=b-1$。$f'(x)=\\dfrac{a(x^{2}+b)-(ax+2)(2x)}{(x^{2}+b)^{2}}$ で $f'(1)=0$ より $a(1+b)-2(a+2)=0$。$a=b-1$ を代入すると $a^{2}=4$ となり $a=\\pm2$。$b=a+1>0$ を満たすのは $a=2,\\,b=3$。",
          "learning_points": [
            "関数の連続性から、分母が0にならない条件を先に確認する。",
            "極値の条件を、関数値と微分係数の2つの式に翻訳する。",
            "最後に定義域の条件で候補を絞り込む。"
          ]
        },
        {
          "label": "(2)",
          "stem_md": "曲線 $y=f(x)$ と$x$軸の交点の座標は $(\\boxed{47}\\boxed{48},0)$ であり,曲線$y=f(x)$,$x$軸および直線$x=1$で囲まれた図形を$x$軸の周りに1回転させてできる立体の体積は $\\dfrac{\\boxed{49}}{\\boxed{50}\\boxed{51}}\\sqrt{\\boxed{52}}\\pi^{2}-\\dfrac{\\boxed{53}}{\\boxed{54}}\\pi$ である。",
          "answer_fields": [
            {"format": "signed_integer", "value": "-1", "boxes": ["47", "48"]},
            {"format": "integer", "value": "8", "boxes": ["49"]},
            {"format": "integer", "value": "27", "boxes": ["50", "51"]},
            {"format": "integer", "value": "3", "boxes": ["52"]},
            {"format": "integer", "value": "2", "boxes": ["53"]},
            {"format": "integer", "value": "3", "boxes": ["54"]}
          ],
          "solution_md": "$f(x)=\\dfrac{2x+2}{x^{2}+3}=0$ より $x=-1$、交点は $(-1,0)$。区間 $[-1,1]$ で $f(x)\\ge0$ なので、求める体積は $V=\\pi\\displaystyle\\int_{-1}^{1}f(x)^{2}dx$。部分分数・置換積分により計算すると $V=\\dfrac{8}{27}\\sqrt3\\,\\pi^{2}-\\dfrac{2}{3}\\pi$。",
          "learning_points": [
            "回転体の体積は、回転軸からの距離を二乗して積分する。",
            "積分区間と関数の符号を確認してから体積公式を立てる。",
            "複雑な積分は、部分分数分解や置換で計算可能な形に分ける。"
          ]
        }
      ]
    }
  ]
};

window.MATH_SCHOOLS = (window.MATH_SCHOOLS || []).concat([{
  id: "nichidai",
  name: "日本大学",
  eyebrow: "NIHON UNIVERSITY / MATH",
  exams: [
    {
      key: "nichidai_2026_zengaku1",
      label: "N全学統一方式第1期",
      shortLabel: "全学統一1期",
      sourceTitle: "2026 N全学統一方式第1期",
      sourceText: "文理・理工・生産工・工・医・歯・生物資源科・薬 他 数学②",
    },
  ],
}]);
