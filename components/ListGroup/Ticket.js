import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import airlineCo from "./airlineCo.png";
import classes from "./ListGroup.module.scss";
export var Ticket = function (_a) {
    var _b = _a.ticket, details = _b.details, price = _b.price;
    var priceWithCurrency = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(price);
    return (_jsxs("div", { className: classes.ticket, children: [_jsxs("div", { className: classes.ticket__header, children: [_jsx("div", { children: priceWithCurrency }), _jsx("img", { className: classes.ticket__header__image, src: airlineCo, alt: "airlineCo" })] }), _jsx("div", { className: classes.ticket__details, children: details.map(function (_a) {
                    var route = _a.route, time_from = _a.time_from, time_to = _a.time_to, duration = _a.duration, transfers = _a.transfers;
                    return (_jsxs("div", { className: classes.ticket__details__box, children: [_jsxs("div", { className: classes.ticket__details__box__column, children: [_jsx("div", { children: route }), _jsxs("time", { dateTime: time_from, children: [time_from, " - ", time_to] })] }), _jsxs("div", { className: classes.ticket__details__box__column, children: [_jsx("div", { children: "\u0412 \u0434\u043E\u0440\u043E\u0437\u0456" }), _jsx("time", { dateTime: duration, children: duration })] }), _jsxs("div", { className: classes.ticket__details__box__column, children: [_jsx("div", { children: (transfers === null || transfers === void 0 ? void 0 : transfers.length) ? "".concat(transfers.length, " \u041F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0438") : "Без пересадок" }), _jsx("div", { children: transfers === null || transfers === void 0 ? void 0 : transfers.join(", ") })] })] }, route));
                }) })] }));
};
//# sourceMappingURL=Ticket.js.map