import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App() {
    const [value, setValue] = useState('');
    const [tipo, setTipo] = useState('');

    const verificar = () => {
        // Números menores ou iguais a 1 não são primos
        const num = parseInt(value); // Converte o valor para um número
        let result = true;

        if (num <= 1 || num % 2 === 0) {
            result = false;
        } else if (num === 2) {
            result = true;
        } else {
            for (let i = 3; i <= Math.sqrt(num); i += 2) {
                if (num % i === 0) {
                    result = false;
                    break;
                }
            }
        }

        if (result) {
            setTipo(`O número ${value} é primo`);
        } else {
            setTipo(`O número ${value} não é primo`);
        }

        setValue('');
    };

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
