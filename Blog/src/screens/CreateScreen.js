import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const CreateScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Enter Title: </Text>
      <TextInput style={styles.textInput} />
      <Text style={styles.text}>Enter Content: </Text>
      <TextInput style={styles.textInput} />
      <Button
        style={styles.button}
        title="Save"
        onPress={() => navigation.navigate("Index")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
  text: {
    fontSize: 30,
  },
  textInput: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: "gray",
  },
  button: {},
});

export default CreateScreen;
