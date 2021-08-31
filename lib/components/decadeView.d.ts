import * as React from 'react';
interface Props {
    decade: number[];
    activeView: string | null;
    activeYear?: number | null;
    classPrefix?: string | string[] | null;
    onClick(year: number): void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
