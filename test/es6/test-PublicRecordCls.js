/* eslint-env node, mocha */
/* global expect sinon*/

import {PublicRecordCls} from "../../src/es6/PublicRecordCls";
import defaultOptions from "../../src/es6/defaultOptions";


describe('PublicRecordCls', function () {

    'use strict';

    let PublicRecord;

    global.Date = {
        now: () => {return 'now';} // Replace actual timestamp with constant value
    };
    let console = {
        error: sinon.spy(),
        warn: sinon.spy(),
        info: sinon.spy(),
        debug: sinon.spy(),
        log: sinon.spy(),
        dir: sinon.spy()
    };
    global.window = {
        console: console
    };

    it(`should set 2 options and then get options`, function () {

        // given
        let options1 = { one: 1 },
            options2 = { two: 2 };

        // when
        PublicRecord = new PublicRecordCls();
        PublicRecord.setOptions(options1);
        PublicRecord.setOptions(options2);
        let opts = PublicRecord.getOptions();

        // then
        let expected = defaultOptions();
        Object.assign(expected, options1);
        Object.assign(expected, options2);
        expect(opts).to.deep.equal(expected);

    });

    it(`should log 2 messages and keep messages within buffer limit of 1, then validate with printMessages`, function () {

        // given
        let level = 'info',
            msg1 = 'msg1',
            msg2 = 'msg2',
            arg1 = 'arg1',
            arg2 = 3,
            arg3 = {test: 'object'},
            arg4 = function () {};
        let options = {
            loglevel: {
                info: true
            },
            bufferLimit: 1
        };
        let infoSpy = sinon.spy();
        global.window = {
            console: {
                info: infoSpy
            }
        };

        // when
        PublicRecord = new PublicRecordCls(options);
        PublicRecord.logMessage(level, msg1, arg1, arg2);

        // then
        let formatted1 = `[${level}] [now] ${msg1}`;
        let formatted2 = `[${level}] [now] ${msg2}`;
        sinon.assert.calledWith(infoSpy, formatted1, arg1, arg2);

        PublicRecord.logMessage(level, msg2, arg1, arg2, arg3, arg4);
        let printout = PublicRecord.printMessages();
        let expected = "\n";
        expected = expected.concat(formatted2 + "\n");
        expect(printout).to.equal(expected);

    });

    it(`should clear messages`, function () {

        // given

        // when
        // PublicRecord = new PublicRecordCls();
        // PublicRecord.clearMessages();

        // then
        // Nothing yet to test for

    });

});
