import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";

const middleware = [thunk];

export const store = () =>
  configureStore({ reducer: {}, middleware, devTools: true });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper(store);
