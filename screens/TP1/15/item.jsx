import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Item = ({perguntas}) => {
  const [numeroQuestaoAtual, setNumeroQuestaoAtual] = useState(0);
  const [questaoAtual, setQuestaoAtual] = useState({ pergunta: "", opcoes: [] });
  const [selectedOption, setSelectedOption] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);

  const activeItem = () =>{
    setQuestaoAtual(perguntas[numeroQuestaoAtual])
  }

  const handleSelectedItem = (index) =>{
    setSelectedOption(index)
    if(index === questaoAtual.opcao_correta){
      setPontuacao((prevPontuacao) => prevPontuacao + 1)
      alert("acertou = "+ pontuacao)  
    }

    setTimeout(() => {
      setNumeroQuestaoAtual((prevNumero) => prevNumero + 1);
      setSelectedOption(null)
      // alert("index selecionado = " + index)
    }, 3000);
    alert("pontuacao = " + pontuacao)
  }

  useEffect(() => {
    activeItem()
  }, [numeroQuestaoAtual]);

  return (
    <View>
      <Text style={styles.titulo}>{questaoAtual.pergunta}</Text>
      {questaoAtual.opcoes.map((option, index) => (
        <View key={index} style={styles.opcao}>
          <TouchableOpacity
            style={[styles.checkbox, selectedOption === index && styles.checked]}
            onPress={() => handleSelectedItem(index)}
          >
            {selectedOption === index && <Icon name="check" size={10} color="#fff" />}
          </TouchableOpacity>
          <Text style={styles.text}>{option}</Text>
        </View>
      ))}
      <Text>{pontuacao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
   titulo: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 8,
      color: '#49484a',
   },
   opcao: {
      flexDirection: "row",
      padding: 8,
      border: 1,
      backgroundColor: "#eae9eb",
      marginVertical: 4,
      borderRadius: 8,
   },
   text: {
      fontSize: 14,
      color: '#262428',
   },
   checkbox: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: '#9359F3',
      marginRight: 8,
    },
   checked: {
      borderColor: '#479C6E',
      backgroundColor: '#479C6E',
   },
});

