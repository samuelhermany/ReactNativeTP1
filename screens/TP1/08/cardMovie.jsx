import { Image, Text, View, StyleSheet } from "react-native";

export default function CardMovie(props) {
    return (
        <View style={styles.container}>
            <Image source={{uri: props.src}} style={styles.imagem} />
            <Text>{props.titulo}</Text>
            <Text>{props.cinema}</Text>
            <Text>{props.horario}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
   imagem: {
     width: 150,
     height: 150,
   },
 });
