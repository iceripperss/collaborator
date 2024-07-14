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
var flights = [
    { label: "Без пересадок", value: 0 },
    { label: "1 Пересадка", value: 1 },
    { label: "2 Пересадки", value: 2 },
    { label: "3 Пересадки", value: 3 },
];
export var Filters = function () {
    var _a = React.useState([]), filters = _a[0], setFilters = _a[1];
    var dispatch = useDispatch();
    var handleFilterChange = function (e) {
        var value = Number(e.target.value);
        var allFilter = document.getElementById("allFilter");
        allFilter.checked = false;
        setFilters(e.target.checked ? __spreadArray(__spreadArray([], filters, true), [value], false) : filters.filter(function (filter) { return filter !== value; }));
    };
    var handleAllFilters = function (e) {
        return setFilters(e.target.checked ? flights.map(function (_a) {
            var value = _a.value;
            return value;
        }) : []);
    };
    useEffect(function () {
        dispatch(ticketsActions.filterByTransfers(filters));
    }, [dispatch, filters]);
    return (_jsxs("aside", { className: classes.aside, children: [_jsx("h3", { className: classes.aside__header, children: "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043E\u043A" }), _jsxs("div", { className: classes.aside__filters, children: [_jsxs("label", { className: classes.aside__filters__filter, children: [_jsx("input", { id: "allFilter", name: "all", className: classes.aside__filters__filter__input, type: "checkbox", onChange: handleAllFilters }), "\u0412\u0441\u0456"] }), flights.map(function (_a) {
                        var value = _a.value, label = _a.label;
                        return (_jsxs("label", { className: classes.aside__filters__filter, children: [_jsx("input", { name: label, checked: filters.includes(value), className: classes.aside__filters__filter__input, type: "checkbox", value: value, onChange: handleFilterChange }), label] }, label));
                    })] })] }));
};
//# sourceMappingURL=Filters.js.map