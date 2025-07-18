import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function SignUp() {

  const { name } = useLocalSearchParams()

  function goBack() {
    if (!router.canGoBack()) {
      router.navigate("/");
    } else {
      router.back();
    }
  }
  return (
    <View style={styles.container}>
      <Text>{name}</Text>

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
    backgroundColor: "#CECECE",
    gap: 32
  },
  back: {
    fontSize: 16,
    fontWeight: "bold",
  },
});