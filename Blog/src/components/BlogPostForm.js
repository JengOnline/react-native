import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Enter Title: </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(title) => setTitle(title)}
        autoCapitalize="none"
        value={title}
      />
      <Text style={styles.text}>Enter Content: </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(content) => setContent(content)}
        autoCapitalize="none"
        value={content}
      />
      <Button
        style={styles.button}
        title="Save Blog Post"
        onPress={() => onSubmit(title, content)}
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
    fontSize: 25,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
  },
});

export default BlogPostForm;
