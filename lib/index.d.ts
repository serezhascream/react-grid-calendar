import * as React from 'react';
import './styles/index.scss';
interface Props {
    firstDayIsMonday?: boolean;
    date?: Date | null;
    markers?: number[];
    locale?: string;
    classPrefix?: string | string[] | null;
    onSelectDay?: (day: Date | null) => void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
