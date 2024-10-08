import * as React from 'react';
import Home from '@/screens/Home';
import Profile from '@/screens/Profile';
import { type NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type ScreenNames = ['Home', 'Profile'];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                autoHideHomeIndicator: true,
            }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerBackTitle: 'Welcome',
                    headerBackTitleStyle: { fontSize: 20 },
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    );
};

export default RootNavigator;
