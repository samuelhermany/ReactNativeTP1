import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App() {
    const [value, setValue] = useState('');
    const [tipo, setTipo] = useState('');

    const verificar = () => {
        const numero = parseInt(value); // Converte o valor para um número
        if (numero %2 == 0) {
            setTipo(`O número ${value} é par`);
        } else {
            setTipo(`O número ${value} é ímpar`);
        }

        setValue('');
    }

    return (
        <View>
            <TextInput
                placeholder='Digite um número'
                keyboardType='numeric'
                value={value}
                onChangeText={setValue}/>
            <Button title='Verificar' onPress={verificar}/>
            <Text>{tipo}</Text>
        </View>
    )
}