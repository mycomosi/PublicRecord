/**
 * Default Options for PublicRecord
 * @return {{loglevel: {warn: boolean, error: boolean, info: boolean}, bufferLimit: number}}
 * @Author Russ Stratfull 2020
 */

/**
 * Default options
 *
 * @typedef {Object} defaultOptions
 * @property {Object} loglevel - Level of logging to apply utility to (types not enabled are ignored)
 * @property {Number} bufferLimit - Limit applied to buffer of messages held in memory
 *
 */

export default function () {
    return {
        loglevel: {
            error: true,
            warn: true,
            info: true
        },
        bufferLimit: 2000
    };
}
