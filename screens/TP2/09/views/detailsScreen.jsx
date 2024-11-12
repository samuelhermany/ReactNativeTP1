import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{item.titulo}</Text>        
      <View style={styles.containerText}>
        <Text style={styles.texto}>Curtidas {item.curtidas}</Text>
        <Text style={styles.texto}>Compart. {item.compartilhamentos}</Text>
      </View>
      <Text style={styles.descricao}>{item.descricao}</Text>            
      <Text style={styles.texto}>Autor: {item.autor}</Text>
      <Text style={styles.texto}>Postado em: {item.dataPost.replace(/-/g, '/')}</Text>            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingVertical: 10,
  },
  descricao: {    
    flexShrink: 1,  // Faz o texto ocupar toda o espaço que sobra na tela
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'justify',
    marginVertical: 10,
  },
  texto: {
    fontSize: 16,
    paddingVertical:10,
  },
  containerText: {        
    flexDirection: "row",
    justifyContent: "space-between",
  }
});
