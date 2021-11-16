import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel';
import sourcemaps from 'rollup-plugin-sourcemaps';
import styles from "rollup-plugin-styles";
const autoprefixer = require('autoprefixer');

// the entry point for the library
const input = 'src/library/index.js'

// 
var MODE = [
  {
    fomart: 'cjs'
  },
  {
    fomart: 'esm'
  },
  {
    fomart: 'umd'
  }
]

var config = []


MODE.map((m) => {
    var conf = {
        input: input,
        output: {
            name: "react-tree",
            file: `dist/index.${m.fomart}.js`,
            format: m.fomart,
            exports: "auto"
        },
        // this externelizes react to prevent rollup from compiling it
        external: ["react", /@babel\/runtime/],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                plugins: ['@babel/transform-runtime'],
                babelHelpers: 'runtime'
            }),
            sourcemaps(),
            styles({
                postcss: {
                    plugins: [
                        autoprefixer()
                    ]
                }
            })
        ]
    }
    config.push(conf)
})

export default [
  ...config,
]
