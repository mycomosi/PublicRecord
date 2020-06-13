/**
 * Public Record Main Class
 * This class exposes the web component main class core instance which is used by all distributions of the utility
 * @Author Russ Stratfull 2020
 */
import * as S from './public-strings';
export class PublicRecordCls {

    constructor() {
        this._options = {
            loglevel: {
                error: true,
                warn: true,
                info: true
            },
            bufferLimit: 2000
        };
        this._logs = [];
    }

    /**
     *
     * @param options
     * @return {any}
     */
    setOptions(options) {
        return Object.assign(this._options, options);
    }

    /**
     *
     * @return {Object}
     */
    getOptions() {
        return this._options;
    }

    /**
     *
     * @param level
     * @param message
     * @param args
     * @return {string}
     */
    logMessage(level, message, ...args) {
        let _level = level.toLowerCase();
        if (this._options.loglevel &&
            this._options.loglevel[_level]) {
            let _message = `[${_level}] [${Date.now()}] ${message}`;
            window.console[_level](_message, ...args);
            this._logs.push({
                level: _level,
                message: _message,
                args: [...args]
            });
            if (this._logs.length > this._options.bufferLimit) {
                this._logs.pop();
            }
        }
    }

    /**
     *
     * @param options
     * @param filters
     * @return {string|string}
     */
    printMessages(options, filters) {
        let out = "\n";
        for (let log of this._logs) {
            for (let arg of [...log.args]) {
                switch (typeof arg) {
                    case S.STRING:
                        log.message = log.message.replace(/%s/, arg);
                        break;
                    case S.NUMBER:
                        log.message = log.message.replace(/%d/, arg);
                        break;
                    case S.OBJECT:
                        log.message = log.message.replace(/%o/, JSON.stringify(arg));
                        break;
                    case S.FUNCTION:
                        log.message = log.message.replace(/%o/, S.FUNCTION);

                }
            }
            out = out.concat(log.message + "\n");
        }
        return out;
    }

    /**
     *
     */
    clearMessages() {
        this._logs = [];
    }
}
