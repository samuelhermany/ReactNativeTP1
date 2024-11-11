import { View, StyleSheet } from 'react-native';
import Item from './item';
import { lista } from './data';

export default function App() {
    return (
      <View style={styles.container}>
        {lista && lista.map((item, index) => (
          <Item 
          key={index}
          price={`R$ ${item.price}`}
          title={item.title}
          styles={styles.item}  
          />
        ))}
      </View>
    )
}


const styles = StyleSheet.create({
  container: {
   flex: 1,   
   justifyContent: 'space-between'
  },  
  item: {
    paddingHorizontal:10,
  }
});