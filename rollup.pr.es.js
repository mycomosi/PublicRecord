import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/es6/createPublicRecord.js',
    output: {
        file: 'dist/createPublicRecord.js',
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
