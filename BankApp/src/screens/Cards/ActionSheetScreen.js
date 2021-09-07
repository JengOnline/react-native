import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ActionSheetScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangleShapeView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(30, 33, 33, 0.75)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding:20
  },
  rectangleShapeView: {
    width: 23,
    height: 4,
    backgroundColor: '#2c2c2e',
    alignSelf:'center'
  },
});

export default ActionSheetScreen;
