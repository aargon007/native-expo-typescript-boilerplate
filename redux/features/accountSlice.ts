import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TState = {
	language : "en" | "fr"
}
const initialState:TState = {
	language: "en",
};

//carts slice
export const accountSlice = createSlice({
	name: "account",
	initialState,
	reducers: {
		setLanguage: (state, action: PayloadAction<"en" | "fr">) => {
			state.language = action.payload;
		},
	},
});

// Action creators are automatically generated for each case reducer function
export const { setLanguage } = accountSlice.actions;

export default accountSlice.reducer;