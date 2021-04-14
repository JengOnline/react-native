import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    flexDirection: "row",
    justifyContent:'space-between'
  },
  viewOneStyle: {
    backgroundColor: "#e05959",
    width:100,
    height:100
  },
  viewTwoStyle: {
    backgroundColor: "#86e873",
    width:100,
    height:100,
    alignSelf:'flex-end'
  },
  viewThreeStyle: {
    backgroundColor: "#bd5ae1",
    width:100,
    height:100,
  },
});

export default BoxScreen;
