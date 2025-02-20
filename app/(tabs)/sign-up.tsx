import {
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Mockup from "@/assets/images/signIn.png";
import GoogleIcon from "@/assets/images/google-icon.jpg";
import { Link } from "expo-router";
import { useState, useEffect, useRef } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SignInScreen() {
  const [eye, setEye] = useState(true);
  const Navigate = useRouter();

  return (
    <SafeAreaView
      className="flex-1 bg-white"
      onTouchStart={() => Keyboard.dismiss()}
    >
      <View className="flex items-center justify-center w-full h-full">
        <Image source={Mockup} className="w-[200px] h-[200px] object-center" />
        <Text className="text-xl">
          Welcome to <Text className="font-bold text-red-600">Zoox</Text>
        </Text>
        <TextInput
          placeholder="Username"
          inputMode="text"
          className="border-b py-2 w-[65%] mt-4 px-2"
        />
        <TextInput
          placeholder="Email Address"
          inputMode="email"
          className="border-b py-2 w-[65%] mt-4 px-2"
        />
        <View className="border-b w-[65%] mt-4 flex flex-row items-center px-1">
          <TextInput
            placeholder="Password"
            className="w-[90%] py-2"
            secureTextEntry={eye}
            inputMode="text"
          />
          <FontAwesome
            name={eye === true ? `eye-slash` : `eye`}
            onPress={() => setEye(!eye)}
            size={14}
          />
        </View>
        <View className="content-[''] w-10 h-10 rounded-full bg-red-500 backdrop-blur absolute top-80 -right-4"></View>
        <View className="content-[''] w-8 h-8 rounded-full bg-red-500 backdrop-blur absolute top-96 -left-4"></View>
        <TouchableOpacity
          activeOpacity={0.8}
          className="w-[65%] flex items-center rounded-md mt-4 py-1 font-semibold bg-red-600 border-2 border-red-700"
          onPress={() => Navigate.push("/pages")}
        >
          <Text className="text-xl font-semibold text-white">Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          className="w-[65%] flex items-center justify-center rounded-md mt-4 py-1 font-semibold bg-white border-2 border-red-700"
        >
          <Image source={GoogleIcon} className="w-[25px] h-[25px]" />
        </TouchableOpacity>
        <Text className="mt-4">
          Already Have Account ?{" "}
          <Link href="/" className="font-bold text-red-500">
            Sign In
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}
