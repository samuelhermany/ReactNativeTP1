import React, { useState } from "react";
import { View, Text, TextInput,  Pressable, StyleSheet } from "react-native";
import { TodoItem } from './TodoItem';

export default function App() {
    const [tarefas, setTarefas] = useState([]);
    const [formData, setFormData] = useState({
      tarefa: "",
    });

    function addTarefa() {
      // Adiciona a nova tarefa ao estado
      setTarefas([...tarefas, formData]);

      setFormData({
        tarefa: "",
      });
    }

    function removerTarefa(posicaoArray) {
      const tarefasFiltradas = tarefas.filter((_, index) => posicaoArray !== index);
      setTarefas(tarefasFiltradas);
    }

    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Informe a tarefa"
            value={formData.tarefa}
            onChangeText={(text) => setFormData({ ...formData, tarefa: text })}
          />
          <Pressable  style={styles.button} title="Adicionar" onPress={addTarefa}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </Pressable>
        </View>

        <View style={styles.listaTarefas}>
          <Text style={styles.titulo}>Lista de Tarefas</Text>
            {tarefas.map((item, index) => (
                <TodoItem
                    key={index.toString()}
                    tarefa={item.tarefa}
                    index={index}
                    handleClickDelete={removerTarefa}
                />
                )
            )}
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      flex: 1,
      backgroundColor: "#050915",
      color: "#fff",
    },
    form: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    input: {
      flex: 1,
      borderColor: "#ccc",
      backgroundColor: "#fff",
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      marginRight: 10,
    },
    listaTarefas: {
      flex: 1,
      alignItems: "center",
    },
    titulo: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
      color: "#fff",
    },
    button:{
        backgroundColor: "#1A2EDF",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
    }
  });