import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, animation: "fade" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Homes",
          tabBarIcon: () => (
            <FontAwesome name="amazon" size={32} color={"black"} />
          ),
        }}
      />
      {/* <Tabs.Screen name="sign-up" options={{ title: "Sign Up" }} /> */}
    </Tabs>
  );
}
