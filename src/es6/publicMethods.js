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
         * @param {Object} options - For more details, see type definition for "options" below
         * @return {Object}
         */
        setOptions: (options) => {
            return component.setOptions(options);
        },

        /**
         *
         * @return {Object} options object
         */
        getOptions() {
            return component.getOptions();
        },

        /**
         *
         * @param {String} level - Log level of message (error, warn, info, debug, log)
         * @param {String} message
         * @param {*} args - additional arguments such as strings, objects, and numbers to replace in the message
         * @return {string}
         */
        logMessage: (level, message, ...args) => {
            return component.logMessage(level, message, ...args);
        },

        /**
         *
         * @param {Object} options
         * @param {Array} filters
         * @return {String} - Concatinated, formatted, string of all messages in buffer currently
         */
        printMessages(options, filters) {
            return component.printMessages(options, filters);
        },

        /**
         * Clears log messages
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
