/**
 * Public Record Utility API of public methods
 * @param component
 * @return {{component: (function(): *), printMessages(*=, *=): (*|string), logMessage: (function(*=, *=, ...[*]): (*|string)), setOptions: (function(*=): (*|any)), getOptions(): *, clearMessages(): void}|*|string|*}
 * @Author Russ Stratfull 2020
 */
export default function (component) {
    return {

        /**
         * Set options (configuration) into the utility
         * @param {Object} options - For more details, see type definition for "options" type definition below
         * @return {Object}
         */
        setOptions: (options) => {
            return component.setOptions(options);
        },

        /**
         *
         * @return {Object} options object (For more details, see type definition for "options" type definition below)
         */
        getOptions() {
            return component.getOptions();
        },

        /**
         *
         * @param {String} level - Log level of message (error, warn, info, debug, log)
         * @param {Boolean} level.error - Error level log message
         * @param {Boolean} level.warn - Warning level log message
         * @param {Boolean} level.info - Info level log message
         * @param {Boolean} level.debug - Debug level log message
         * @param {Boolean} level.log - Log level log message (untested)
         * @param {Boolean} level.dir - Directory level log message (untested)
         * @param {String} message - Message to display and record (includes window.console replacers like %s %n %o %a...)
         * @param {*} args - additional arguments such as strings, objects, and numbers to replace in the message
         * @return {string}
         */
        logMessage: (level, message, ...args) => {
            return component.logMessage(level, message, ...args);
        },

        /**
         * @param {Object} options - Configuration options for printMessage method.
         * @param {Function | false} filter - Filter which is run against the entire cache of messages using Array.filter
         * @param {String} filter.level - Log level of message
         * @param {String} filter.message - Message (displayed) text of the cached message
         * @param {Array} filter.args - Array of arguments passed to logMessage when each message was created
         * @return {string|string}
         */
        printMessages(options, filter) {
            return component.printMessages(options, filter);
        },

        /**
         * Clears ALL log messages from the buffer
         */
        clearMessages() {
            component.clearMessages();
        },

        /**
         *
         * @return {HTMLElement} Web component <public-record> reference to append to dom
         */
        component: () => {
            return component;
        }
    };
}
