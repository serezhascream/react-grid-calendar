import * as React from 'react';
interface Props {
    direction: 'prev' | 'next';
    classPrefix?: string | string[] | null;
    activeView: string;
    onClick: (direction: string) => void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
