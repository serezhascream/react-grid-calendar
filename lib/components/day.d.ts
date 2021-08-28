import * as React from 'react';
import { TDayObject, TDaySelectFunc } from '../types';
interface Props {
    day: TDayObject;
    classPrefix?: string | string[] | null;
    onClick: TDaySelectFunc;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
