import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PieChart from 'react-native-pie-chart';

const OtherScreen = () => {
  const widthAndHeight = 89;
  const series = [78, 16, 6];
  const sliceColor = ['#5E5CE6', '#BF5AF2', '#FF9F0A'];

  return (
    <View style={styles.container}>
      <View style={styles.labelView}>
        <Text style={styles.labelOther}>Other</Text>
        <Text style={styles.labelViewAll}>View all</Text>
      </View>
      <View style={styles.containerOther}>
        <View style={styles.otherView}>
          <View>
            <Text style={styles.labelExpenses}>Expenses</Text>
            <Text style={styles.expensesDate}>01 June 2021 - 16 June 2021</Text>
            <Text style={styles.amount}>$4.570.80</Text>
          </View>
          <View>
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              doughnut={true}
              coverRadius={0.6}
              coverFill={'black'}
            />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#1d1c1d',
            borderBottomWidth: 1,
            marginTop: '5%',
          }}
        />
        <View style={styles.detail}>
          <View style={styles.subDetail1}>
            <Text style={styles.subText1}>78% Entertainment</Text>
          </View>
          <View style={styles.subDetail2}>
            <Text style={styles.subText2}>16% Top up</Text>
          </View>
          <View style={styles.subDetail3}>
            <Text style={styles.subText3}>6% Food and Drink</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

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
  labelOther: {
    fontSize: 25,
    color: '#fff',
    fontFamily: 'SFProDisplay-Regular',
  },
  labelViewAll: {
    fontSize: 17,
    color: '#EBEBF5',
  },
  containerOther: {
    backgroundColor: 'rgba(28, 28, 30, 0.5)',
    borderRadius: 25,
    padding: '5%',
    marginTop: '3%',
  },
  otherView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelExpenses: {
    fontFamily: 'SFProDisplay-Semibold',
    fontSize: 17,
    color: '#fff',
  },
  expensesDate: {
    fontFamily: 'SFProDisplay-Regular',
    color: '#EBEBF5',
    fontSize: 12,
  },
  amount: {
    fontFamily: 'SFProDisplay-Regular',
    color: '#fff',
    fontSize: 28,
    marginTop: '10%',
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:'5%'
  },
  subDetail1: {
    backgroundColor: 'rgba(94, 92, 230, 0.25)',
    borderRadius: 25,
    height: 28,
    justifyContent: 'center',
    padding: '2%',
  },
  subText1: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 12,
    color: '#5E5CE6',
  },
  subDetail2: {
    backgroundColor: 'rgba(191, 90, 242, 0.24)',
    borderRadius: 25,
    height: 28,
    justifyContent: 'center',
    padding: '2%',
  },
  subText2: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 12,
    color: '#BF5AF2',
  },
  subDetail3: {
    backgroundColor: 'rgba(255, 159, 10, 0.24)',
    borderRadius: 25,
    height: 28,
    justifyContent: 'center',
    padding: '2%',
  },
  subText3: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 12,
    color: '#FF9F0A',
  },
});

export default OtherScreen;
