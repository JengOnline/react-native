import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Edit", { id: id })}>
        <AntDesign name="edit" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  view: {
    marginTop: 50,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  content: {
    fontSize: 20,
  },
});

export default ShowScreen;
