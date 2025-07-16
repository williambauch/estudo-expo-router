import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router, Link } from "expo-router";


export default function Config() {


    return (
        <View>
            <Text style={styles.title}>Configuração</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 32
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000",
    }
});