import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";
import ImageModal from "react-native-image-modal";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.name}>{result.name}</Text>

      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <ImageModal
              resizeMode="center"
              style={{ width: 250, height: 250 }}
              onMove
              source={{
                uri: item,
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
    alignSelf: "center",
  },
});

export default ResultsShowScreen;
