import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();

  console.log("isSignIn", isSignedIn);
  console.log("isLoaded", isLoaded);

  if (!isLoaded) return null;

  if (isSignedIn) return <Redirect href={"/(root)/(tabs)"} />;

  return <Redirect href={"/sign-in"} />;
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
