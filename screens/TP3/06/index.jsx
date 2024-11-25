import React, { useState, useEffect } from 'react';
import { Image, View, Text, FlatList, StyleSheet } from 'react-native';
import Card from './Card';

export default function App() {
   const [produtos, setProdutos] = useState([]);
   const [message, setMessage] = useState(null);

   // Obtém a lista de produtos do Firebase
   const fetchProducts = async () => {
      try {
         const response = await fetch('https://dfef-dmrn-tps-default-rtdb.firebaseio.com/products.json');
         const data = await response.json();
   
         // Extrair os produtos e seus IDs
         const produtosIds = Object.keys(data);
         const produtos = Object.values(data);
         const listaProdutos = produtosIds.map((id, index) => ({
            id,
            ...produtos[index],
         }));
            
         setProdutos(listaProdutos);
      } catch (error) {
         setMessage(error.message);
      }               
   }        

   // Popula a lista de produtos quando o componente é montado
   useEffect(() => {
      fetchProducts();
   }, []);

   return (
      <View style={styles.container}>
         <FlatList
            data={produtos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
               <Card
                  nome={item.nome}
                  descricao={item.descricao}
                  preco={item.preco}
                  imagens={item.imagens}
               />
               // <View>
               //    <Text>Nome: {item.nome}</Text>
               //    <Text>Descrição: {item.descricao}</Text>
               //    <Text>Preço: R${item.preco}</Text>                  
               //    {item.imagens.map((imagem, index) => (
               //       <Image 
               //          key={index} 
               //          source={{ uri: imagem }} 
               //          style={styles.imagem} 
               //       />
               //    ))}
               // </View>
            )}
         />
      </View>
   );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
