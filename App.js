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
import LogoHeader from "./src/components/LogoHeader";

import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Leagues"
        component={StackNavigator}
        options={{
          tabBarTestID: "Leagues",
          tabBarStyle: {
            backgroundColor: "#122d42",
            borderTopColor: "#30D5C8",
          },
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
          tabBarTestID: "Players",
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
          tabBarTestID: "Draft",
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
        headerStyle: {
          backgroundColor: "#122d42",
        },
        headerShadowVisible: false,
        headerTintColor: "#30D5C8",
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <LogoHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="League"
        component={LeagueScreen}
        options={{
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="Team"
        component={TeamScreen}
        options={{
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style={"auto"}></StatusBar>
      <TabNavigator />
    </NavigationContainer>
  );
}
