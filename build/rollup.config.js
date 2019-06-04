import vue from 'rollup-plugin-vue'
import common from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
    input: 'src/components/wrapper.js',
    output: {
        name: 'jboard-layout',
        exports: 'named'
    },
    plugins: [
        vue({
            css: true,
            compileTemplate: true,
        }),
        common(),
        resolve()
    ]
}