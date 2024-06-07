import type { TUser } from "@/types/user";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type TState = {
	user: null | TUser
}
const initialState: TState = {
	user: null
};

//carts slice
export const accountSlice = createSlice({
	name: "account",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<null | TUser>) => {
			state.user = action.payload;
		},
	},
});

// Action creators are automatically generated for each case reducer function
export const {
	setUser
} = accountSlice.actions;

export default accountSlice.reducer;