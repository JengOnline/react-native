import React from 'react';
import {View, Text, StyleSheet, ImageBackground, StatusBar, SafeAreaView} from 'react-native';
import BarScreen from './BarScreen';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('../images/BG.png')}
      resizeMode="cover"
      style={styles.image}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <BarScreen />
        <View style={styles.bottom}>
          <Text style={styles.textBottom}>Design by Vladlucha</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    alignItems: 'center',
  },
  textBottom: {
    fontSize: 12,
    color: '#fff',
  },
});

export default HomeScreen;
