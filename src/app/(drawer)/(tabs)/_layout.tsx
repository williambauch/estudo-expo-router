import { Tabs } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"


export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false
        }}>
            <Tabs.Screen name="index" options={{
                tabBarIcon: ({ color, size }) => (<MaterialIcons name="list" size={size} color={color} />),
                tabBarLabel: "Produtos"
            }} />

            <Tabs.Screen name="order" options={{
                tabBarIcon: ({ color, size }) => (<MaterialIcons name="shopping-bag" size={size} color={color} />),
                tabBarLabel: "Pedido"
            }} />

            <Tabs.Screen name="product" options={{
                tabBarButton: () => null
            }} />

        </Tabs>
    )
}