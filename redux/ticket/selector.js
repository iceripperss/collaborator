import { useSelector } from "react-redux";
export var useTickets = function () {
    return useSelector(function (state) { return ({
        tickets: state.tickets.filteredData.slice(0, state.tickets.more * 5),
        isMore: state.tickets.filteredData.length > state.tickets.more * 5,
    }); });
};
//# sourceMappingURL=selector.js.map