import { Text, View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container} className="container text-blue-500">
      <Text className="text-3xl font-bold text-blue-500">Restaurant</Text>
      <Text className="text-2xl font-bold text-blue-500">Nativewind</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
