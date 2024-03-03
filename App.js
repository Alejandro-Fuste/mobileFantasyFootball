import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import HomeScreen from "./src/screens/HomeScreen";
import PlayersScreen from "./src/screens/PlayersScreen";
import DraftScreen from "./src/screens/DraftScreen";
import LeagueScreen from "./src/screens/LeagueScreen";
import TeamScreen from "./src/screens/TeamScreen";

import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#8e8e93",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Leagues"
        component={StackNavigator}
        options={{
          tabBarStyle: { backgroundColor: "#122d42" },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ fontSize: 10, color: focused ? "#30D5C8" : "#8e8e93" }}
            >
              Leagues
            </Text>
          ),
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="list-circle"
                size={24}
                color={tabInfo.focused ? "#30D5C8" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Players"
        component={PlayersScreen}
        options={{
          tabBarStyle: { backgroundColor: "#122d42" },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ fontSize: 10, color: focused ? "#30D5C8" : "#8e8e93" }}
            >
              Players
            </Text>
          ),
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="people-circle-outline"
                size={24}
                color={tabInfo.focused ? "#30D5C8" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Draft"
        component={DraftScreen}
        options={{
          tabBarStyle: { backgroundColor: "#122d42" },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ fontSize: 10, color: focused ? "#30D5C8" : "#8e8e93" }}
            >
              Draft
            </Text>
          ),
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="american-football"
                size={24}
                color={tabInfo.focused ? "#30D5C8" : "#8e8e93"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "",
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="League" component={LeagueScreen} />
      <Stack.Screen name="Team" component={TeamScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto"></StatusBar>
      <TabNavigator />
    </NavigationContainer>
  );
}
