import React from 'react';
import {View, Text, StyleSheet, ImageBackground, StatusBar} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('../images/Background.png')}
        resizeMode="cover"
        style={styles.image}>
        <Text>HomeScreen</Text>
        <View style={styles.bottom}>
          <Text style={styles.textBottom}>Design by Vladlucha</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    alignItems:'center'
  },
  textBottom: {
    fontSize: 12,
    color: '#fff',
  },
});

export default HomeScreen;
