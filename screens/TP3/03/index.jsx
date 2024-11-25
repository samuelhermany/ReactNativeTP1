import { View, FlatList , StyleSheet } from 'react-native';
import Item from './item';
import { lista } from './data';

export default function App() {
   return (
      <View style={styles.container}>
         <FlatList
            data={lista}            
            renderItem={({ item }) => (
               <Item 
                  title={item.title} 
                  price={`R$ ${item.price}`}
               />
            )}
         />
      </View>
   )
}


const styles = StyleSheet.create({
   container: {
      flex: 1,   
   },    
});