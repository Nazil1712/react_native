import { useSignIn } from "@clerk/expo";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignIn() {
  const { signIn, errors, fetchStatus } = useSignIn();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const isLoading = fetchStatus == "fetching";

  const onSignInPress = async () => {
    const { error } = await signIn.password({
      emailAddress: email,
      password,
    });

    if (error) {
      // console.log("Error", error.message);
      // console.error(JSON.stringify(error,null,2))
      alert(error.message);
      return;
    }

    if (signIn.status == "complete") {
      await signIn.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) {
            console.log(session?.currentTask);
            return;
          }

          const url = decorateUrl("/");
          router.replace(url as any);
        },
      });
    } else if (signIn.status === "needs_second_factor") {
      await signIn.mfa.sendPhoneCode();
    } else if (signIn.status === "needs_client_trust") {
      const emailCodeFactor = signIn.supportedSecondFactors.find(
        (factor) => factor.strategy == "email_code",
      );

      if (emailCodeFactor) {
        await signIn.mfa.sendEmailCode();
      }
    } else {
      console.error("Sign In attempt not complete: ", signIn);
    }

    // if (!error) await signUp.verifications.sendEmailCode();
  };

  const onVerifyPress = async () => {
    await signIn.mfa.verifyEmailCode({
      code,
    });

    if (signIn.status == "complete") {
      await signIn.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) {
            console.log(session?.currentTask);
            return;
          }

          const url = decorateUrl("/");
          router.replace(url as any);
        },
      });
    }
  };

  if (signIn.status == "needs_client_trust") {
    return (
      <View className="flex-1 justify-center px-6 py-12">
        <View className="w-full flex-row justify-center">
          <Image
            source={require("../../assets/images/kribb.png")}
            style={{ width: 100, height: 100 }}
            className="mb-8"
            resizeMode="contain"
          />
        </View>

        <Text className="text-3xl font-bold text-gray-800 mb-2">
          Verify your account
        </Text>
        <Text className="text-gray-500 mb-8">We sent a code to {email}</Text>

        <View className="flex gap-6 mb-4">
          <TextInput
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3"
            placeholder="Enter verification code"
            placeholderTextColor={"#9CA3AF"}
            keyboardType="number-pad"
            value={code}
            onChangeText={setCode}
          />
          {errors.fields.code && (
            <Text className="text-red-500 mb-4">
              {errors.fields.code.message}
            </Text>
          )}

          <TouchableOpacity
            onPress={onVerifyPress}
            disabled={isLoading}
            className="w-full bg-blue-600 py-4 items-center mb-4 rounded-xl text-white"
          >
            {isLoading ? (
              <ActivityIndicator color={"white"} />
            ) : (
              <Text className="text-white text-base font-bold">Verify</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            className="py-2"
            onPress={() => signIn.mfa.sendEmailCode()}
          >
            <Text className="text-blue-600">I need a new code</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-white"
      keyboardShouldPersistTaps="handled"
    >
      <View className="flex-1 justify-center px-6 py-12">
        <View className="w-full flex-row justify-center">
          <Image
            source={require("../../assets/images/kribb.png")}
            style={{ width: 100, height: 100 }}
            className="mb-8"
            resizeMode="contain"
          />
        </View>

        <View>
          <Text className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back
          </Text>
          <Text className="text-gray-500 mb-8">Sign in to your account</Text>
        </View>

        <TextInput
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4"
          placeholder="Email address"
          placeholderTextColor={"#9CA3AF"}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.fields.identifier && (
          <Text className="text-red-500 mb-4">
            {errors.fields.identifier.message}
          </Text>
        )}

        <TextInput
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4"
          placeholder="password"
          placeholderTextColor={"#9CA3AF"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.fields.password && (
          <Text className="text-red-500 mb-4">
            {errors.fields.password.message}
          </Text>
        )}

        <TouchableOpacity
          onPress={onSignInPress}
          disabled={isLoading}
          className="w-full bg-blue-600 py-4 items-center mb-4 rounded-xl text-white"
        >
          {isLoading ? (
            <ActivityIndicator color={"white"} />
          ) : (
            <Text className="text-white text-base font-bold">Sign In</Text>
          )}
        </TouchableOpacity>

        <View className="flex flex-row justify-center gap-2">
          <Text className="text-gray-500">Don&apos;t have an account?</Text>
          <Link href={"/sign-up"}>
            <Text className="text-blue-600 font-semibold">Sign Up</Text>
          </Link>
        </View>

        {/* Clerk want you to have this <View> for their captcha verification purpose */}
        <View nativeID="clerk-captcha"></View>
      </View>
    </ScrollView>
  );
}
