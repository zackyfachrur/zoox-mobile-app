import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, animation: "fade", lazy: true }}>
      <Tabs.Screen
        name="index"
        options={{ title: "Sign In", tabBarStyle: { display: "none" } }}
      />
      <Tabs.Screen
        name="sign-up"
        options={{ title: "Sign Up", tabBarStyle: { display: "none" } }}
      />
    </Tabs>
  );
}
