import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { Slot } from "expo-router";
import "../global.css";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <Slot />
    </ClerkProvider>
  );
}

// import { Stack } from "expo-router";
/* import { */
/*   FlatList, */
/*   Text, */
/*   TextInput, */
/*   TouchableOpacity, */
/*   View, */
/* } from "react-native"; */
/* import { SafeAreaView } from "react-native-safe-area-context"; */
/* const properties = [
  {
    id: "1",
    title: "Modern Villa",
    city: "Mumbai",
    price: "₹1.2 Cr",
  },
  {
    id: "2",
    title: "Luxury Apartment",
    city: "Delhi",
    price: "₹85 Lakh",
  },
  {
    id: "3",
    title: "Beach House",
    city: "Goa",
    price: "₹2.5 Cr",
  },
  {
    id: "4",
    title: "Penthouse Suite",
    city: "Bangalore",
    price: "₹1.8 Cr",
  },
  {
    id: "5",
    title: "Studio Flat",
    city: "Pune",
    price: "₹45 Lakh",
  },
  {
    id: "6",
    title: "Farmhouse",
    city: "Ahmedabad",
    price: "₹3.1 Cr",
  },
  {
    id: "7",
    title: "Lake View Apartment",
    city: "Udaipur",
    price: "₹95 Lakh",
  },
  {
    id: "8",
    title: "Duplex House",
    city: "Hyderabad",
    price: "₹1.4 Cr",
  },
];

export default function RootLayout() {
  return (
    <SafeAreaView>
      <View className="p-4">
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

      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={{ marginTop: 10, paddingTop: 12 }}>
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text style={{ color: "#666" }}>{item.city}</Text>
            <Text style={{ color: "#2563EB" }}>{item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
} */
