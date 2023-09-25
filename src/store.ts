import bankReducer from "./reducers/bankReducer";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
    reducer: bankReducer
})
export default store;