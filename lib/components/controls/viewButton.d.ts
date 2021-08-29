import * as React from 'react';
interface Props {
    title: string | number;
    view: 'month' | 'year';
    targetView: 'year' | 'decade';
    classPrefix: string | string[] | null;
    onClick: (view: string) => void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
