


import {PublicRecordCls} from "./PublicRecordCls";

let _PublicRecord;
export default function (configuration) {
    if (!_PublicRecord) {
        _PublicRecord = new PublicRecordCls(configuration);
    }
    else {
        return _PublicRecord;
    }
}
