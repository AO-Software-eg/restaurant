import { Stack } from "expo-router";
import { View } from "react-native";
import "./global.css"
import Nav from "../components/ui/Nav";

export default function RootLayout() {
  return (
    <View className="flex-1">
      <Stack screenOptions={{ headerShown: false }} />

      <Nav />
    </View>
  );
}
