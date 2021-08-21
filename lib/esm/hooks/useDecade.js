import * as React from 'react';
export var getDecade = function (year) {
    var decade = [];
    var firstYear = year - (year % 10);
    var lastYear = firstYear + 9;
    for (var i = firstYear; i <= lastYear; i++) {
        decade.push(i);
    }
    return decade;
};
export var useDecade = function (currentYear) {
    var _a = React.useState(function () { return getDecade(currentYear); }), decade = _a[0], setDecade = _a[1];
    var handlerSwitchDecade = React.useCallback(function (direction) {
        if (direction === 'prev') {
            setDecade(getDecade(decade[0] - 10));
            return;
        }
        setDecade(getDecade(decade[0] + 10));
    }, [decade]);
    return { decade: decade, switchDecade: handlerSwitchDecade };
};
export default useDecade;
