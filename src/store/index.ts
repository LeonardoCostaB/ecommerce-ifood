import { configureStore } from "@reduxjs/toolkit";
import productReduce from "./module/product-minicart";

export const store = configureStore({
   reducer: { productReduce }
});

export type RootStore = ReturnType<typeof store.getState>;
