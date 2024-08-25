import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

const Bookmark = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="flex items-center justify-center h-full">
        <Text className="text-white text-lg font-pmedium">
          No bookmarked videos
        </Text>

        <TouchableOpacity
          className="border-2 rounded-lg border-black-100 p-2 flex-row gap-2 items-center justify-center mt-4"
          onPress={() => router.push("/home")}
        >
          <Image
            source={icons.bookmark}
            className="w-10 h-10 "
            resizeMode="contain"
          />

          <Text className="text-white text-sm font-pregular">
            Bookmark your favorite videos
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;
