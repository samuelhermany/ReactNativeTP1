import { NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "./screens/Home";
import TP1Stack from "./screens/Tabs/TP1Stack";
import TP1 from "./screens/TP1";

const tab = createBottomTabNavigator()

function TabGroup() {
  return (
    <tab.Navigator>
      <tab.Screen name="Home" component={Home} />
      <tab.Screen name="Exercícios" component={TP1Stack} />
    </tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
        <TabGroup />
    </NavigationContainer>
  );
}