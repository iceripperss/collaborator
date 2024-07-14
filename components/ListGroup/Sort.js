import { jsx as _jsx } from "react/jsx-runtime";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ticketsActions } from "@redux/ticket/reducer";
import clsx from "clsx";
import classes from "./ListGroup.module.scss";
var SortType;
(function (SortType) {
    SortType[SortType["Price"] = 0] = "Price";
    SortType[SortType["Duration"] = 1] = "Duration";
    SortType[SortType["Optimal"] = 2] = "Optimal";
})(SortType || (SortType = {}));
var buttonsMap = [
    {
        title: "Найдешевший",
        onClick: ticketsActions.sortByPrice,
        value: SortType.Price,
    },
    {
        title: "Найшвидший",
        onClick: ticketsActions.sortByDuration,
        value: SortType.Duration,
    },
    {
        title: "Оптимальний",
        onClick: ticketsActions.sortByOptimal,
        value: SortType.Optimal,
    },
];
export var Sort = function () {
    var _a = React.useState(SortType.Price), active = _a[0], setActive = _a[1];
    var dispatch = useDispatch();
    var setActiveButton = useCallback(function (value, callback) { return function () {
        setActive(value);
        dispatch(callback());
    }; }, [dispatch]);
    return (_jsx("div", { className: classes.sort, children: buttonsMap.map(function (_a) {
            var title = _a.title, onClick = _a.onClick, value = _a.value;
            return (_jsx("button", { type: "button", onClick: setActiveButton(value, onClick), className: clsx(classes.sort__button, active === value && classes.sort__button_active), children: title }, title));
        }) }));
};
//# sourceMappingURL=Sort.js.map