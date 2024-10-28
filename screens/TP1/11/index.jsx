import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [value, setValue] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarPalindromo = () => {
    const textoLimpo = value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Inverte o texto
    const textoReverso = textoLimpo.split('').reverse().join('');

    if (textoLimpo === textoReverso) {
      setResultado(`"${value}" é um palíndromo!`);
    } else {
      setResultado(`"${value}" não é um palíndromo.`);
    }

    setValue('');
  };

  return (
    <View >
      <TextInput
        placeholder='Digite uma palavra ou frase'
        value={value}
        onChangeText={setValue}
      />
      <Button title='Verificar' onPress={verificarPalindromo} />
      <Text >{resultado}</Text>
    </View>
  );
}