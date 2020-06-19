/**
 *  <public-record> Public recording web component
 *  @Author: Russ Stratfull 2020
 */
import {PublicRecord} from "./public-record";
import * as S from './public-strings';
import moduleMethods from './public-methods';

export function publicCreate(options) {
    function setOptions(options) {
        return class PublicRecordComponent extends HTMLElement {

            constructor() {
                super();
                this.cls = new PublicRecord(options);
            }

            /**
             *
             * @param options
             * @ignore
             */
            setOptions(options) {
                return this.cls.setOptions(options);
            }

            /**
             *
             * @return {Object}
             * @ignore
             */
            getOptions() {
                return this.cls.getOptions();
            }

            /**
             *
             * @param level
             * @param message
             * @param args
             * @return {string}
             * @ignore
             */
            logMessage(level, message, ...args) {
                return this.cls.logMessage(level, message, ...args);
            }

            /**
             * @param {Object} options - Configuration options for printMessage method.
             * @param {Function | false} filter - Filter which is run against the entire cache of messages
             * @param {String} filter.level - Log level of message
             * @param {String} filter.message - Messages (displayed) text of the cached message
             * @param {Array} filter.args - Array of arguments passed to logMessage when each message was created
             * @return {string|string}
             * @ignore
             */
            printMessages(options, filter) {
                return this.cls.printMessages(options, filter);
            }

            /**
             * Clears log messages
             * @ignore
             */
            clearMessages() {
                this.cls.clearMessages();
            }


            // Lifecycle callbacks
            // todo...
            // connectedCallback() {
            //
            // }

            // disconnectedCallback() {
            //
            // }

            // attributeChangedCallback() {
            //
            // }
        };
    }

    window.customElements.define(S.PUBLIC_RECORD_COMPONENT, setOptions(options));
    return moduleMethods(document.createElement(S.PUBLIC_RECORD_COMPONENT));


}
