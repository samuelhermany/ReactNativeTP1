import { View, StyleSheet } from 'react-native';
import { Item } from './item';
import { perguntas } from './data';

export default function App() {
    return (
        <View style={styles.container}>
            <Item  perguntas={perguntas}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingVertical: 4,
     paddingHorizontal: 8,
     backgroundColor: '#fff',
    },
  });