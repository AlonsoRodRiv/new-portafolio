module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-arrow-functions-in-watch': 'warn',
    'vue/no-async-in-computed-properties': 'warn',
    'vue/require-default-prop': 'warn',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-var-requires': 'off',

    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always', // evita self-closing en <br>, <img>, etc.
          normal: 'never', // fuerza cierre explícito en <i>, <span>, etc.
          component: 'always', // permite self-closing en componentes Vue
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
};
