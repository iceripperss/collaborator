import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./ticket/reducer";
export var store = configureStore({
    reducer: {
        tickets: ticketsReducer,
    },
});
//# sourceMappingURL=store.js.map