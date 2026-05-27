import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (isSignedIn) return <Redirect href={"/(root)/(tabs)"} />;

  return <Redirect href={"/(auth)/sign-in"} />;
}

/*
export default function Index() {
   return (
    <SafeAreaView>
    <Text>Hello World 123</Text>
    </SafeAreaView>
  }
); */

/* import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}
 */
