/**
 * Default Options for PublicRecord
 * @return {{loglevel: {warn: boolean, error: boolean, info: boolean}, bufferLimit: number}}
 * @Author Russ Stratfull 2020
 */

/**
 * Options object used by setOptions method
 *
 * @typedef {Object} options
 * @property {Object} loglevel - Level of logging to apply utility to (types not enabled are ignored)
 * @property {Boolean} loglevel.error - Error level log messages
 * @property {Boolean} loglevel.warn - Warning level log messages
 * @property {Boolean} loglevel.info - Info level log messages
 * @property {Boolean} loglevel.log - Log level log messages
 * @property {Object} banner - Banner message(s) to display when the public record is created
 * @property {Array} banner.messages - Array of banner message configurations to display in the web console
 * @property {String} banner.messages.type - Type of message (log, error, warn, info, debug, dir)
 * @property {String} banner.messages.message - Messages to display
 * @property {Array} banner.messages.args - Array of arguments to pass to the console formatter
 * @property {Number} bufferLimit - Maximum size of lot messages to keep in browser buffer before deleting them
 * @property {Boolean} sharedWorker - Enable sharedworker (puts all windows into one stream of logging)
 * @property {Function | false} sharedCallback - Callback funtion to run on ALL messages being managed in publicRecord
 * @example
 // Default options configuration
 {
    loglevel: {
        error: true,
        warn: true,
        info: true,
        debug: false,
        log: false
    },
    banner: {
            messages: [
                {
                    type: 'warn',
                    message: `%c- Public Record Notice -`,
                    args: [
                        `font-size: 18px; font-weight: bold`
                    ]
                },
                {
                    type: 'info',
                    message: `%cIt's a good idea to display a selfxss warning`,
                    args: [
                        `font-size: 14px; color: #333333`
                    ]
                },
                {
                    type: 'info',
                    message: `To learn more:  https://en.wikipedia.org/wiki/Self-XSS`
                }
            ]
        },
    bufferLimit: 2000,
    sharedWorker: false,
    sharedCallback: false
}

 */

export default function () {
    return {
        loglevel: {
            error: true,
            warn: true,
            info: true,
            debug: false,
            log: false
        },
        logCustom: false,
        banner: {
            messages: [
                {
                    type: 'warn',
                    message: `%c- Public Record Notice -`,
                    args: [
                        `font-size: 18px; font-weight: bold`
                    ]
                },
                {
                    type: 'info',
                    message: `%cIt's a good idea to display a selfxss warning`,
                    args: [
                        `font-size: 14px; color: #333333`
                    ]
                },
                {
                    type: 'info',
                    message: `To learn more:  https://en.wikipedia.org/wiki/Self-XSS`
                }
            ]
        },
        bufferLimit: 2000,
        sharedWorker: true,
        sharedCallback: false
    };
}
