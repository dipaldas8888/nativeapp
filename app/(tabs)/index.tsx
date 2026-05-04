import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => router.push("/details")} />
    </View>
  );
}
