import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WalletValue {
    amount: number;
}

const initState: WalletValue = {
    amount: 20000
}

const walletSlice = createSlice({
    name: 'Wallet Slice',
    initialState: initState,
    reducers: {
        add_expense: (state, action: PayloadAction<number> ) => {
            state.amount -= action.payload
        },
    }
})

export const {add_expense} = walletSlice.actions;

export default walletSlice.reducer;