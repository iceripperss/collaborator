export var getMinutesFromDetails = function (ticket) {
    return ticket.details.reduce(function (sum, detail) { return sum + getMinutesFromDuration(detail.duration); }, 0);
};
export var getMinutesFromDuration = function (duration) {
    var durationArray = duration.split(":");
    return parseInt(durationArray[0], 10) * 60 + parseInt(durationArray[1], 10);
};
export var getTotalTransfers = function (ticket) {
    return ticket.details.reduce(function (total, detail) { return total + (detail.transfers ? detail.transfers.length : 0); }, 0);
};
export var getTransfersDiff = function (current, next) { return getDiff({ current: current, next: next, func: getTotalTransfers }); };
export var getPricesDiff = function (current, next) { return current.price - next.price; };
export var getMinutesDiff = function (current, next) { return getDiff({ current: current, next: next, func: getMinutesFromDetails }); };
export var getDiff = function (_a) {
    var current = _a.current, next = _a.next, func = _a.func;
    var currentValue = func(current);
    var nextValue = func(next);
    return currentValue - nextValue;
};
//# sourceMappingURL=helpers.js.map