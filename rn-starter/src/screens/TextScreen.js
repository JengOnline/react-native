import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextScreen = () => {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.view}>
      <Text style={styles.headerText}>Enter Name:</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={onChangeText}
      />
      <Text style={styles.textName}>Your name is {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 20,
  },
  headerText: {
    fontSize: 30,
  },
  textInput: {
    fontSize: 25,
  },
  textName: {
    marginTop: 50,
    fontSize: 20,
  },
});

export default TextScreen;
