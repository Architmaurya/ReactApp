import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function MovieDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-semibold text-gray-800">
        Movie details: {id}
      </Text>
    </View>
  );
}
