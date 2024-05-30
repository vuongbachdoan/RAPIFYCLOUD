import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, Platform } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabTwoScreen from "@/app/(tabs)/explore";
import HomeScreen from "@/app/(tabs)";

const Drawer = createDrawerNavigator();

export default function TabLayout(): React.ReactNode {
  const colorScheme = useColorScheme();

  return Platform.OS !== "web" ? (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "dark"].icon,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].blueNavy,
          borderWidth: 0
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "business" : "business-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  ) : (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        overlayColor: Colors["light"].dark50,
        drawerStyle: {
          backgroundColor: Colors["dark"].blueNavy,
        },
        headerStyle: {
          backgroundColor: Colors["light"].blueNavy,
          borderWidth: 0
        },
        drawerLabelStyle: {
          color:  Colors["dark"].text
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={({ route }) => ({
          headerTintColor: Colors["dark"].text,
          drawerIcon: () => (
            <Image
              source={require("@/assets/images/home.png")}
              style={{ alignSelf: "center", width: 24, height: 24 }}
            />
          ),
        })}
      />
      <Drawer.Screen
        name="Jobs"
        component={TabTwoScreen}
        options={({ route }) => ({
          drawerIcon: () => (
            <Image
              source={require("@/assets/images/explore.png")}
              style={{ alignSelf: "center", width: 24, height: 24 }}
            />
          ),
        })}
      />
    </Drawer.Navigator>
  );
}
