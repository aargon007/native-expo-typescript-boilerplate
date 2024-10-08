import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './features/accountSlice';
import onboardingReducer from './features/onBoardingSlice';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        // account
        account: accountReducer,
        // onboarding
        onboarding: onboardingReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
