// app/(tabs)/modal.tsx
import { useRouter } from "expo-router";
import { Button, ScrollView, StyleSheet, Text } from "react-native";

export default function Modal1Screen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>모달1 화면입니다!</Text>
      <Button title="닫기" onPress={() => router.back()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
