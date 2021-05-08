import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const saveBlogPost = () => {
    if (title === "" || content === "") {
      return;
    }
    addBlogPost(title, content);
    navigation.navigate("Index");
  };

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Enter Title: </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(title) => setTitle(title)}
        autoCapitalize="none"
      />
      <Text style={styles.text}>Enter Content: </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(content) => setContent(content)}
        autoCapitalize="none"
      />
      <Button style={styles.button} title="Save" onPress={saveBlogPost} />
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
    fontSize: 25,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
  },
  button: {},
});

export default CreateScreen;
