/**
 *  HTML Index bootstrap for the IIFE distribution of the utility
 *  This script adds "PublicRecord" to the global window scope
 *  @Author Russ Stratfull 2020
 */
import * as S from './public-strings';
import {createPublicRecord} from './createPublicRecord';
import defaultOptions from './defaultOptions';
window.PublicRecord = createPublicRecord(defaultOptions());
