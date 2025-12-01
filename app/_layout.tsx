import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true, title: "Welcome" }} />;
      <Stack.Screen name="login" options={{ headerShown: true, title: "Login" }} />;
      <Stack.Screen name="dashbord" options={{ headerShown: true, title: "Dashbord" }} />;
    </Stack>
  )
}
