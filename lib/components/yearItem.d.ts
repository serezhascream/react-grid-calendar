import * as React from 'react';
interface Props {
    year: number;
    isActive?: boolean;
    classPrefix?: string | string[] | null;
    onClick(year: number): void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
