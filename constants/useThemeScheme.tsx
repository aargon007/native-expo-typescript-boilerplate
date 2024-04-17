import { useColorScheme } from "react-native";

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export function useThemeScheme() {
    const deviceTheme = useColorScheme();

    const theme = {
        light: {
            text: "#000",
            background: "#090909",
            tint: tintColorLight,
            tabIconDefault: "#ccc",
            tabIconSelected: tintColorLight,
        },
        dark: {
            text: "#fff",
            background: "#090909",
            tint: tintColorDark,
            tabIconDefault: "#ccc",
            tabIconSelected: tintColorDark,
        },
    };

    return deviceTheme === 'dark' ? theme.dark : theme.light;
};