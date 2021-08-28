import * as React from 'react';
import { TSelectedDay, TDayObject } from './types';
import './styles/index.scss';
interface Props {
    firstDayIsMonday?: boolean;
    selected?: TSelectedDay;
    markers?: number[];
    locale?: string;
    onSelectDay?: (day: TDayObject) => void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
