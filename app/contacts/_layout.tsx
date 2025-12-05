import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";

export default function ContactsLayout() {
  return (
    <Stack screenOptions={{
      headerShadowVisible: false,
      headerShown: true,
      headerTitleAlign: "center",
      headerTitleStyle: { fontWeight: "600", fontSize: 18 }
    }}>
      <Stack.Screen name="index" options={{
        title: "Contacts",
        headerRight: () => (<Ionicons name="settings" size={22} style={{ opacity: 0.6 }} />)
      }} />
    </Stack>
  );
}

