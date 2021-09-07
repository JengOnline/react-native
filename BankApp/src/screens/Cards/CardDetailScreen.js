import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Animated,
} from 'react-native';
import DebitCardScreen from './DebitCardScreen';
import ActionSheetScreen from './ActionSheetScreen';

HEADER_MAX_HEIGHT = 184;
HEADER_MIN_HEIGHT = 100;
const HEADER_HEIGHT = 100;

const CardDetailScreen = () => {
  const scrollY = new Animated.Value(0);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const headerY = diffClampScrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });
  const headerZindex = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <ImageBackground
      source={require('../../images/BG.png')}
      resizeMode="cover"
      style={styles.image}>
      <SafeAreaView style={styles.container}>
        <Animated.ScrollView
          bounces={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: false},
          )}>
          <Animated.View
            style={{
              height: headerHeight,
              zIndex: 1000,
              elevation: 1000,
              transform: [{translateY: headerY}],
              left: '-7%',
            }}>
            <DebitCardScreen />
          </Animated.View>
          <ActionSheetScreen />
        </Animated.ScrollView>
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
    flex: 1,
  },
  debitCardView: {
    width: 335,
    marginLeft: '5%',
    flex: 1,
  },
});

export default CardDetailScreen;
