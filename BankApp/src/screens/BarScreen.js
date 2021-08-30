import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, Button} from 'react-native';

const BarScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.labelBalance}>ACTIVE BALANCE</Text>
      <View style={styles.balanceView}>
        <Text style={styles.balance}>$43.650.10</Text>
        <Image
          source={require('../images/img-oval.png')}
          style={styles.userImage}></Image>
      </View>
      <View style={styles.btnRowView}>
        <Button title='x'/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  labelBalance: {
    fontSize: 18,
    color: '#EBEBF5',
  },
  balance: {
    fontSize: 41,
    fontWeight: 'bold',
    color: '#fff',
  },
  balanceView: {
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  userImage: {
    width: 40,
    height: 40,
    alignSelf:'center'
  },
  btnRowView:{
    justifyContent:'space-between',
    flexDirection:'column'
  }
});

export default BarScreen;
