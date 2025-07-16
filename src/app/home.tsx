import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router, useLocalSearchParams, Redirect } from "expo-router";

export default function Home() {

const {id} = useLocalSearchParams()

if(!id){
    return <Redirect href={"/home"} />
}

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home: {id}</Text>
            <TouchableOpacity onPress={()=>router.back()}>
                <Text style={styles.back}>
                    Voltar
                </Text>
            </TouchableOpacity>
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
    },
    back: {
      fontSize: 16,
      fontWeight: "bold",
    },
});