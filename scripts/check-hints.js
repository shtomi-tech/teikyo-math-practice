const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const context = { window: {}, console };
context.window.window = context.window;
vm.createContext(context);

[
  "static/sougou-data.js",
  "static/recommend-data.js",
  "static/recommend-details.js",
  "static/nichidai-data.js",
  "static/nichidai-details.js",
  "static/hint-strategies.js",
].forEach((relative) => {
  const file = path.join(root, relative);
  vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: relative });
});

const datasets = {
  ...(context.window.TEIKYO_DATASETS || {}),
  ...(context.window.MATH_DATASETS || {}),
};
const registry = context.window.MATH_HINT_STRATEGIES || {};
const errors = [];
let subProblemCount = 0;

for (const [examKey, dataset] of Object.entries(datasets)) {
  for (const group of dataset.problem_groups || []) {
    for (const sub of group.sub_problems || []) {
      subProblemCount += 1;
      const key = `${group.group_number}-${sub.label}`;
      const strategy = registry[examKey]?.[key];
      if (!strategy?.summary || !Array.isArray(strategy.roadmap) || strategy.roadmap.length < 3) {
        errors.push(`${examKey}/${key}: 解法の方針が不完全`);
      }
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`hint strategies OK: ${subProblemCount} sub-problems`);
