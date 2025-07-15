import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";

export default function SignUp() {

  function goBack() {
    router.back();
  }
  return (
    <View style={styles.container}>   
      <TouchableOpacity  onPress={goBack}>
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
  },
  back: {
    fontSize: 16,
    fontWeight: "bold",
  },
});