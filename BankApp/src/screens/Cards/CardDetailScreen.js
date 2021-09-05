import React from 'react';
import {View, StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import DebitCardScreen from './DebitCardScreen';

const CardDetailScreen = () => {
  return (
    <ImageBackground
      source={require('../../images/BG.png')}
      resizeMode="cover"
      style={styles.image}>
      <SafeAreaView style={styles.container}>
        <View style={styles.debitCardView}>
          <DebitCardScreen />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  debitCardView: {
    width: 335,
    height: 184,
    marginLeft: '5%',
  },
});

export default CardDetailScreen;
