import { Text, View, StyleSheet, Image } from "react-native"; // Certifique-se de importar Image

export default function Item(props) {
  return (
    <View style={styles.container}>        
      <Image source={{ uri: props.src }} style={styles.imagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {        
    marginHorizontal: 10,
    marginVertical: 5,
  },
  imagem: {
    width: 150,
    height: 150,
  },
});
