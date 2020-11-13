import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import { eslint } from 'rollup-plugin-eslint'
import { terser } from 'rollup-plugin-terser'
import fs from 'fs'

function copyfiles(files) {
  return {
    name: 'copy',
    buildEnd: () => {
      files.forEach(([from, to]) => {
        fs.copyFileSync(from, to)
      })
    },
  }
}

const commonPlugins = () => [
  resolve({ extensions: ['.js', '.ts'] }),
  eslint({
    include: 'src/*',
  }),
  typescript({}),
  copyfiles([
    ['node_modules/@umbra3d/umbrajs/dist/umbra.wasm', 'dist/umbra.wasm'],
    ['node_modules/@umbra3d/umbrajs/dist/UmbraAssetWorker.wasm', 'dist/UmbraAssetWorker.wasm'],
    ['node_modules/@umbra3d/umbrajs/dist/UmbraAssetWorker.js', 'dist/UmbraAssetWorker.js'],
  ]),
]

const makeOutput = (name, format) => ({
  file: name,
  format: format,
  name: 'UmbraRuntime',
  exports: 'named',
  sourcemap: true,
  globals: { three: 'THREE' },
})

const config = [
  {
    input: 'src/index.ts',
    output: [
      makeOutput(`dist/umbrajs-three.js`, 'umd'),
      makeOutput(`dist/umbrajs-three.amd.js`, 'amd'),
      makeOutput(`dist/umbrajs-three.esm.js`, 'esm'),
    ],
    external: ['three'],
    plugins: commonPlugins(),
  },
  {
    input: 'src/index.ts',
    output: [
      makeOutput(`dist/umbrajs-three.min.js`, 'umd'),
      makeOutput(`dist/umbrajs-three.amd.min.js`, 'amd'),
      makeOutput(`dist/umbrajs-three.esm.min.js`, 'esm'),
    ],
    external: ['three'],
    plugins: [...commonPlugins(), terser()],
  },
]

module.exports = config
