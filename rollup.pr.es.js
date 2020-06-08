import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/es6/main.js',
    output: {
        file: 'dist/thePublicRecord.js',
        format: 'es',
        sourcemap: false
    },
    external: ['lodash-es', 'lodash-es/merge', 'lodash-es/sortBy'],
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        eslint()
    ]
};
