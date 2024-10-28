import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [inputDate, setInputDate] = useState('');
  const [inputDateTime, setInputDateTime] = useState('');
  const [idade, setIdade] = useState('');

    const calcularIdade = () => {
        const [dia, mes, ano] = inputDate.split('/').map(Number);
        const [hora, minuto] = inputDateTime.split(':').map(Number);

        const dataAtual = new Date();
        const dataNascimentoDate = new Date(ano, mes - 1, dia, hora, minuto);
        const diferencaMilissegundos = dataAtual - dataNascimentoDate;

        const minutos = Math.floor(diferencaMilissegundos / (1000 * 60)) % 60;
        const horas = Math.floor(diferencaMilissegundos / (1000 * 60 * 60)) % 24;
        const dias = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24)) % 30;
        const meses = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24 * 30)) % 12;
        const anos = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24 * 365.25)); // considera anos bissextos

        setIdade(`Idade: ${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas e ${minutos} minutos.`);
    };

  return (
    <View>
        <Text style={styles.titulo}>App Idade</Text>
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Data nascimento Exemplo: 25/10/1999"
                keyboardType="numeric"
                value={inputDate}
                onChangeText={setInputDate}
            />
            <TextInput
                style={styles.input}
                placeholder="Hora nascimento Exemplo: 12:11"
                keyboardType="numeric"
                value={inputDateTime}
                onChangeText={setInputDateTime}
                />
            <Button title="Calcular Idade" onPress={calcularIdade} />
            <Text >{idade}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
  },
});
