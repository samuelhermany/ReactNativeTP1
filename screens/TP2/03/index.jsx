import { View, FlatList, StyleSheet } from 'react-native';
import Item from './item';
import { lista } from './data';

export default function App() {
  return (
    <View style={styles.container}>
    <FlatList data={lista} numColumns={2} 
      contentContainerStyle={styles.content}
      renderItem={({ item, i }) => (
        <Item 
          key={i}
          src={item.src}
          title={item.title}
        />
      )}
      keyExtractor={(item, i) => i.toString()}      
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    padding: 10,
  },
  content: {
    alignItems: 'center',
  },
});
