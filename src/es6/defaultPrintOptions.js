/**
 *
 * @typedef {Object} defaultPrintOptions
 * @property {Object} replacers
 * @property {Object} replacers.string
 * @property {Boolean} replacers.string.console
 * @property {Function | false} replacers.string.fn
 * @property {Object} replacers.number
 * @property {Boolean} replacers.number.console
 * @property {Function | false} replacers.number.fn
 * @property {Object} replacers.object
 * @property {Boolean} replacers.object.console
 * @property {Function | false} replacers.object.fn
 * @property {Object} replacers.function
 * @property {Boolean} replacers.function.console
 * @property {Function | false} replacers.function.fn
 */

export default function () {
    return {
        replacers: {
            string: {
                console: true,
                fn: false
            },
            number: {
                console: true,
                fn: false
            },
            object: {
                console: true,
                fn: false
            },
            function: {
                console: true,
                fn: false
            }
        }
    };
}
