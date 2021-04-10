import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const reducer = (state = "", action) => {
  switch (action.type) {
    case "onChange": {
      return { ...state.name, name: (state.name = action.payload) };
    }
    default: {
      return state;
    }
  }
};

const TextScreen = () => {
  const [state, dispatch] = useReducer(reducer, { name: "" });
  const { name } = state;

  return (
    <View style={styles.view}>
      <Text style={styles.headerText}>Enter Name:</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        value={name}
        onChangeText={(event) => {
          console.log(event);
          dispatch({ type: "onChange", payload: event });
        }}
      />
      <Text style={styles.textName}>Your name is {name}</Text>
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
