var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ticketsActions } from "@redux/ticket/reducer";
import classes from "./Filters.module.scss";
var FlightType;
(function (FlightType) {
    FlightType[FlightType["NoTransfers"] = 0] = "NoTransfers";
    FlightType[FlightType["OneTransfer"] = 1] = "OneTransfer";
    FlightType[FlightType["TwoTransfers"] = 2] = "TwoTransfers";
    FlightType[FlightType["ThreeTransfers"] = 3] = "ThreeTransfers";
})(FlightType || (FlightType = {}));
var flightsTransfers = [
    { label: "Без пересадок", value: FlightType.NoTransfers },
    { label: "1 Пересадка", value: FlightType.OneTransfer },
    { label: "2 Пересадки", value: FlightType.TwoTransfers },
    { label: "3 Пересадки", value: FlightType.ThreeTransfers },
];
var Checkbox = function (_a) {
    var label = _a.label, value = _a.value, checked = _a.checked, onChange = _a.onChange;
    return (_jsxs("label", { className: classes.filter, children: [_jsx("input", { name: label, checked: checked, className: classes.filter__input, type: "checkbox", value: value, onChange: onChange }), label] }));
};
export var Filters = function () {
    var _a = React.useState([]), filters = _a[0], setFilters = _a[1];
    var _b = React.useState(false), all = _b[0], setAll = _b[1];
    var dispatch = useDispatch();
    var handleFilterChange = function (e) {
        var value = parseInt(e.target.value, 10);
        var changedFilters = e.target.checked ? __spreadArray(__spreadArray([], filters, true), [value], false) : filters.filter(function (filter) { return filter !== value; });
        setFilters(changedFilters);
        setAll(changedFilters.length === flightsTransfers.length);
    };
    var toggleAllFilters = function (e) {
        var changedFilters = e.target.checked ? Object.values(FlightType) : [];
        setFilters(changedFilters);
        setAll(function (prev) { return !prev; });
    };
    useEffect(function () {
        dispatch(ticketsActions.filterByTransfers(filters));
    }, [dispatch, filters]);
    return (_jsxs("aside", { className: classes.aside, children: [_jsx("h3", { className: classes.aside__header, children: "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043E\u043A" }), _jsxs("div", { className: classes.aside__filters, children: [_jsx(Checkbox, { checked: all, label: "\u0412\u0441\u0456", onChange: toggleAllFilters }), flightsTransfers.map(function (_a) {
                        var value = _a.value, label = _a.label;
                        return (_jsx(Checkbox, { checked: filters.includes(value), value: value, label: label, onChange: handleFilterChange }, label));
                    })] })] }));
};
//# sourceMappingURL=Filters.js.map