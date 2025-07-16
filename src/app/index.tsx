import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router, Link } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer"

export default function Index() {

    function signUp() {
        router.navigate("/sign-up");
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <DrawerToggleButton></DrawerToggleButton>
            </View>
            <TouchableOpacity style={styles.button} onPress={signUp}>
                <Text style={styles.label}>Criar Conta</Text>
            </TouchableOpacity>

            <Link href={{ pathname: "/sign-up", params: { name: "William Bauch" } }}> Enviar Paramentros</Link>

            <Link href={{ pathname: "/product/[id]", params: { id: "32" } }}> Abrir Produto</Link>

            <Link href={{ pathname: "/home", params: { id: "" } }}> Ir para a Home</Link>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        alignItems: "center",
        gap: 32
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    button: {
        backgroundColor: "#000000",
        paddingHorizontal: 32,
        paddingVertical: 10,
        borderRadius: 5,
    },
    header: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-end",
    }
});