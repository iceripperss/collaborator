import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { ticketsActions } from "@redux/ticket/reducer";
import { Sort } from "@components/ListGroup/Sort";
import { Ticket } from "@components/ListGroup/Ticket";
import { Filters } from "@components/ListGroup/Filters/Filters";
import { useTickets } from "@redux/ticket/selector";
import classes from "./ListGroup.module.scss";
var List = function () {
    var dispatch = useDispatch();
    var _a = useTickets(), tickets = _a.tickets, isMore = _a.isMore;
    var handleMore = function () { return dispatch(ticketsActions.more()); };
    return (_jsxs("article", { className: classes.list, children: [_jsx(Sort, {}), tickets.map(function (ticket) { return (_jsx(Ticket, { ticket: ticket }, JSON.stringify(ticket))); }), _jsx("button", { disabled: !isMore, onClick: handleMore, className: clsx(classes.list__button, !isMore && classes.list__button_disabled), type: "button", children: isMore ? "Показати ще 5 квитків" : "Більше квитків відсутні" })] }));
};
export var ListGroup = function () {
    return (_jsxs("main", { className: classes.main, children: [_jsx(Filters, {}), _jsx(List, {})] }));
};
//# sourceMappingURL=ListGroup.js.map