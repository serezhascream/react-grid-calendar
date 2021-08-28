import * as React from 'react';
interface Props {
    activeView: string | null;
    monthTitles: string[];
    classPrefix?: string | string[] | null;
    onClick(index: number): void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
