import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LeagueScreen from "./src/screens/LeagueScreen";
import PlayersScreen from "./src/screens/PlayersScreen";
import DraftScreen from "./src/screens/DraftScreen";
import TeamScreen from "./src/screens/TeamScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto"></StatusBar>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#8e8e93",
        }}
      >
        <Tab.Screen
          name="Leagues"
          component={LeagueScreen}
          options={{
            tabBarLabel: "League",
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
    </NavigationContainer>
  );
}
