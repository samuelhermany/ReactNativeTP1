import { NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "./screens/Home/index.jsx";
import TP1Stack from "./screens/Tabs/TP1Stack.jsx";
import TP2Stack from "./screens/Tabs/TP2Stack.jsx";
import TP3Stack from "./screens/Tabs/TP3Stack.jsx";
import { AntDesign } from "@expo/vector-icons"; 

import { StyleSheet } from 'react-native';

const tab = createBottomTabNavigator()

function TabGroup() {
  return (
    <tab.Navigator>
      <tab.Screen name="Home" component={Home} options={{tabBarIcon: () => (
            <AntDesign name="home" style={styles.button}/>),}}
      />
      <tab.Screen name="TP1" component={TP1Stack} 
      options={{tabBarIcon: () => (
        <AntDesign name="caretup" style={styles.button} />),}}
      />
      <tab.Screen name="TP2" component={TP2Stack} 
      options={{tabBarIcon: () => (
        <AntDesign name="caretup" style={styles.button} />),}}
      />
      <tab.Screen name="TP3" component={TP3Stack} 
      options={{tabBarIcon: () => (
        <AntDesign name="caretup" style={styles.button} />),}}
      />
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

const styles = StyleSheet.create({ 
  button: {
    color: '#000',
    fontSize: 24,      
  },  
})