import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const TodoItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>{props.tarefa}</Text>
      </View>
      <TouchableOpacity onPress={() => props.handleClickDelete(props.index)}>
        <Icon name="trash-o" style={styles.trashIcon}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },
  item: {
    flexDirection: "row",
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
  trashIcon: {
    color: "#f75252",
    fontSize: 20,
    marginLeft: 10,
  },
});