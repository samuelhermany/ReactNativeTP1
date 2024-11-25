import { ScrollView , StyleSheet } from 'react-native';
import Item from './item';
import { lista } from './data';

export default function App() {
   return (
      <ScrollView  style={styles.container}>
         {lista && lista.map((item, index) => (
            <Item 
            key={index}
            price={`R$ ${item.price}`}
            title={item.title}
            />
         ))}
      </ScrollView>
   )
}


const styles = StyleSheet.create({
   container: {
      flex: 1,   
   },    
});