import React, { useState, useEffect } from 'react';
import { TextInput, View, Button, FlatList, StyleSheet } from 'react-native';
import Card from './Card';

export default function App() {
   const [produtos, setProdutos] = useState([]);
   const [message, setMessage] = useState(null);
   const [produtosFiltrados, setProdutosFiltrados] = useState([]);
   const [filtro, setFiltro] = useState('');

   // Filtra a lista de produtos com base no que foi digitado no filtro
   const aplicarFiltro = () => {
      // Cria um novo array com os produtos filtrados (semlhanter a um forEach)
      const filtrados = produtos.filter((produto) =>
         // Verifica se o nome do produto contém o valor digitado no campo input
        produto.nome.toLowerCase().includes(filtro.toLowerCase())
      );
      // atualzia a lista de produtos filtrados
      setProdutosFiltrados(filtrados);
   };

   // Obtém a lista de produtos do Firebase
   const fetchProducts = async () => {
      try {
         const response = await fetch('https://dfef-dmrn-tps-default-rtdb.firebaseio.com/products.json');
         const data = await response.json();
   
         // Extrair os produtos e seus IDs
         const produtosIds = Object.keys(data);
         const produtos = Object.values(data);
         const listaProdutos = produtosIds.map((id, index) => ({
            id, ...produtos[index],
         }));
   
         // Atualizar o estado com os produtos
         setProdutos(listaProdutos);
         setProdutosFiltrados(listaProdutos); // Inicialmente, os filtrados são todos
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
         <View style={styles.filterContainer}>
            <TextInput
               style={styles.input}
               placeholder="Digite para filtrar"
               value={filtro}
               onChangeText={(text) => setFiltro(text)}
            />
            <Button title="Filtrar" onPress={aplicarFiltro} />
         </View>
         <FlatList
            data={produtosFiltrados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
               <Card
                  nome={item.nome}
                  descricao={item.descricao}
                  preco={item.preco}
                  imagens={item.imagens}
               />
            )}
         />
      </View>
   );
}



const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 10,
   },
   filterContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     marginBottom: 10,
   },
   input: {
     flex: 1,
     borderWidth: 1,
     borderColor: '#ccc',
     borderRadius: 5,
     padding: 10,
     marginRight: 10,
   },
 });