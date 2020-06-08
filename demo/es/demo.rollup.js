// Rollup plugins
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: './demo/es/demo.js',
    output: {
        file: 'dist/demo.js',
        format: 'es',
        sourcemap: false
    },
    plugins: [
        resolve(),
        eslint()
    ]
};
