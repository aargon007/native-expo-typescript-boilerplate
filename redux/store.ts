import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './features/accountSlice';
import onboardingReducer from './features/onBoardingSlice';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const accountPersistConfig = {
    key: 'account',
    storage: AsyncStorage
};
const accountPersistReducer = persistReducer(accountPersistConfig, accountReducer)

export const store = configureStore({
    reducer: {
        // account
        account: accountPersistReducer,
        // onboarding
        onboarding: onboardingReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);