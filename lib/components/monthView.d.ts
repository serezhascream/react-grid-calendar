import * as React from 'react';
import { TCalendarData, TDaySelectFunc } from '../types';
interface Props {
    data: TCalendarData;
    activeView: string | null;
    firstDayIsMonday: boolean;
    weekdayTitles: string[];
    classPrefix?: string | string[] | null;
    onClick: TDaySelectFunc;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
