import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router, Link } from "expo-router";


export default function Index() {

    function signUp() {
        router.navigate("/sign-up")
    }
    function signIn() {
        router.navigate('/(drawer)')
    }
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={signIn}>
                <Text style={styles.label}>Entrar</Text>
            </TouchableOpacity>

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
        justifyContent: "center",
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
    }
});