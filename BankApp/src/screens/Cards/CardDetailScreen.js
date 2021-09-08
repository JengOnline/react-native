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

const CardDetailScreen = () => {
  const scrollY = new Animated.Value(0);
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });
  const [positionScrollY, setPositionScrollY] = useState(0);
  const handleScroll = event => {
    setPositionScrollY(event.nativeEvent.contentOffset.y);
  };
  return (
    <ImageBackground
      source={require('../../images/BG.png')}
      resizeMode="cover"
      style={styles.image}>
      <SafeAreaView style={styles.container}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: false, listener: event => handleScroll(event)},
          )}>
          <Animated.View
            style={{
              height: headerHeight,
              elevation: 1000,
              left: '-7%',
            }}>
            <DebitCardScreen
              hideCardNumber={positionScrollY !== 0 ? true : false}
            />
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
