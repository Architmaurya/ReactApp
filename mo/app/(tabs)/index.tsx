import { Text, View ,Image, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { Link, useRouter } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";

// ✅ Move this outside the component to prevent re-creation
const fetchLatestMovies = () => fetchMovies({ query: '' });

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError
  } = useFetch(fetchLatestMovies); // ✅ use stable function reference

  return (
    <View className="flex-1 bg-primary ">
      <Image source={images.bg} className="absolute w-full z-0"/>

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-24 mb-5 mx-auto"/>

        {moviesLoading ? (
          <ActivityIndicator
            size='large'
            color='#000ff'
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text>Error: {moviesError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movies "
            />
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>
              <FlatList
               data={movies}
               renderItem={({item})=>(
                <Text className="text-white
                text-sm">{item.title}</Text>
               )}
              keyExtractor={(item)=>item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent:'flex-start',
                gap:20,
                paddingRight:5,
                marginBottom:10

              }}
              
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
