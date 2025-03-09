import { defineConfig, presetIcons, presetWind3, transformerDirectives } from 'unocss'

export default defineConfig({
  content: {
    filesystem: [
      './src/**/*.tsx',
    ],
  },
  presets: [
    presetWind3({
      dark: 'media',
    }),
    presetIcons({
      collections: {
        hit: {
          hamburger:
            '<svg viewBox="0 0 18 16" fill="currentColor"><path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" /></svg>',
          gear:
            '<svg viewBox="0 0 24 24" fill="currentColor"><path clip-rule="evenodd" fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" /></svg>',
          history:
            '<svg viewBox="0 0 24 24" fill="currentColor"><path clip-rule="evenodd" fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" /></svg>',
          reset:
            '<svg viewBox="0 0 20 20" fill="currentColor" ><path clip-rule="evenodd" fill-rule="evenodd" d="M2.232 12.207a.75.75 0 0 1 1.06.025l3.958 4.146V6.375a5.375 5.375 0 0 1 10.75 0V9.25a.75.75 0 0 1-1.5 0V6.375a3.875 3.875 0 0 0-7.75 0v10.003l3.957-4.146a.75.75 0 0 1 1.085 1.036l-5.25 5.5a.75.75 0 0 1-1.085 0l-5.25-5.5a.75.75 0 0 1 .025-1.06Z" /></svg>',
          close:
            '<svg viewBox="0 0 18 17" fill="currentColor"><path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" /></svg>',
          arrow:
            '<svg viewBox="0 0 14 10" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" /></svg>',
          caret:
            '<svg viewBox="0 0 10 6" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" /></svg>',
          trash:
            '<svg viewBox="0 0 20 20" fill="currentColor"><path clip-rule="evenodd" fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" /></svg>',
          moon: '<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" /></svg>',
          sun: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" /></svg>',
          language:
            '<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z" clip-rule="evenodd" /></svg>',
          minus: '<svg viewBox="0 0 20 20" fill="currentColor"><path clip-rule="evenodd" fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" /></svg>',
          plus: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" /></svg>',
        },
      },
    }),
  ],
  transformers: [transformerDirectives()],
  preflights: [
    {
      getCSS: () => `
      :root {
        --v-text: 31 35 40;
        --v-background: 255 255 255;
        --v-divider: 209 217 224;
        --v-primary: 31 136 61;
        --v-primary-hover: 28 129 57;
        --v-primary-active: 25 121 53;
        --v-primary-disabled: 149 216 166;
        --v-primary-contrast: 255 255 255;
        --v-alpha-primary-contrast: 1;
        --v-primary-disabled-contrast: 255 255 255;
        --v-alpha-primary-disabled-contrast: 0.8;
        --v-primary-border: 255 255 255;
        --v-alpha-primary-border: 0.1;
        --v-primary-disabled-border: 149 216 166;
        --v-alpha-primary-disabled-border: 1;
        --v-secondary: 68 147 248;
        --v-secondary-hover: 61 138 234;
        --v-secondary-active: 54 128 220;
        --v-secondary-disabled: 173 207 247;
        --v-secondary-contrast: 255 255 255;
        --v-alpha-secondary-contrast: 1;
        --v-secondary-disabled-contrast: 255 255 255;
        --v-alpha-secondary-disabled-contrast: 0.8;
        --v-secondary-border: 255 255 255;
        --v-alpha-secondary-border: 0.1;
        --v-secondary-disabled-border: 173 207 247;
        --v-alpha-secondary-disabled-border: 1;
        --v-neutral: 246 248 250;
        --v-neutral-hover: 239 242 245;
        --v-neutral-active: 230 234 239;
        --v-neutral-disabled: 239 242 245;
        --v-neutral-contrast: 37 41 46;
        --v-alpha-neutral-contrast: 1;
        --v-neutral-disabled-contrast: 129 139 152;
        --v-alpha-neutral-disabled-contrast: 1;
        --v-neutral-border: 209 217 224;
        --v-alpha-neutral-border: 1;
        --v-neutral-disabled-border: 129 139 152;
        --v-alpha-neutral-disabled-border: 0.1;
        --v-danger: 207 34 46;
        --v-danger-hover: 194 28 39;
        --v-danger-active: 181 22 32;
        --v-danger-disabled: 244 170 175;
        --v-danger-contrast: 255 255 255;
        --v-alpha-danger-contrast: 1;
        --v-danger-disabled-contrast: 255 255 255;
        --v-alpha-danger-disabled-contrast: 0.8;
        --v-danger-border: 255 255 255;
        --v-alpha-danger-border: 0.1;
        --v-danger-disabled-border: 244 170 175;
        --v-alpha-danger-disabled-border: 1;
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --v-text: 240 246 252;
          --v-background: 13 17 23;
          --v-divider: 61 68 77;
          --v-primary: 35 134 54;
          --v-primary-hover: 41 144 59;
          --v-primary-active: 46 154 64;
          --v-primary-disabled: 16 88 35;
          --v-primary-contrast: 240 246 252;
          --v-alpha-primary-contrast: 1;
          --v-primary-disabled-contrast: 240 246 252;
          --v-alpha-primary-disabled-contrast: 0.6;
          --v-primary-border: 61 68 77;
          --v-alpha-primary-border: 0.8;
          --v-primary-disabled-border: 16 88 35;
          --v-alpha-primary-disabled-border: 0.6;
          --v-secondary: 78 145 255;
          --v-secondary-hover: 85 155 255;
          --v-secondary-active: 92 165 255;
          --v-secondary-disabled: 28 65 128;
          --v-secondary-contrast: 240 246 252;
          --v-alpha-secondary-contrast: 1;
          --v-secondary-disabled-contrast: 240 246 252;
          --v-alpha-secondary-disabled-contrast: 0.6;
          --v-secondary-border: 61 68 77;
          --v-alpha-secondary-border: 0.8;
          --v-secondary-disabled-border: 28 65 128;
          --v-alpha-secondary-disabled-border: 0.6;
          --v-neutral: 33 40 48;
          --v-neutral-hover: 40 48 58;
          --v-neutral-active: 48 56 68;
          --v-neutral-disabled: 22 27 33;
          --v-neutral-contrast: 201 209 217;
          --v-alpha-neutral-contrast: 1;
          --v-neutral-disabled-contrast: 109 119 128;
          --v-alpha-neutral-disabled-contrast: 0.8;
          --v-neutral-border: 61 68 77;
          --v-alpha-neutral-border: 1;
          --v-neutral-disabled-border: 40 48 58;
          --v-alpha-neutral-disabled-border: 0.6;
          --v-danger: 200 35 35;
          --v-danger-hover: 215 45 45;
          --v-danger-active: 230 55 55;
          --v-danger-disabled: 100 25 25;
          --v-danger-contrast: 240 246 252;
          --v-alpha-danger-contrast: 1;
          --v-danger-disabled-contrast: 240 246 252;
          --v-alpha-danger-disabled-contrast: 0.6;
          --v-danger-border: 61 68 77;
          --v-alpha-danger-border: 0.8;
          --v-danger-disabled-border: 100 25 25;
          --v-alpha-danger-disabled-border: 0.6;
        }
      }

      html {
        font-family:
          Assistant,
          Roboto,
          Inter var,
          ui-sans-serif,
          system-ui,
          sans-serif,
          Apple Color Emoji,
          Segoe UI Emoji,
          Segoe UI Symbol,
          Noto Color Emoji;
        scroll-padding-top: 80px;
      }

      input::-webkit-search-cancel-button {
        display: none;
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      .progress {
        animation: progress 1s infinite linear;
        transform-origin: 0% 50%;
      }

      @keyframes progress {
        0% {
          transform: translateX(0) scaleX(0);
        }
        40% {
          transform: translateX(0) scaleX(0.4);
        }

        100% {
          transform: translateX(100%) scaleX(0.5);
        }
      }
`,
      layer: 'base',
    },
  ],
  theme: {
    colors: {
      'default': 'rgb(var(--v-text) / <alpha-value>)',
      'invert': 'rgb(var(--v-background) / <alpha-value>)',
      'primary': 'rgb(var(--v-primary) / <alpha-value>)',
      'primary-hover': 'rgb(var(--v-primary-hover) / <alpha-value>)',
      'primary-active': 'rgb(var(--v-primary-active) / <alpha-value>)',
      'primary-disabled': 'rgb(var(--v-primary-disabled) / <alpha-value>)',
      'primary-contrast': 'rgb(var(--v-primary-contrast) / <alpha-value>)',
      'primary-disabled-contrast': 'rgb(var(--v-primary-disabled-contrast) / <alpha-value>)',
      'secondary': 'rgb(var(--v-secondary) / <alpha-value>)',
      'secondary-hover': 'rgb(var(--v-secondary-hover) / <alpha-value>)',
      'secondary-active': 'rgb(var(--v-secondary-active) / <alpha-value>)',
      'secondary-disabled': 'rgb(var(--v-secondary-disabled) / <alpha-value>)',
      'secondary-contrast': 'rgb(var(--v-secondary-contrast) / <alpha-value>)',
      'secondary-disabled-contrast': 'rgb(var(--v-secondary-disabled-contrast) / <alpha-value>)',
      'neutral': 'rgb(var(--v-neutral) / <alpha-value>)',
      'neutral-hover': 'rgb(var(--v-neutral-hover) / <alpha-value>)',
      'neutral-active': 'rgb(var(--v-neutral-active) / <alpha-value>)',
      'neutral-disabled': 'rgb(var(--v-neutral-disabled) / <alpha-value>)',
      'neutral-contrast': 'rgb(var(--v-neutral-contrast) / <alpha-value>)',
      'neutral-disabled-contrast': 'rgb(var(--v-neutral-disabled-contrast) / <alpha-value>)',
      'danger': 'rgb(var(--v-danger) / <alpha-value>)',
      'danger-hover': 'rgb(var(--v-danger-hover) / <alpha-value>)',
      'danger-active': 'rgb(var(--v-danger-active) / <alpha-value>)',
      'danger-disabled': 'rgb(var(--v-danger-disabled) / <alpha-value>)',
      'danger-contrast': 'rgb(var(--v-danger-contrast) / <alpha-value>)',
      'danger-disabled-contrast': 'rgb(var(--v-danger-disabled-contrast) / <alpha-value>)',
      'divider': 'rgb(var(--v-divider) / <alpha-value>)',
    },
    backgroundColor: {
      default: 'rgb(var(--v-background) / <alpha-value>)',
      invert: 'rgb(var(--v-text) / <alpha-value>)',
    },
    borderColor: {
      'primary': 'rgb(var(--v-primary-border) / <alpha-value>)',
      'primary-disabled': 'rgb(var(--v-primary-disabled-border) / <alpha-value>)',
      'secondary': 'rgb(var(--v-secondary-border) / <alpha-value>)',
      'secondary-disabled': 'rgb(var(--v-secondary-disabled-border) / <alpha-value>)',
      'neutral': 'rgb(var(--v-neutral-border) / <alpha-value>)',
      'danger': 'rgb(var(--v-danger-border) / <alpha-value>)',
      'danger-disabled': 'rgb(var(--v-danger-disabled-border) / <alpha-value>)',
    },
  },
  rules: [
    [
      /^text-opacity-(.+)$/,
      ([, alias]) => ({
        '--un-text-opacity': `var(--v-alpha-${alias})`,
      }),
    ],
    [
      /^bg-opacity-(.+)$/,
      ([, alias]) => ({
        '--un-bg-opacity': `var(--v-alpha-${alias})`,
      }),
    ],
    [
      /^border-opacity-(.+)$/,
      ([, alias]) => ({
        '--un-border-opacity': `var(--v-alpha-${alias}-border)`,
      }),
    ],
  ],
  shortcuts: [
    [
      /^btn-([^-]+)$/,
      ([, c]) =>
        `px-8 py-3 rounded-md cursor-pointer disabled:cursor-not-allowed
        bg-${c} border border-${c} border-opacity-${c}
        text-${c}-contrast text-opacity-${c}-contrast
        not-disabled:hover:bg-${c}-hover
        not-disabled:active:bg-${c}-active
        disabled:bg-${c}-disabled
        disabled:border-${c}-disabled
        disabled:border-opacity-${c}-disabled
        disabled:text-${c}-disabled-contrast
        disabled:text-opacity-${c}-disabled-contrast`,
    ],
    [
      /^btn-ghost-([^-]+)$/,
      ([, c]) =>
        `px-8 py-3 text-${c} text-opacity-${c} rounded-md cursor-pointer not-disabled:hover:bg-${c}/10 not-disabled:active:bg-${c}/10 disabled:text-${c}-disabled disabled:cursor-not-allowed`,
    ],
  ],
  layers: {
    base: -1,
    utilities: 1,
    components: 2,
  },
})
