import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
   
      <Link href="/" style={styles.back}>
        Voltar
      </Link>
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