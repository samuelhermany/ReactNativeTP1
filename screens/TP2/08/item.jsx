import { Text, View, StyleSheet, Image } from "react-native";

export default function Item (props) {
  return (
    <View style={styles.container}>        
      <Image source={{ uri: props.src }} style={styles.imagem} />
      <View style={styles.containerText}>
        <Text style={styles.texto}>Nome: {props.nome}</Text>
        <Text style={styles.texto}>Endereço: {props.endereco}</Text>
        <Text style={styles.texto}>Telefone: {props.telefone}</Text>
      </View >
    </View >
  )
};

const styles = StyleSheet.create({
  container: {          
    alignItems: 'center',
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',  
    width: '90%',
  },
  texto: {
    fontSize: 16,
  },
  imagem: {
    width: 100,
    height: 100,
  },
  containerText: {
    flex: 1,
    marginLeft: 10,
  }
});