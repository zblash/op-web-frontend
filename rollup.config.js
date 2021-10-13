import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      cleaner({
        targets: ['./dist'],
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        typescript: require('typescript'),
      }),
      image(),
      json(),
    ],
    output: { dir: pkg.main, format: 'esm' },
  },
];
