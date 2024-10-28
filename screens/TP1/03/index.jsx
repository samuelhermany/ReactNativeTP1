import React, { useState } from 'react';
import { View, Text, Button, StyleSheet  } from 'react-native';

export default function App() {
  const [corBotao, setCorBotao] = useState('');

  const handlePressButton = (cor) => {
    setCorBotao(cor);
  };

    return (
        <View>
            <View >
                <Button style={styles.btnVermelho} title="Vermelho" onPress={() => handlePressButton('Vermelho')} />
                <Button title="Verde" onPress={() => handlePressButton('Verde')} />
                <Button title="Azul" onPress={() => handlePressButton('Azul')} />
            </View>
            <Text >
                Botão {corBotao} pressionado!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    btnVermelho: {
        backgroundColor: 'red',
      },
    btnVerde: {
        backgroundColor: 'red',
      },
    btnAzul: {
      backgroundColor: 'red',
    },
  });