import React, { useReducer, useState } from "react";
import { View, useWindowDimensions, Text, StyleSheet } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { TextInput } from "react-native-gesture-handler";

const FirstRoute = () => {
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

  const [state, dispatch] = useReducer(reducer, { name: "" });
  const { name } = state;

  return (
    <View style={styles.view}>
      <Text style={styles.headerText}>Enter Name:</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(event) => {
          dispatch({ type: "onChange", payload: event });
        }}
      />
      <Text style={styles.textName}>Your name is {name}</Text>
    </View>
  );
};

const SecondRoute = () => {
  const [password, setPassword] = useState("");

  

  return (
    <View>
      <Text style={styles.headerText}>Enter Password:</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
        numeric={true}
        keyboardType={"numeric"}
      />
      {password.length < 5 ? (
        <Text style={styles.textName}>
          Password must be longer than 5 characters
        </Text>
      ) : null}
    </View>
  );
};

const TextScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Name" },
    { key: "second", title: "Password" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 20,
    flex: 1,
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
