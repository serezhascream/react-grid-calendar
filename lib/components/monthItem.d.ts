import * as React from 'react';
interface Props {
    title: string;
    index: number;
    classPrefix?: string | string[] | null;
    isActive?: boolean;
    onClick(index: number): void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
