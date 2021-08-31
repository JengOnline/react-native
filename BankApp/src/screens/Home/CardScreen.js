import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function CardScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.labelView}>
        <Text style={styles.labelCard}>Cards</Text>
        <Text style={styles.labelViewAll}>View all</Text>
      </View>
      <View style={styles.cardView}>
        <View style={styles.firstCardInfoView}>
          <Image
            source={require('../../icon/icon-first-card.png')}
            style={styles.cardImage}
          />
          <View style={styles.salaryView}>
            <Text style={styles.cardTitle}>Salary</Text>
            <Text style={styles.cardSubtitle}>**** **** **** 2468</Text>
          </View>
          <Text style={styles.cardDetail}>$4.570.80</Text>
        </View>
        <View style={styles.secondCardInfoView}>
          <Image
            source={require('../../icon/icon-second-card.png')}
            style={styles.cardImage}
          />
          <View style={styles.salaryView}>
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
    backgroundColor: 'rgba(28, 28, 30, 0.5)',
    borderRadius: 25,
    padding: '5%',
    marginTop: '3%'
  },
  firstCardInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondCardInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:'7%'
  },
  cardImage: {
    width: 28,
    height: 28,
    marginRight:'5%'
  },
  salaryView:{
    flex:1,
    justifyContent:'space-between'
  },
  cardTitle: {
    fontSize: 17,
    color: '#fff',
    fontFamily: 'SFProDisplay-Semibold',
    fontWeight:'bold',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#EBEBF5',
    fontFamily: 'SFProDisplay-Regular',
  },
  cardDetail: {
    fontSize: 17,
    color: '#fff',
    fontFamily: 'SFProDisplay-Semibold',
  },
});

export default CardScreen;
