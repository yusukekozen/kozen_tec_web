module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  // *.vue �t�@�C���� lint �ɂ����邽�߂ɕK�v
  plugins: ['vue'],
  // �����ɃJ�X�^�����[����ǉ����܂��B
  rules: {
    semi: [2, 'never'],
    'vue/html-indent': ['error', 2],
    'no-console': 'off', //console.log();OK
    'no-unused-vars': 'off', //�g���Ă��Ȃ��ϐ������Ă�OK
    'vue/html-self-closing': 'off', //img�^�O�̂悤�Ƀ^�O���P�Ŋ������Ă�OK
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'ignore', //a�^�O�̗���Ȃǂŕςȕ��ɂȂ�Ȃ��悤�ɒǋL
      },
    ],
  },
}
