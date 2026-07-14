window.TEIKYO_DATASETS = window.TEIKYO_DATASETS || {}; window.TEIKYO_DATASETS.sougou2024 = {
  "source_file_summary": {
    "detected_pages": 1,
    "notes": "帝京大学 2024年度 総合型選抜 薬・理工学部 数学（p7 問題・p8 解答キー）。Claudeチャットで読み取り・検算済み。"
  },
  "problem_groups": [
    {
      "group_number": "1",
      "page_numbers": [7],
      "title": "小問集合（二重根号・データの分析・二項定理・桁数）",
      "subject": "数学",
      "unit": "帝京大2024 総合型(薬・理工)",
      "topic_tag": "小問集合(数と式・データの分析・二項定理・対数)",
      "difficulty": 2,
      "source_name": "帝京大学 総合型選抜 薬・理工学部",
      "source_year": "2024",
      "stem_md": "次の各問いに答えよ。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$2\\sqrt{2-\\sqrt3}$ を二重根号をはずして簡単にすると、$\\sqrt{\\boxed{ア}}-\\sqrt{\\boxed{イ}}$ となる。",
          "answer_fields": [
            {"format": "integer", "value": "6", "boxes": ["ア"]},
            {"format": "integer", "value": "2", "boxes": ["イ"]}
          ],
          "solution_md": "$2-\\sqrt3=\\dfrac{4-2\\sqrt3}{2}=\\dfrac{(\\sqrt3-1)^2}{2}$ より $\\sqrt{2-\\sqrt3}=\\dfrac{\\sqrt3-1}{\\sqrt2}=\\dfrac{\\sqrt6-\\sqrt2}{2}$。よって $2\\sqrt{2-\\sqrt3}=\\sqrt6-\\sqrt2$。"
        },
        {
          "label": "(2)",
          "stem_md": "次の7個の値からなるデータの平均値は $\\boxed{ウ}\\boxed{エ}.\\boxed{オ}$、分散は $\\boxed{カ}\\boxed{キ}.\\boxed{ク}$ である。\n\n$10,\\ 12,\\ 14,\\ 16,\\ 18,\\ 20,\\ 22$",
          "answer_fields": [
            {"format": "integer", "value": "16", "boxes": ["ウ", "エ"]},
            {"format": "integer", "value": "0", "boxes": ["オ"]},
            {"format": "integer", "value": "16", "boxes": ["カ", "キ"]},
            {"format": "integer", "value": "0", "boxes": ["ク"]}
          ],
          "solution_md": "平均値は $\\dfrac{10+12+14+16+18+20+22}{7}=\\dfrac{112}{7}=16.0$。偏差は $-6,-4,-2,0,2,4,6$ で偏差平方和は $112$、分散は $\\dfrac{112}{7}=16.0$。"
        },
        {
          "label": "(3)",
          "stem_md": "$(x+2)^{6}$ を展開したときの $x^{3}$ の係数は $\\boxed{ケ}\\boxed{コ}\\boxed{サ}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "160", "boxes": ["ケ", "コ", "サ"]}
          ],
          "solution_md": "$x^3$ の項は ${}_6C_3 x^3 2^3=20\\times8=160$。"
        },
        {
          "label": "(4)",
          "stem_md": "$2^{100}$ は $\\boxed{シ}\\boxed{ス}$ 桁、$6^{100}$ は $\\boxed{セ}\\boxed{ソ}$ 桁の数である。\n\nただし、$\\log_{10}2=0.301$、$\\log_{10}3=0.477$ とする。",
          "answer_fields": [
            {"format": "integer", "value": "31", "boxes": ["シ", "ス"]},
            {"format": "integer", "value": "78", "boxes": ["セ", "ソ"]}
          ],
          "solution_md": "$\\log_{10}2^{100}=100\\times0.301=30.1$ より桁数は $31$。$\\log_{10}6^{100}=100(\\log_{10}2+\\log_{10}3)=100\\times0.778=77.8$ より桁数は $78$。"
        }
      ]
    },
    {
      "group_number": "2",
      "page_numbers": [7],
      "title": "さいころの確率と三角方程式",
      "subject": "数学",
      "unit": "帝京大2024 総合型(薬・理工)",
      "topic_tag": "場合の数と確率・三角関数(方程式)",
      "difficulty": 2,
      "source_name": "帝京大学 総合型選抜 薬・理工学部",
      "source_year": "2024",
      "stem_md": "(i) さいころ2個を同時に投げて、出た目の積を $m$、出た目の和を $n$ とする。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$m$ が3の倍数となる確率は $\\dfrac{\\boxed{ア}}{\\boxed{イ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "5", "boxes": ["ア"]},
            {"format": "integer", "value": "9", "boxes": ["イ"]}
          ],
          "solution_md": "積が3の倍数にならないのは両方の目が $\\{1,2,4,5\\}$ のときで $4\\times4=16$ 通り。$1-\\dfrac{16}{36}=\\dfrac{5}{9}$。"
        },
        {
          "label": "(2)",
          "stem_md": "$m$ が4の倍数となる確率は $\\dfrac{\\boxed{ウ}}{\\boxed{エ}\\boxed{オ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "5", "boxes": ["ウ"]},
            {"format": "integer", "value": "12", "boxes": ["エ", "オ"]}
          ],
          "solution_md": "積が4の倍数となる目の組を数え上げると15通りなので $\\dfrac{15}{36}=\\dfrac{5}{12}$。"
        },
        {
          "label": "(3)",
          "stem_md": "$\\dfrac{m}{n}$ が整数となる確率は $\\dfrac{\\boxed{カ}}{\\boxed{キ}\\boxed{ク}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "5", "boxes": ["カ"]},
            {"format": "integer", "value": "36", "boxes": ["キ", "ク"]}
          ],
          "solution_md": "$\\dfrac{m}{n}$ が整数となる目の組を数え上げると5通りなので $\\dfrac{5}{36}$。"
        },
        {
          "label": "(ii)",
          "stem_md": "$0\\le\\theta<2\\pi$ の範囲で、$\\sin2\\theta+\\sin\\theta-\\cos\\theta=\\dfrac12$ を満たす $\\theta$ の値は $\\boxed{ケ}$ 個あり、それらのうち最大のものは $\\dfrac{\\boxed{コ}}{\\boxed{サ}}\\pi$、2番目に大きいものは $\\dfrac{\\boxed{シ}}{\\boxed{ス}}\\pi$ である。",
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["ケ"]},
            {"format": "integer", "value": "4", "boxes": ["コ"]},
            {"format": "integer", "value": "3", "boxes": ["サ"]},
            {"format": "integer", "value": "5", "boxes": ["シ"]},
            {"format": "integer", "value": "6", "boxes": ["ス"]}
          ],
          "solution_md": "$t=\\sin\\theta-\\cos\\theta=\\sqrt2\\sin(\\theta-\\frac\\pi4)$ とおくと $2\\sin\\theta\\cos\\theta=1-t^2$ より $1-t^2+t=\\dfrac12$、$t^2-t-\\dfrac12=0$、$t=\\dfrac{1\\pm\\sqrt3}{2}$。$t=\\dfrac{1+\\sqrt3}{2}$ のとき $\\theta=\\dfrac23\\pi,\\dfrac56\\pi$、$t=\\dfrac{1-\\sqrt3}{2}$ のとき $\\theta=\\dfrac16\\pi,\\dfrac43\\pi$。解は4個で、最大は $\\dfrac43\\pi$、2番目は $\\dfrac56\\pi$。"
        }
      ]
    },
    {
      "group_number": "3",
      "page_numbers": [7],
      "title": "整数の性質と三角形",
      "subject": "数学",
      "unit": "帝京大2024 総合型(薬・理工)",
      "topic_tag": "整数の性質・図形と計量",
      "difficulty": 3,
      "source_name": "帝京大学 総合型選抜 薬・理工学部",
      "source_year": "2024",
      "stem_md": "次の各問いに答えよ。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "$2024$ の正の約数は $\\boxed{ア}\\boxed{イ}$ 個あり、その総和は $\\boxed{ウ}\\boxed{エ}\\boxed{オ}\\boxed{カ}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "16", "boxes": ["ア", "イ"]},
            {"format": "integer", "value": "4320", "boxes": ["ウ", "エ", "オ", "カ"]}
          ],
          "solution_md": "$2024=2^{3}\\times11\\times23$ より約数の個数は $(3+1)(1+1)(1+1)=16$ 個。総和は $(1+2+4+8)(1+11)(1+23)=15\\times12\\times24=4320$。"
        },
        {
          "label": "(2)",
          "stem_md": "$a,b,c$ はいずれも正の整数で $a\\le b\\le c$ であるとする。この条件の下で、$abc=2024$ となるような $(a,b,c)$ の組は $\\boxed{キ}\\boxed{ク}$ 組ある。",
          "answer_fields": [
            {"format": "integer", "value": "16", "boxes": ["キ", "ク"]}
          ],
          "solution_md": "$2024=2^{3}\\times11\\times23$ を $a\\le b\\le c$ を満たす3つの正の整数の積に分ける組を数え上げると16組。"
        },
        {
          "label": "(3)",
          "stem_md": "(2)で求めた$(a,b,c)$の組のうち、$a,b,c$が三角形の3辺の長さとなりうるのは、$a=\\boxed{ケ}$,$b=\\boxed{コ}\\boxed{サ}$,$c=\\boxed{シ}\\boxed{ス}$ のときである。",
          "answer_fields": [
            {"format": "integer", "value": "4", "boxes": ["ケ"]},
            {"format": "integer", "value": "22", "boxes": ["コ", "サ"]},
            {"format": "integer", "value": "23", "boxes": ["シ", "ス"]}
          ],
          "solution_md": "三角不等式 $a+b>c$ を満たす組を調べると $(4,22,23)$ のみが条件を満たす。"
        },
        {
          "label": "(4)",
          "stem_md": "(3)で求めた$a,b,c$に対して、$BC=a$,$CA=b$,$AB=c$ とする三角形を $\\triangle ABC$ とするとき、$\\cos C=\\dfrac{\\boxed{セ}\\boxed{ソ}\\boxed{タ}}{\\boxed{チ}\\boxed{ツ}\\boxed{テ}}$ である。",
          "answer_fields": [
            {"format": "signed_integer", "value": "-29", "boxes": ["セ", "ソ", "タ"]},
            {"format": "integer", "value": "176", "boxes": ["チ", "ツ", "テ"]}
          ],
          "solution_md": "余弦定理より $\\cos C=\\dfrac{a^2+b^2-c^2}{2ab}=\\dfrac{16+484-529}{2\\times4\\times22}=\\dfrac{-29}{176}$。"
        }
      ]
    },
    {
      "group_number": "4",
      "page_numbers": [7],
      "title": "2つの放物線",
      "subject": "数学",
      "unit": "帝京大2024 総合型(薬・理工)",
      "topic_tag": "図形と方程式・微分積分(放物線)",
      "difficulty": 3,
      "source_name": "帝京大学 総合型選抜 薬・理工学部",
      "source_year": "2024",
      "stem_md": "2つの放物線 $y=x^{2}-x-2$ ……① と $y=x^{2}-3x$ ……② がある。",
      "explanation_candidate_md": "",
      "sub_problems": [
        {
          "label": "(1)",
          "stem_md": "放物線①と$x$軸の交点の$x$座標は $x=\\boxed{ア}\\boxed{イ}$,$\\boxed{ウ}$ である。",
          "answer_fields": [
            {"format": "signed_integer", "value": "-1", "boxes": ["ア", "イ"]},
            {"format": "integer", "value": "2", "boxes": ["ウ"]}
          ],
          "solution_md": "$x^2-x-2=(x-2)(x+1)=0$ より $x=-1,2$。"
        },
        {
          "label": "(2)",
          "stem_md": "点$(\\boxed{ウ},0)$における放物線①の接線の方程式は $y=\\boxed{エ}x-\\boxed{オ}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "3", "boxes": ["エ"]},
            {"format": "integer", "value": "6", "boxes": ["オ"]}
          ],
          "solution_md": "$y'=2x-1$、$x=2$ で傾き $3$。接線は $y-0=3(x-2)$ より $y=3x-6$。"
        },
        {
          "label": "(3)",
          "stem_md": "放物線①と$x$軸で囲まれた部分の面積は $\\dfrac{\\boxed{カ}}{\\boxed{キ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "9", "boxes": ["カ"]},
            {"format": "integer", "value": "2", "boxes": ["キ"]}
          ],
          "solution_md": "6分の1公式より $\\displaystyle\\int_{-1}^{2}\\{0-(x^2-x-2)\\}dx=\\dfrac{(2-(-1))^3}{6}=\\dfrac{27}{6}=\\dfrac92$。"
        },
        {
          "label": "(4)",
          "stem_md": "放物線①と②の交点の座標は$(\\boxed{ク},\\boxed{ケ}\\boxed{コ})$である。",
          "answer_fields": [
            {"format": "integer", "value": "1", "boxes": ["ク"]},
            {"format": "signed_integer", "value": "-2", "boxes": ["ケ", "コ"]}
          ],
          "solution_md": "$x^2-x-2=x^2-3x$ より $2x=2$、$x=1$。$y=1-3=-2$。交点は $(1,-2)$。"
        },
        {
          "label": "(5)",
          "stem_md": "「放物線①と$x$軸で囲まれた部分」と「放物線②と$x$軸で囲まれた部分」の共通部分の面積は $\\dfrac{\\boxed{サ}}{\\boxed{シ}}$ である。",
          "answer_fields": [
            {"format": "integer", "value": "7", "boxes": ["サ"]},
            {"format": "integer", "value": "3", "boxes": ["シ"]}
          ],
          "solution_md": "①と②の交点 $x=1$ を境に、x軸に近い方（値が大きい方）を積分する。$\\displaystyle\\int_0^1\\{0-(x^2-3x)\\}dx+\\int_1^2\\{0-(x^2-x-2)\\}dx=\\dfrac76+\\dfrac76=\\dfrac73$。"
        },
        {
          "label": "(6)",
          "stem_md": "放物線①と②の両方に接する直線の方程式は $y=\\dfrac{\\boxed{ス}\\boxed{セ}}{\\boxed{ソ}}$ である。",
          "answer_fields": [
            {"format": "signed_integer", "value": "-9", "boxes": ["ス", "セ"]},
            {"format": "integer", "value": "4", "boxes": ["ソ"]}
          ],
          "solution_md": "$y=mx+k$ が①・②双方に接する条件（判別式0）を連立すると $m=0$,$k=-\\dfrac94$。よって $y=-\\dfrac94$。"
        }
      ]
    }
  ]
}
;

