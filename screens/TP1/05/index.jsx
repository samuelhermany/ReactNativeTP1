import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(prevCounter => prevCounter + 1)
    };

    const decrement = () => {
        setCounter(prevCounter => prevCounter - 1)
    };

    return (
        <View>
            <View style={styles.botoes}>
                <TouchableOpacity style={styles.button} onPress={increment}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={decrement}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
                <Text style={styles.counterText}>{counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        gap: 10,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        width: 30,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    counterText: {
        fontSize: 30,
        margin: 'auto',
    },
})