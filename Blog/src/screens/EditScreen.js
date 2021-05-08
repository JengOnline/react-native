import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const initialize = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  const [title, setTitle] = useState(initialize.title);
  const [content, setContent] = useState(initialize.content);

  const id = navigation.getParam("id");

  const saveBlogPost = () => {
    if (id === "" || title === "" || content === "") {
      return;
    }
    editBlogPost(id, title, content);
    navigation.navigate("Index");
  };

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Enter New Title: </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(title) => setTitle(title)}
        value={title}
        autoCapitalize="none"
      />
      <Text style={styles.text}>Enter New Content: </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(content) => setContent(content)}
        value={content}
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

export default EditScreen;
