# 数学過去問演習

大学の数学過去問・塾の理解度確認テストを1画面で切り替えて演習する静的アプリです。**学校（出典）→ 方式・年度**の2階層で出典を切り替えられます。現在は帝京大学（総合型／学校推薦型）・日本大学（N全学統一方式第1期 2026）・理解度確認テスト（2025年7月 βコース）を収録しています。

## 公開

GitHub Pages公開版があります。

```text
https://shtomi-tech.github.io/teikyo-math-practice/
```

ポータルで発行した生徒別共有URLでは、学校・方式ごとの進捗と解答下書きを共通Supabaseへ保存します。通常URLでは従来どおり端末内の生徒選択と `localStorage` を使います。

## 学校・方式の追加

コード（`static/app.js`）を書き換えずに、データファイルを読み込むだけで出典を増やせます。

1. `static/<school>-data.js` を作り、`window.MATH_DATASETS` に一意なキーで問題データを登録する。

   ```js
   window.MATH_DATASETS = window.MATH_DATASETS || {};
   window.MATH_DATASETS["waseda_2026"] = { problem_groups: [ /* ... */ ] };
   ```

2. 学校を1つ増やすときは `window.MATH_SCHOOLS` に追記する（帝京は既定で含まれる）。

   ```js
   window.MATH_SCHOOLS = (window.MATH_SCHOOLS || []).concat([{
     id: "waseda",
     name: "早稲田大学",
     eyebrow: "WASEDA UNIVERSITY / MATH",
     exams: [
       { key: "waseda_2026", label: "一般選抜 2026", shortLabel: "2026", sourceTitle: "2026 一般選抜", sourceText: "理工 数学" },
     ],
   }]);
   ```

3. 段階ヒント（詳しい解き方）を足すときは `window.MATH_DETAIL_TEXTS` にキー `"<group_number>-<label>"` の配列で登録する。

   方針を個別に指定する場合は、問題データの小問に `hint_strategy` を追加する。省略した場合は `static/hint-strategies.js` が `learning_points` または単元タグから自動生成する。

   ```js
   "hint_strategy": {
     "summary": "使う考え方と処理の順番を先に決める。",
     "roadmap": ["条件を整理する", "公式を適用する", "元の条件で確認する"]
   }
   ```

   詳細ヒントは従来の配列形式に加えて、次の構造化形式にも対応する。

   ```js
   "1-(1)": {
     "strategy": ["条件を整理する", "公式を適用する", "答えを確認する"],
     "steps": ["立式する", "計算する", "空欄に合わせる"]
   }
   ```

   小問データに `learning_points` の配列を追加すると、詳細解説に「この問題から学べること」を表示できる。

4. `index.html` の `<script defer>` に作成したデータファイルを追加する。

- `exam.key` は DATASETS 内で一意にすること（進捗の保存キーを兼ねるため）。
- 学校が1つだけのときは学校切替パネルは自動的に隠れる。

ヒント方針の検証は次で実行する。

```text
node scripts/check-hints.js
```

## 運用

問題データを更新した場合は、公開版、ポータル、QRコードのリンクを確認します。
