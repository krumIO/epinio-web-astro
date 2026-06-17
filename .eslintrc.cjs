module.exports = {
    extends: [
      "plugin:astro/recommended",
    ],
    overrides: [
      {
        files: ["*.astro"],
        parser: "astro-eslint-parser",
        parserOptions: {
          parser: "@typescript-eslint/parser",
          extraFileExtensions: [".astro"],
        },
        rules: {},
      },
      {
        files: [
          '*.js',
          '*.mjs',
          '*.cjs',
        ],
        plugins: ["lit", "html"],
        env: {"browser": true},
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
        rules: {
          'import/prefer-default-export': 'off',
        },
      },
    ],
  }
