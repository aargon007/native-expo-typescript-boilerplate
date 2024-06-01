import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type TState = {
	order: number;
}
const initialState: TState = {
	order: 0,

};

// onboarding slice
export const onboardingSlice = createSlice({
	name: "onboarding",
	initialState,
	reducers: {
		incrementOnboardingOrder: (state) => {
			state.order = state.order + 1;
		},
		decrementOnboardingOrder: (state) => {
			state.order = state.order - 1;
		}
	},
});

// Action creators are automatically generated for each case reducer function
export const { incrementOnboardingOrder, decrementOnboardingOrder } = onboardingSlice.actions;

export default onboardingSlice.reducer;