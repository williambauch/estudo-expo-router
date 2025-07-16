import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function Product() {

  const { id } = useLocalSearchParams()

  function goBack() {
    if (!router.canGoBack()) {
      router.navigate("/");
    } else {
      router.back();
    }
  }
  return (
    <View style={styles.container}>
      <Text>Código do Produto é {id}</Text>

      <TouchableOpacity onPress={goBack}>
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
    backgroundColor: "#CCCCCC",
    gap: 32
  },
  back: {
    fontSize: 16,
    fontWeight: "bold",
  },
});