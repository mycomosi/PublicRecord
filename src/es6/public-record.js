/**
 * Public Record Main Class
 * This class exposes the web component main class core instance which is used by all distributions of the utility
 * @Author Russ Stratfull 2020
 */
import * as S from './public-strings';
import defaultOptions from './defaultOptions';
import defaultPrintOptions from './defaultPrintOptions';
import publicWorker from './public-worker';
import {Messages} from "./shared/messages";

export class PublicRecord {

    constructor(options) {
        this._options = (options) ? options : defaultOptions();
        this._logs = [];

        if (options.sharedWorker) {
            this._inlineSharedWorker();
        }

        if (this._options.banner) this._printConsoleBanner();
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

            // Record message

        }
    }


    _recordMessage(level, message, ...args) {
        if (this._options.sharedWorker) {

        }
        else {
            this._logs.push({
                level: _level,
                message: _message,
                args: [...args]
            });
            if (this._logs.length > this._options.bufferLimit) {
                this._logs.shift();
            }
        }
    }

    /**
     * @param {Object} options - Configuration options for printMessage method.
     * @param {Function | false} filter - Filter which is run against the entire cache of messages
     * @param {String} filter.level - Log level of message
     * @param {String} filter.message - Message (displayed) text of the cached message
     * @param {Array} filter.args - Array of arguments passed to logMessage when each message was created
     * @return {string|string}
     */
    printMessages(options, filter) {
        let opts = options || defaultPrintOptions(),
            logs = (filter) ? this._logs.filter(filter) : this._logs;
        let out = "\n";
        for (let log of logs) {
            for (let arg of [...log.args]) {
                switch (typeof arg) {
                    case S.STRING:
                        log.message = (opts.replacers &&
                            opts.replacers.string &&
                            opts.replacers.string.fn) ?
                            opts.replacers.string.fn(log.message) :
                            log.message.replace(/%s/, arg);
                        break;
                    case S.NUMBER:
                        log.message = (opts.replacers &&
                            opts.replacers.number &&
                            opts.replacers.number.fn) ?
                            opts.replacers.number.fn(log.message) :
                            log.message.replace(/%d/, arg);
                        break;
                    case S.OBJECT:
                        log.message = (opts.replacers &&
                            opts.replacers.object &&
                            opts.replacers.object.fn) ?
                            opts.replacers.object.fn(log.message) :
                            log.message.replace(/%o/, JSON.stringify(arg));
                        break;
                    case S.FUNCTION:
                        log.message = (opts.replacers &&
                            opts.replacers.function &&
                            opts.replacers.function.fn) ?
                            opts.replacers.function.fn(log.message) :
                            log.message.replace(/%o/, S.FUNCTION);

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

    /**
     * Print banner console message
     * @private
     */
    _printConsoleBanner() {
        if (this._options &&
            this._options.banner &&
            this._options.banner.messages &&
            this._options.banner.messages.length ){
            for (let m of this._options.banner.messages) {
                if (m.args) {
                    window.console[m.type || S.LOG](m.message, ...m.args);
                }
                else window.console.info(m.message);
            }
        }
    }

    /**
     *
     * @private
     */
    _inlineSharedWorker() {
        let url = `${S.B64PREFIX}${btoa(publicWorker())}`;
        this._sharedWorker = new SharedWorker(url, S.PUBLIC_WORKER);
        this._sharedWorker.port.start();
        this._sharedWorker.port.postMessage(Messages.request(S.OPEN));
        this._sharedWorker.port.onmessage = (event) => {
            this._processResponse(event);
        };
    }

    /**
     *
     * @param event
     * @private
     */
    _processResponse(event) {
        switch (event.data.type) {
            case S.OPEN:
                this._sharedWorker.pid = event.data.id;
                break;
            case S.RESP:

                break;
        }
    }

}
