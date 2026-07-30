module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    // // 关闭 Prettier 规则
    'prettier/prettier': 'off',
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  
    'no-unused-vars': 'off',  // 完全关闭
    // 或者设置为警告而不是错误
    // 'no-unused-vars': 'warn',
  },
};
