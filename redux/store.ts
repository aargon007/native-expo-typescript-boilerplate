import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accountSlice";
import onboardingReducer from "./features/onBoardingSlice";
import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
	reducer: {
		// account
		account: accountReducer,
		// onboarding
		onboarding: onboardingReducer
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;