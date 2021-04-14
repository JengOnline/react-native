import React, { useReducer, useState } from "react";
import { View, useWindowDimensions, Text, StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { TextInput } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { render } from "react-dom";

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
    <View style={styles.view}>
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

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "rgb(0,144,209)", height: 5 }}
    style={{
      backgroundColor: "rgb(0, 81 , 112)",
    }}
  />
);

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
      renderTabBar={renderTabBar}
      initialLayout={{ width: layout.width }}
      tabBarBackgroundColor="white"
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
    borderWidth:1,
    borderRadius:2,
   
  },
  textName: {
    marginTop: 50,
    fontSize: 20,
  },
});

export default TextScreen;
