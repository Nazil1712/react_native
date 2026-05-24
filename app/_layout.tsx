// import { Stack } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        <Text>Hello World</Text>

        <TextInput
          placeholder="Search City"
          placeholderTextColor={"#999"}
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            padding: 10,
            marginTop: 12,
          }}
        />

        <TouchableOpacity
          onPress={() => alert("Searching...")}
          style={{
            marginTop: 12,
            backgroundColor: "#8caaea",
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Search</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
