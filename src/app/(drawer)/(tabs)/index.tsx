import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'

export default function Products() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>

      <TouchableOpacity onPress={ ()=> router.navigate("/product/5222") }>
        <Text>Abrir Produto</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})