import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import Card from './Card';

export default function App() {
   const [proposicoes, setProposicoes] = useState([]); 
   const [pagina, setPagina] = useState(1);
   const [isLoading, setIsLoading] = useState(false); // Controle do carregamento
   const [isRefreshing, setIsRefreshing] = useState(false); // Controle do "Pull to Refresh"
   const [message, setMessage] = useState(null);

   // Obtém a lista de produtos do Firebase    
   const fetchProposicoes = async (reset = false) => {
      reset ? setIsRefreshing(true) : setIsLoading(true);
      try {
         const response = await fetch(`https://dadosabertos.camara.leg.br/api/v2/proposicoes?pagina=${reset ? 1 : pagina}&itens=10`);
         const data = await response.json();

         if (reset) {
            setProposicoes(data.dados); // Substitui a lista em caso de "Pull to Refresh"
         } else {            
            setProposicoes((prevProposicoes) => [...prevProposicoes, ...data.dados]); // Adiciona as proposições à lista já existente
         }
      } catch (error) {
         setMessage(error.message);
      } finally {
         reset ? setIsRefreshing(false) : setIsLoading(false);
      }
   };

   // Popula a lista de produtos quando o componente é montado
   useEffect(() => {
      fetchProposicoes();
   }, [pagina])
   
   // Função de renderização das proposições
   const renderProposicao = ({ item }) => (
      <Card
         id={item.id}
         uri={item.uri}
         siglaTipo={item.siglaTipo}
         codTipo={item.codTipo}
         numero={item.numero}
         ano={item.ano}
         ementa={item.ementa}
      />
   )

   // Função para carregar mais proposições quando o usuário chegar ao final da lista
   const loadMore = () => {
      if (!isLoading) {
         setPagina((prevPagina) => prevPagina + 1); // Vai para a próxima página
      }
   }

    // Função de "Pull to Refresh"
   const onRefresh = () => {
      setPagina(1); // Reseta para a primeira página
      fetchProposicoes(true); // Faz uma nova requisição para reiniciar a lista
   };

   return (
      <View style={styles.container}>
         {message && <Text>{message}</Text>}
         {isLoading && !isRefreshing && <ActivityIndicator size="large" color="#00f" />}
         <FlatList
            data={proposicoes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderProposicao}
            onEndReached={loadMore}       // Carregar mais quando o usuário chegar ao final da lista
            onEndReachedThreshold={0.5}   // Carregar quando o usuário estiver 50% para o final
            refreshing={isRefreshing}     // Estado do "Pull to Refresh"
            onRefresh={onRefresh}         // Função chamada ao arrastar para baixo
         />
      </View>
   );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});