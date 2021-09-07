import React from 'react';
import {View, StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import DebitCardScreen from './DebitCardScreen';
import ActionSheetScreen from './ActionSheetScreen';

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
        <ActionSheetScreen />
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
    flex:1
  },
  debitCardView: {
    width: 335,
    height: 184,
    
  },
});

export default CardDetailScreen;
