const typescript = require('@rollup/plugin-typescript');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');
const dts = require('rollup-plugin-dts').default;
const terser = require('@rollup/plugin-terser').default;
const pkg = require('./package.json');

module.exports = [
  // JS Bundles (CJS + ESM)
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main, // dist/cjs/index.js
        format: 'cjs',
      },
      {
        file: pkg.module, // dist/esm/index.js
        format: 'esm',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
  },

  // Type Declarations
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
