import { TDayObject, TConditionalObj } from '../types';
export declare const getPrefixes: (prefix: string | string[] | null) => string[];
export declare const getClasses: (classes: string[], prefix: string | string[] | null) => string;
export declare const getConditionalClasses: (classesObject: TConditionalObj) => string[];
export declare const getArrowButtonClass: (btn: string, classPrefix: string | string[] | null, activeView: string | null) => string;
export declare const getDayClasses: (day: TDayObject, classPrefix: string | string[] | null) => string;
