import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
     
      <Link href="/sign-up" style={styles.new}>
        Criar Conta
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  new: {
    fontSize: 16,
    fontWeight: "bold",
  },
});