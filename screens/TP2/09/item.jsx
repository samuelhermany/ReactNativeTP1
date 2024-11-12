import { Text, View, StyleSheet } from "react-native";

export default function Item(props) {
  return (
    <View style={styles.container}>      
        <Text style={styles.titulo}>{props.titulo}</Text>
        <Text style={styles.descricaoResumo}>{props.descricaoResumo}</Text>
      <View style={styles.containerText}>
        <Text style={styles.texto}>Curtidas {props.curtidas}</Text>
        <Text style={styles.texto}>Compart. {props.compartilhamentos}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',  
    width: '90%',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingBottom: 10,
  },
  descricaoResumo: {
    fontSize: 14,
    paddingBottom: 10,
  },
  texto: {
    fontSize: 14,
  },
  containerText: {        
    flexDirection: "row",
    justifyContent: "space-between",
  }
});