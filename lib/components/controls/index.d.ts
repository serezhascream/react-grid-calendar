import * as React from 'react';
import { TSwitchDirection, TYearAndMonth } from '../../types';
interface Props {
    active: TYearAndMonth;
    activeView: string;
    monthTitles: string[];
    classPrefix?: string | string[] | null;
    onSwitchDirection: TSwitchDirection;
    onSwitchView(view: string): void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
