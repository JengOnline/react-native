import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function CardScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.labelView}>
        <Text style={styles.labelCard}>Card</Text>
        <Text style={styles.labelViewAll}>View all</Text>
      </View>
      <View style={styles.cardView}>
        <View style={styles.cardInfoView}>
          <Image
            source={require('../icon/icon-first-card.png')}
            style={styles.cardImage}
          />
          <View>
            <Text style={styles.cardTitle}>Salary</Text>
            <Text style={styles.cardSubtitle}>**** **** **** 2468</Text>
          </View>
          <Text style={styles.cardDetail}>$4.570.80</Text>
        </View>
        <View style={styles.cardInfoView}>
          <Image
            source={require('../icon/icon-second-card.png')}
            style={styles.cardImage}
          />
          <View>
            <Text style={styles.cardTitle}>Salary2</Text>
            <Text style={styles.cardSubtitle}>**** **** **** 2468</Text>
          </View>
          <Text style={styles.cardDetail}>$4.570.80</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginTop: '10%',
  },
  labelView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelCard: {
    fontSize: 25,
    color: '#fff',
    fontFamily: 'SFProDisplay-Regular',
  },
  labelViewAll: {
    fontSize: 17,
    color: '#EBEBF5',
  },
  cardView: {
    backgroundColor: '#1C1C1E',
    borderRadius: 25,
    padding: '5%',
    justifyContent:'space-between',
    alignContent:'space-between'
  },
  cardInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardImage: {
    width: 28,
    height: 28,
  },
  cardTitle: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'SFProDisplay-Semibold',
    fontWeight:'bold'
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#EBEBF5',
    fontFamily: 'SFProDisplay-Regular',
  },
  cardDetail: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'SFProDisplay-Semibold',
  },
});

export default CardScreen;
