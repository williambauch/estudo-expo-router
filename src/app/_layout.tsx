import { Text, View, StyleSheet } from "react-native";
import { Slot } from "expo-router";

export default function Layout() {
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Text style={styles.title}>My App</Text>
            </View>
            
            <Slot />

            <View style={styles.footer} >
                <Text style={styles.title}>Rodape</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    header: {
        width: "100%",
        height: 70,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        width: "100%",
        height: 40,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "#FFF",        
    }
});