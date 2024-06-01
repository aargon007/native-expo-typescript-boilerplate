import { useNavigation } from '@react-navigation/native';
import { useThemeScheme } from '@/constants/useThemeScheme';
import { type StackNavigation } from '@/navigators/RootNavigator';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Path, Svg } from 'react-native-svg';

const Home = () => {
    const { navigate } = useNavigation<StackNavigation>();
    const colors = useThemeScheme();

    return (
        <View style={styles.container}>
            <Svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none">
                <Path d="M12.659 11.2085C12.3178 11.2085 11.961 11.3232 11.7006 11.5832C11.1799 12.1045 11.1799 12.9792 11.7006 13.5005L20.0756 21.8752L11.7006 30.2498C11.1799 30.7712 11.1799 31.6458 11.7006 32.1672C12.2214 32.6871 13.0966 32.6871 13.6174 32.1672L21.9923 23.7925L30.3672 32.1672C30.888 32.6871 31.7632 32.6871 32.284 32.1672C32.8047 31.6458 32.8047 30.7712 32.284 30.2498L23.909 21.8752L32.284 13.5005C32.8047 12.9792 32.8047 12.1045 32.284 11.5832C32.0236 11.3232 31.6667 11.2085 31.3256 11.2085C30.9844 11.2085 30.6278 11.3232 30.3672 11.5832L21.9923 19.9578L13.6174 11.5832C13.357 11.3232 13.0002 11.2085 12.659 11.2085Z" fill={colors.text} />
            </Svg>

            <Pressable
                style={styles.buttonStyle}
                onPress={() => navigate("Profile")}
            >
                <Text style={styles.btnText}>Move screen</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    buttonStyle: {
        height: 45,
        width: "100%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#004944",
        borderRadius: 10,
    },
    btnText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
    },
})

export default Home;