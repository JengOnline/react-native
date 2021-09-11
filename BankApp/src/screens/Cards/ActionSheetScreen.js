import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LineChartScreen from './LineChartScreen';

const ActionSheetScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  handleIndexChange = index => {
    setCurrentPage(index);
  };

  const jsonData = require('../../mockTransaction.json');
  const [mockTransaction, setMockTransaction] = useState(jsonData);

  console.log(mockTransaction);
  return (
    <View style={styles.container}>
      <View style={styles.rectangleShapeView} />
      <View style={styles.segmentedView}>
        <SegmentedControlTab
          values={['Card Detail', 'Transaction']}
          selectedIndex={currentPage}
          tabStyle={styles.tabStyle}
          tabTextStyle={styles.tabTextStyle}
          activeTabStyle={styles.tabActiveStyle}
          onTabPress={handleIndexChange}
        />
      </View>

      {currentPage === 0 ? (
        <View>
          <View style={styles.infomationView}>
            <Text style={styles.infomationText}>INFORMATION</Text>
            <View style={styles.detailView}>
              <View style={styles.subDeatilView}>
                <Text style={styles.balanceText}>$ 24,420,000</Text>
                <Text style={styles.detailText}>Active Balance</Text>
              </View>
              <Text style={styles.showCVVText}>
                Show CVV
                <MaterialCommunityIcons name="lock" size={30} />
              </Text>
            </View>
            <View style={styles.detailView}>
              <View style={styles.subDeatilView}>
                <Text style={styles.balanceText}>$ 100,000,000</Text>
                <Text style={styles.detailText}>Sigle Purchase Limit</Text>
              </View>
              <Text style={styles.dotText}>...</Text>
            </View>
            <View style={styles.detailView}>
              <View style={styles.subDeatilView}>
                <Text style={styles.balanceText}>$ 10,000,000</Text>
                <Text style={styles.detailText}>ATM Withdraw Limit</Text>
              </View>
              <Text style={styles.dotText}>...</Text>
            </View>
            <View
              style={{backgroundColor: '#38383A', height: 1, marginTop: '5%'}}
            />
          </View>
          <View style={styles.settingView}>
            <Text style={styles.settingText}>SETTINGS</Text>
            <View style={styles.settingActionView}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={styles.iconCard}
                  source={require('../../icon/change-pin.png')}
                />
                <Text style={styles.settingActionText}>Change pin</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={32}
                style={styles.iconChevronRight}
              />
            </View>
            <View style={styles.settingActionView}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={styles.iconCard}
                  source={require('../../icon/block-card.png')}
                />
                <Text style={styles.settingActionText}>Block card</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={32}
                style={styles.iconChevronRight}
              />
            </View>
            <View style={styles.settingActionView}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={styles.iconCard}
                  source={require('../../icon/change-limit.png')}
                />
                <Text style={styles.settingActionText}>Change limit</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={32}
                style={styles.iconChevronRight}
              />
            </View>
            <View style={{height: 90}} />
          </View>
        </View>
      ) : (
        <View style={styles.transactionView}>
          <LineChartScreen />

          {mockTransaction.map(d => (
            <View>
              <Text style={styles.textDay}>{d.day}</Text>
              {d.transaction.map(data => (
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Image
                    style={{alignSelf: 'flex-end', marginRight: '10%'}}
                    source={
                      data.flag == 'up'
                        ? require('../../icon/cell-up-icon.png')
                        : require('../../icon/cell-down-icon.png')
                    }
                  />
                  <View style={{flex: 1}}>
                    <Text style={styles.balanceText}>{data.name}</Text>
                    <Text style={styles.detailText}>{data.detail}</Text>
                  </View>
                  <Text style={styles.transactionAmountText}>
                    {data.amount}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(30, 33, 33, 0.75)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  rectangleShapeView: {
    width: 23,
    height: 4,
    backgroundColor: '#2c2c2e',
    alignSelf: 'center',
    borderRadius: 20,
  },
  segmentedView: {
    marginTop: '2%',
    backgroundColor: '#000',
    borderRadius: 20,
  },
  tabStyle: {
    backgroundColor: '#000',
    borderRadius: 5,
    borderColor: '#000',
    height: 28,
  },
  tabTextStyle: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'SFProDisplay-Regular',
  },
  tabActiveStyle: {
    backgroundColor: '#1c1c1e',
  },
  infomationView: {
    marginTop: '5%',
  },
  infomationText: {
    color: 'rgba(235, 235, 245, 0.6)',
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 13,
  },
  detailView: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subDeatilView: {},
  balanceText: {
    fontSize: 17,
    fontFamily: 'SFProDisplay-Regular',
    color: '#fff',
    marginTop: '10%',
  },
  detailText: {
    fontSize: 12,
    fontFamily: 'SFProDisplay-Regular',
    color: 'rgba(235, 235, 245, 0.6)',
  },
  showCVVText: {
    fontSize: 17,
    fontFamily: 'SFProDisplay-Semibold',
    color: '#E42C66',
  },
  dotText: {
    color: '#E42C66',
    fontSize: 20,
    fontFamily: 'SFProDisplay-Semibold',
  },
  settingView: {
    marginTop: '5%',
  },
  settingText: {
    color: 'rgba(235, 235, 245, 0.6)',
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 13,
  },
  settingActionView: {
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconCard: {
    width: 28,
    height: 28,
  },
  settingActionText: {
    fontFamily: 'SFProDisplay-Semibold',
    fontSize: 17,
    color: '#fff',
    marginLeft: '5%',
  },
  iconChevronRight: {
    color: '#3A3A3C',
  },
  transactionView: {
    flex: 1,
  },
  textDay: {
    fontSize: 13,
    fontFamily: 'SFProDisplay-regular',
    color: 'rgba(235,235,245,0.6)',
    marginTop:'5%'
  },
  transactionAmountText: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'SFProDisplay-Regular',
    alignSelf: 'center',
  },
});

export default ActionSheetScreen;
