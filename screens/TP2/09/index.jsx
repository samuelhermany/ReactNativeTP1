import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './views/homeScreen';
import DetailsScreen from './views/detailsScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer independent>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />          
        </Stack.Navigator>
      </NavigationContainer>
    );
}
