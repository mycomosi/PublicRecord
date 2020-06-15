/**
 * ES6 Module Demo
 * This demo shows how to import this ES6 module and use it in a basic application
 * @Author Russ Stratfull
 */
import {createPublicRecord} from "../../dist/createPublicRecord";

{
    let options = {
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
        sharedWorker: false,
        sharedCallback: false
    };

    window.PublicRecord = createPublicRecord(options);
}
