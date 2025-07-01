import { configureStore } from "@reduxjs/toolkit";
import walletSlice from "./slices/walletSlice";

export const store = configureStore({
    reducer: {
        wallet: walletSlice
    }
})

export type WalletState = ReturnType<typeof store.getState>;
export type WalletDispatch = typeof store.dispatch;