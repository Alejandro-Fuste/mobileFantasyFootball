import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LeagueScreen from "./src/screens/LeagueScreen";
import TeamScreen from "./src/screens/TeamScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
          name="Team"
          component={TeamScreen}
          options={{
            tabBarLabel: "Team",
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
