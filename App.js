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
          tabBarLabel: "Leagues",
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="list-circle"
                size={24}
                color={tabInfo.focused ? "#000000" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Players"
        component={PlayersScreen}
        options={{
          tabBarLabel: "Players",
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="people-circle-outline"
                size={24}
                color={tabInfo.focused ? "#000000" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Draft"
        component={DraftScreen}
        options={{
          tabBarLabel: "Draft",
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="american-football"
                size={24}
                color={tabInfo.focused ? "#000000" : "#8e8e93"}
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
    <Stack.Navigator>
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
