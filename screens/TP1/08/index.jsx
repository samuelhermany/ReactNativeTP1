import { StyleSheet, View } from 'react-native';
import CardMovie from './cardMovie';

export default function App() {
    return (
        <View style={styles.container}>
            <CardMovie
                src="https://cinecriticas.com.br/wp-content/uploads/2023/04/Cine1-9.jpg"
                titulo="The Card Counter" cinema="Cinemax" horario="14:00" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });