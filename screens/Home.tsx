import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from 'navigators/RootNavigator';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Home = () => {
    const { navigate } = useNavigation<StackNavigation>();
    return (
        <View style={styles.container}>
            <Text>home</Text>

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