import * as React from 'react';
interface Props {
    activeView: string | null;
    monthTitles: string[];
    onClick(index: number): void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
