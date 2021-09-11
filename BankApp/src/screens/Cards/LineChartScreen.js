import React, {useState} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const LineChartScreen = () => {
  return (
    <View style={styles.chartView}>
      <LineChart
        data={{
          labels: ['Jun', 'May', 'Apr', 'Mar', 'Feb', 'Jan'], //Array of labels [Jun 21,May 21,Apr 21,Mar 21,Feb 21,Jan 21]
          datasets: [
            {
              data: [20, 10, 40, 50, 60, 30],
              color: (opacity = 1) => `rgba(44,44,46,${opacity})`,
              strokeWidth: 0.5,
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={255}
        withInnerLines={false}
        chartConfig={{
          backgroundGradientFrom: 0,
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: 0,
          backgroundGradientToOpacity: 0,
          color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
          labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,
          backgroundColor: (opacity = 0) => `rgba(255,255,255,${opacity})`,
          strokeWidth: 2,
          propsForDots: {
            r: '0',
            strokeWidth: '2',
          },
        }}
        withHorizontalLabels={false}
        verticalLabelRotation={0}
        bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartView: {
    marginTop: '5%',
    alignItems: 'center',
  },
});

export default LineChartScreen;
