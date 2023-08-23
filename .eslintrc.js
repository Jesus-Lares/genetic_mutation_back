module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    quotes: ["error", "double"],
    "no-shadow": "off",
    "linebreak-style": "off",
    "comma-dangle": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "no-unused-vars": "off",
    "object-curly-newline": "off",
    "import/no-extraneous-dependencies": "off",
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "implicit-arrow-linebreak": "off",
    "import/no-unresolved": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
        paths: ["src"],
      },
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
