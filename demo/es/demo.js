/**
 * ES6 Module Demo
 * This demo shows how to import this ES6 module and use it in a basic application
 * @Author Russ Stratfull
 */
import {createPublicRecord} from "../../dist/createPublicRecord";

{
    let options = {

    };

    window.PublicRecord = createPublicRecord(options);
}
