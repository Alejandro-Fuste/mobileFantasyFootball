import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import LeagueScreen from "./src/screens/LeagueScreen";
import TeamScreen from "./src/screens/TeamScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="Leagues" component={LeagueScreen} />
        <Stack.Screen name="Team" component={TeamScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
