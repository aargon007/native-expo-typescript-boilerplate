import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "screens/Home";
import Profile from "screens/Profile";
import { NavigationProp } from "@react-navigation/native";

export type ScreenNames = ["Home", "Profile"];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: "Homepage",
                    headerTitleAlign: "center",
                }}
            />

            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerBackTitle: "Welcome",
                    headerBackTitleStyle: { fontSize: 20 },
                    headerTitleAlign: "center",
                }}
            />
        </Stack.Navigator>
    );
};

export default RootNavigator;