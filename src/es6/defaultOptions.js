/**
 * Default Options for PublicRecord
 * @return {{loglevel: {warn: boolean, error: boolean, info: boolean}, bufferLimit: number}}
 * @Author Russ Stratfull 2020
 */

/**
 * Options
 *
 * @typedef {Object} options
 * @property {Object} loglevel - Level of logging to apply utility to (types not enabled are ignored)
 * @property {Boolean} loglevel.error - Error level log messages
 * @property {Boolean} loglevel.warn - Warning level log messages
 * @property {Boolean} loglevel.info - Info level log messages
 * @property {Boolean} loglevel.log - Log level log messages
 * @property {Number} bufferLimit - Maximum size of lot messages to keep in browser buffer before deleting them
 * @property {Boolean} sharedWorker - Enable sharedworker (puts all windows into one stream of logging
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
        bufferLimit: 2000,
        sharedWorker: false,
        sharedCallback: false
    };
}
