import { useAuth } from "@clerk/expo";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace("/sign-in");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <View className="p-4">
      <Text>profile</Text>

      <TouchableOpacity
        onPress={handleSignOut}
        className="w-full bg-blue-600 py-4 items-center mb-4 rounded-xl text-white my-3"
      >
        <Text className="text-white text-base font-bold">Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
