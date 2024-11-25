import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from './Card';

export default function App() {
   const [proposicoes, setProposicoes] = useState([]); 
   const [pagina, setPagina] = useState(1);
   const [isLoading, setIsLoading] = useState(false); // Controle do carregamento
   const [message, setMessage] = useState(null);

   // Obtém a lista de produtos do Firebase
   const fetchProposicoes = async () => {
      setIsLoading(true); // Inicia o carregamento
      try {
         const response = await fetch(`https://dadosabertos.camara.leg.br/api/v2/proposicoes?pagina=${pagina}&itens=10`);
         const data = await response.json();
   
         // Adiciona as proposições à lista já existente
         setProposicoes((prevProposicoes) => [...prevProposicoes, ...data.dados]);            
      } catch (error) {
         setMessage(error.message);
      } finally {
         setIsLoading(false); // Finaliza o carregamento
      }
   }        

   // Popula a lista de produtos quando o componente é montado
   useEffect(() => {
      fetchProposicoes(pagina);
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
         setPagina(pagina + 1); // Vai para a próxima página
      }
   }

   return (
      <View style={styles.container}>
         {message && <Text>{message}</Text>}
         {isLoading && <ActivityIndicator size="large" color="#00f" />}
         <FlatList
            data={proposicoes}
            keyExtractor={(item) => item.id}
            renderItem={renderProposicao}
            onEndReached={loadMore}       // Carregar mais quando o usuário chegar ao final da lista
            onEndReachedThreshold={0.5}   // Carregar quando o usuário estiver 50% para o final
         />
      </View>
   );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
