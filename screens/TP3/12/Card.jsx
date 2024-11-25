import { Text, View, StyleSheet, Linking  } from "react-native";

export default function Card ({ uri, siglaTipo, codTipo, numero, ano, ementa}) {
   // Função para abrir o link no navegador
   const handleOpenLink = () => {
      if (uri) {
         Linking.openURL(uri).catch((err) =>
            console.error("Erro ao abrir o link:", err)
         );
      }
   };
   
  return (
      <View style={styles.container}>                                   
         <View style={styles.containerText}>         
            <Text style={styles.texto}>
               <Text style={styles.bold}>Uri: </Text>
               <Text style={styles.link} onPress={handleOpenLink}>
                  {uri}
               </Text>
            </Text>
            <Text style={styles.texto}>               
               <Text style={styles.bold}>SiglaTipo: </Text>
               {siglaTipo}
            </Text>
            <Text style={styles.texto}>
               <Text style={styles.bold}>CodTipo: </Text>
               {codTipo}
            </Text>
            <Text style={styles.texto}>
               <Text style={styles.bold}>Número: </Text>
               {numero}
            </Text>
            <Text style={styles.texto}>
               <Text style={styles.bold}>Ano: </Text>               
               {ano}
            </Text>
            <Text style={styles.texto}>
               <Text style={styles.bold}>Ementa: </Text>                
               {ementa}
            </Text>
         </View >         
      </View >
   )
}

const styles = StyleSheet.create({
   container: {                
      flexDirection: 'column',
      padding: 5,
      marginVertical: 5,
      borderWidth: 1,
      borderColor: 'black',
      borderStyle: 'solid',        
   },
   containerText: {
      marginLeft: 5,
   },
   texto: {
      fontSize: 14,
   },
   bold: {
      fontWeight: "bold",
   },
   link: {
      color: "blue",
      textDecorationLine: "underline",
   },
});
