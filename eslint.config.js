// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  react: true,
  isInEditor: false,
}, {
  files: ['src/**/*.{ts,tsx}'],
  ignores: ['src-tauri/**/*'],
}, {
  rules: {
    'antfu/no-top-level-await': 'off',
    'node/prefer-global/process': ['error', 'always'],
  },
})
