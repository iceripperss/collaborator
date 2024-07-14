import { createSlice } from "@reduxjs/toolkit";
import { getMinutesDiff, getPricesDiff, getTransfersDiff } from "@redux/ticket/helpers";
var initialState = { data: [], filteredData: [], more: 1 };
export var ticketsSlice = createSlice({
    name: "tickets",
    initialState: initialState,
    reducers: {
        setTickets: function (state, _a) {
            var payload = _a.payload;
            state.data = payload;
            state.filteredData = payload;
        },
        filterByTransfers: function (state, _a) {
            var payload = _a.payload;
            if (!payload.length) {
                state.filteredData = state.data;
            }
            else {
                state.filteredData = state.data.filter(function (ticket) {
                    var transfers = ticket.details[0].transfers;
                    if (transfers) {
                        var transfersLength = transfers.length;
                        return payload.includes(transfersLength);
                    }
                    return payload.includes(0);
                });
            }
        },
        sortByPrice: function (state) {
            state.filteredData = state.filteredData.sort(getPricesDiff);
            state.more = 1;
        },
        sortByDuration: function (state) {
            state.filteredData = state.filteredData.sort(getMinutesDiff);
            state.more = 1;
        },
        sortByOptimal: function (state) {
            state.filteredData = state.filteredData.sort(function (current, next) {
                var minutesDiff = getMinutesDiff(current, next);
                if (minutesDiff !== 0)
                    return minutesDiff;
                var transfersDiff = getTransfersDiff(current, next);
                if (transfersDiff !== 0)
                    return transfersDiff;
                return getPricesDiff(current, next);
            });
            state.more = 1;
        },
        more: function (state) {
            state.more += 1;
        },
    },
});
export var ticketsActions = ticketsSlice.actions;
export default ticketsSlice.reducer;
//# sourceMappingURL=reducer.js.map