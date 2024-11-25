import { View, Text, SectionList , StyleSheet } from 'react-native';
import Item from './item';
import { lista } from './data';

const category = [
   { title: "Alimentos", data: lista.filter(item => item.category === "Alimentos") },
   { title: "Higiene", data: lista.filter(item => item.category === "Higiene") },
   { title: "Limpeza", data: lista.filter(item => item.category === "Limpeza") },
 ];

export default function App() {
   return (
      <SectionList
         sections={category}
         keyExtractor={(item, index) => `${item.title}-${index}`}
         renderItem={({ item }) => (
         <Item 
            price={`R$ ${item.price}`}
            title={item.title}
         />
         )}
         renderSectionHeader={({ section: { title } }) => (
         <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
         </View>
         )}
         style={styles.container}
      />
   );
}


const styles = StyleSheet.create({
   container: {
      flex: 1,   
   },    
});