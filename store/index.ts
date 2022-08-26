import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-reducer";
import { createWrapper } from "next-redux-wrapper";


export const store = configureStore({
    reducer:{
        [cartSlice.name]: cartSlice.reducer
    },
    devTools: true
})

export type AppStore = typeof store;

export type AppState = ReturnType<AppStore["getState"]>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
// export const wrapper = createWrapper<AppStore>(store);
