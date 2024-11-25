import React, { useState, useEffect } from 'react';
import { TextInput, View, Button, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Card from './Card';

export default function App() {
   const [produtos, setProdutos] = useState([]);
   const [message, setMessage] = useState(null);
   const [produtosFiltrados, setProdutosFiltrados] = useState([]);
   const [filtro, setFiltro] = useState('');
   const [ordenacao, setOrdenacao] = useState('nomeCrescente');   
   const [isLoading, setIsLoading] = useState(false);   

   // Obtém a lista de produtos do Firebase
   const fetchProducts = async () => {
      setIsLoading(true); // Inicia o carregamento

      try {
         const response = await fetch('https://dfef-dmrn-tps-default-rtdb.firebaseio.com/products.json');
         const data = await response.json();
         const produtosIds = Object.keys(data);
         const produtos = Object.values(data);

         const listaProdutos = produtosIds.map((id, index) => ({
            id, ...produtos[index],                       // Atualiza o progresso  
         }));
            
         setProdutos(listaProdutos);
         setProdutosFiltrados(listaProdutos); // Inicialmente, os filtrados são todos
      } catch (error) {
         setMessage(error.message);
      } finally {
         setIsLoading(false); // Finaliza o carregamento
      }
   }        
   
   // Popula a lista de produtos quando o componente é montado
   useEffect(() => {
      fetchProducts();
   }, []);   

   // Filtra a lista de produtos com base no que foi digitado no filtro
   const aplicarFiltroEOrdenar = () => {      
      // Filtra os produtos com base no texto do filtro (semlhante ao forEach)
      const filtrados = produtos.filter((produto) =>
         // Verifica se o nome do produto contém o valor digitado no campo input
         produto.nome.toLowerCase().includes(filtro.toLowerCase())||
         produto.descricao.toLowerCase().includes(filtro.toLowerCase())
      );
      // Ordena os produtos filtrados
      const produtosOrdenados = [...filtrados].sort((a, b) => {
            if (ordenacao === 'nomeCrescente') {
               return a.nome.localeCompare(b.nome); 
            } else if (ordenacao === 'nomeDecrescente') {
               return b.nome.localeCompare(a.nome);        
            } else if (ordenacao === 'precoCrescente') {
               return a.preco - b.preco;
            } else if (ordenacao === 'precoDecrescente') {
               return b.preco - a.preco;
            }
            return 0; 
         });
      // Atualiza a lista de produtos filtrados e ordena
      setProdutosFiltrados(produtosOrdenados);
   };

   useEffect(() => {
      if (produtos.length > 0) {
         aplicarFiltroEOrdenar();
      }
   }, [produtos, filtro, ordenacao]);

   return (
      <View style={styles.container}>
         {isLoading ? (
            // Indicador de carregamento
            <ActivityIndicator size="large" color="#00f" style={styles.loadingIndicator} />
         ) : (
            <>
               <View style={styles.filterContainer}>
                  <TextInput
                     style={styles.input}
                     placeholder="Digite para filtrar"
                     value={filtro}
                     onChangeText={(text) => setFiltro(text)}
                  />
                  <Button title="Filtrar" onPress={aplicarFiltroEOrdenar} />
               </View>
               <View style={styles.picker}>
                  <Picker 
                     selectedValue={ordenacao}
                     onValueChange={(itemValue) => setOrdenacao(itemValue)}
                  >
                     <Picker.Item label="Selecione uma ordenação:" value="" enabled={false} />
                     <Picker.Item label="Nome (Crescente)" value="nomeCrescente" />
                     <Picker.Item label="Nome (Decrescente)" value="nomeDecrescente" />
                     <Picker.Item label="Preço (Crescente)" value="precoCrescente" />
                     <Picker.Item label="Preço (Decrescente)" value="precoDecrescente" />
                  </Picker>
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
            </>
         )}
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
   picker: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginVertical: 10,
      height: 50,
      width: '100%',
   },
   loadingIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
});