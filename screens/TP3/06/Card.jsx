import { Text, View, StyleSheet, Image } from "react-native";

export default function Card ({ nome, descricao, preco, imagens }) {
  return (
      <View style={styles.container}>                          
         <View style={styles.containerImage}>
            {imagens.map((imagem, i) => (            
               <Image key={i} 
                  source={{ uri: imagem }} 
                  style={styles.imagem} 
               />            
            ))}
         </View >
         <View style={styles.containerText}>         
            <Text style={styles.productName}>{nome}</Text>
            <Text style={styles.productPrice}>R$ {preco}</Text>
            <Text style={styles.productDescription}>{descricao}</Text>
         </View >         
      </View >
   )
};


const styles = StyleSheet.create({
   container: {                
      flexDirection: 'column',
      padding: 5,
      marginHorizontal: 10,
      marginVertical: 5,
      borderWidth: 1,
      borderColor: 'black',
      borderStyle: 'solid',        
   },
   texto: {
      fontSize: 16,
   },
   containerImage: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
   },
   imagem: {
      width: 50,
      height: 50,
      resizeMode: 'cover', // Mantém a proporção da imagem
   },
});
