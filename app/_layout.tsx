import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShadowVisible: false,
      headerShown: true,
      headerTitleAlign: "center",
      headerTitleStyle: { fontWeight: "600", fontSize: 18 },
    }}>
      <Stack.Screen name="index" options={{ title: "Bienvenue", headerTitleAlign: "left" }} />
      <Stack.Screen name="login" options={{ title: "Connexion" }} />
      <Stack.Screen name="contacts" options={{ title: "Contacts", headerShown: false }} />
      <Stack.Screen name="dashbord" options={{
        title: "Tableau de bord",
        headerRight: () => (<Ionicons name="settings" size={22} style={{ opacity: 0.6 }} />),
      }} />
    </Stack>
  );
}

