import { Text, View, StyleSheet } from "react-native";

export default function Item (props) {
   return (
      <View style={styles.container}>        
         <Text style={styles.texto}>{props.title}</Text>
         <Text style={styles.texto}>{props.price}</Text>        
      </View>
   )
};

const styles = StyleSheet.create({
   container: {       
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: "row",
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginHorizontal: 10,
      marginVertical: 5,
      borderWidth: 1,
      borderColor: 'black',
      borderStyle: 'solid',  
   },
   texto: {
      fontSize: 16,
   }
 });