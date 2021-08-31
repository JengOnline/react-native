import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PieChart from 'react-native-pie-chart';


const OtherScreen = () => {
  const widthAndHeight = 250;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'];

  return (
    <View style={styles.container}>
      <View style={styles.labelView}>
        <Text style={styles.labelOther}>Other</Text>
        <Text style={styles.labelViewAll}>View all</Text>
      </View>
      <View style={styles.otherView}>
        <View style={styles.expensesView}>
          <Text style={styles.labelExpenses}>Expenses</Text>
          <Text style={styles.expensesDate}>01 June 2021 - 16 June 2021</Text>
          <Text style={styles.amount}>$4.570.80</Text>
        </View>
        <View style={styles.chart}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
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
  otherView: {
    backgroundColor: 'rgba(28, 28, 30, 0.5)',
    borderRadius: 25,
    padding: '5%',
    marginTop: '3%',
    flexDirection: 'column',
  },
  expensesView: {},
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
  chart: {},
});

export default OtherScreen;
