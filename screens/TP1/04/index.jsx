import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

// Lista de imagens e seus títulos correspondentes
const imagens = [
  { title: 'Imagem 1' , src: 'https://cinecriticas.com.br/wp-content/uploads/2023/04/Cine1-9.jpg'},
  { title: 'Imagem 2' , src: 'https://cinecriticas.com.br/wp-content/uploads/2024/10/Cine1-8.jpg'},
  { title: 'Imagem 3' , src: 'https://cinecriticas.com.br/wp-content/uploads/2024/09/Cine1-7-169x250.jpg'},
  { title: 'Imagem 4' , src: 'https://cinecriticas.com.br/wp-content/uploads/2024/08/Cine1-3-167x250.jpg'},
];

export default function App() {
  const [imagemAtual, setImagemAtual] = useState(imagens[0]);

  const trocarImagem = () => {
    const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];
    setImagemAtual(imagemAleatoria);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imagemAtual.src }} style={styles.imagem} />
      <Text style={styles.titulo}>{imagemAtual.title}</Text>
      <Button title="Trocar Imagem" onPress={trocarImagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 150,
    height: 200,
  },
  titulo: {
    marginBottom: 20,
  },
});
