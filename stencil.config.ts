import { Config } from '@stencil/core';

const esModules = [
  // dependencies of esm packages
  "@polyfea/core",
  "@stencil/core",
  "@polyfea/browser-api"
].join('|');

export const config: Config = {
  namespace: 'md-shell',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: '../.md/', dest: 'md/' , warn: true }
      ]
    },
    {
      type: 'docs-readme',
      footer: 'Polyfea MD Shell Web Components',
    },
    {
      type: 'www',
      baseUrl: "/",
      buildDir: "dist",
      serviceWorker: null, // disable service workers
      copy: [
        { src: './assets/static-config.json', dest: 'polyfea/static-config' },
        { src: '../.md/', dest: 'md/' , warn: true },
        { src: './assets/theme/', dest: 'md/theme' , warn: true },
        { src: '../node_modules/@polyfea/core/dist/boot.mjs', dest: 'polyfea.mjs' , warn: true }
      ]
    }
  ],
  testing: {
    browserHeadless: "new",
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
    transform: {
      '^.+\\.(ts|tsx|js|jsx|css)$': "@stencil/core/testing/jest-preprocessor"
    },
  },
};
