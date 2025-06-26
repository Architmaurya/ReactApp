import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-4xl font-bold text-gray-800">Welcome</Text>

      <Link href="/onboarding" className="text-blue-600 mt-4 text-lg underline">
        Go to Onboarding
      </Link>

      <Link href="/movie/avengers" className="text-blue-600 mt-2 text-lg underline">
        View Avengers
      </Link>
    </View>
  );
}
