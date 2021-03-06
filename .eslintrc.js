module.exports = {
  rules: {
    'no-console': 'off',
    "vue/singleline-html-element-content-newline": 0,
    "vue/html-self-closing": 0,
    "vue/max-attributes-per-line": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/multiline-html-element-content-newline": 0
  },
  "parserOptions": {
    "parser": "babel-eslint",
  },
  "extends": ["plugin:vue/recommended"],
  "plugins": [
    "vue"
  ]
};
