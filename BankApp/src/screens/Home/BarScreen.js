import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const BarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelBalance}>ACTIVE BALANCE</Text>
      <View style={styles.balanceView}>
        <Text style={styles.balance}>$43.650.10</Text>
        <Image
          source={require('../../images/img-oval.png')}
          style={styles.userImage}></Image>
      </View>
      <View style={styles.imgRowView}>
        <View style={styles.imgBoxView}>
          <Image
            source={require('../../icon/icon-send.png')}
            style={styles.iconStyle}
          />
          <Text style={styles.textImg}>Send</Text>
        </View>
        <View style={styles.imgBoxView}>
          <Image
            source={require('../../icon/icon-request.png')}
            style={styles.iconStyle}
          />
          <Text style={styles.textImg}>Request</Text>
        </View>
        <View style={styles.imgBoxView}>
          <Image
            source={require('../../icon/icon-in-out.png')}
            style={styles.iconStyle}
          />
          <Text style={styles.textImg}>In&Out</Text>
        </View>
        <View style={styles.imgBoxView}>
          <Image
            source={require('../../icon/icon-qr-code.png')}
            style={styles.iconStyle}
          />
          <Text style={styles.textImg}>QR Code</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#1d1c1d',
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'flex-start',
  },
  labelBalance: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 13,
    color: '#EBEBF5',
    marginTop: '5%',
  },
  balance: {
    fontSize: 41,
    fontFamily: 'SFProDisplay-Regular',
    fontWeight: 'bold',
    color: '#fff',
  },
  balanceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userImage: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  imgRowView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: '0.3%',
    marginTop: '10%',
    marginBottom: '10%',
  },
  iconStyle: {
    width: 64,
    height: 64,
  },
  imgBoxView: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textImg: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SFProDisplay-Regular',
  },
});

export default BarScreen;
