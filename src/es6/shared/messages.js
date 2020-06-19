

import * as S from "../public-strings";
export class Messages {

    constructor() {

    }

    /**
     *
     * @param {Object} type
     * @return {Object}
     */
    static request(type) {
        let r = {
            type: type
        };
        return r;
    }


    static ok() {
        return {
            type: S.OK
        };
    }

}
