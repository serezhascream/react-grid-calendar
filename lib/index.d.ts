import * as React from 'react';
import { TDayObject } from './types';
import './styles/index.scss';
interface Props {
    firstDayIsMonday?: boolean;
    date?: Date | null;
    markers?: number[];
    locale?: string;
    classPrefix?: string | string[] | null;
    onSelectDay?: (day: TDayObject) => void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
