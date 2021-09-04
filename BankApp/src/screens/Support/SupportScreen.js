import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

const SupportScreen = () => {
  return (
    <ImageBackground
      source={require('../../images/BG.png')}
      resizeMode="cover"
      style={styles.image}></ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
});

export default SupportScreen;
