import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import alias from '@rollup/plugin-alias';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from "./package.json";

// Array of extensions to be handled by babel
const EXTENSIONS = [".ts", ".tsx"];

// Excluded dependencies
const EXTERNAL = Object.keys(pkg.devDependencies);

const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss']
});
const projectRootDir = path.resolve(__dirname);

export default {
  input: ["src/index.tsx"],
  output: {
    dir: "dist",
    sourcemap: true,
    format: "esm",
    preserveModules: true
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({
      extensions: EXTENSIONS,
      babelHelpers: "inline",
      include: EXTENSIONS.map(ext => `src/**/*${ext}`)
    }),
    alias({
      entries: [
        {
          find: 'src',
          replacement: path.resolve(projectRootDir, 'src')
          // OR place `customResolver` here. See explanation below.
        }
      ],
      customResolver
    }),
  ],
  external: EXTERNAL
};
