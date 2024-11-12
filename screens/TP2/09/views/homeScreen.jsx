import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Item from '../item';
import { posts } from '../data';

export default function HomeScreen({ navigation }) { 
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item, index }) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('Details', { item })}
          >
            <Item 
              key={index}
              titulo={item.titulo}
              descricaoResumo={item.descricaoResumo}
              curtidas={item.curtidas}
              compartilhamentos={item.compartilhamentos}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});


