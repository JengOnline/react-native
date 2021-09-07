import Carousel from 'react-native-anchor-carousel';
import React, {useState} from 'react';
import {
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  ImageBackground,
} from 'react-native';
import PaginationDot from 'react-native-animated-pagination-dot';

export default DebitCardScreen = () => {
  const windowWidth = useWindowDimensions().width;
  const styles = StyleSheet.create({
    carousel: {
      borderRadius: 20,
    },
    debitCardView: {
      padding: 20,
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1,
    },
    debitCardTopView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    salaryText: {
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 15,
      color: 'rgba(255,255,255,0.6)',
    },
    amountText: {
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 28,
      color: '#fff',
    },
    imgMasterCard: {
      width: 45,
      height: 35.92,
    },
    cardNumber: {
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 17,
      color: 'rgba(255,255,255,0.6)',
    },
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }
  const getImageSource = index => {
    if (index %2 == 0) {
      return require('../../images/Debit-Card.png');
    } else {
      return require('../../images/Debit-Card-2.png');
    }
  };
  const carouselRef = React.useRef(null);
  const NUMBER_OF_ITEM = 5;

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        <ImageBackground
          source={getImageSource(index)}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.debitCardView}>
            <View style={styles.debitCardTopView}>
              <View>
                <Text style={styles.salaryText}>Salary</Text>
                <Text style={styles.amountText}>$4.570.80</Text>
              </View>
              <Image
                source={require('../../images/mastercard_logo.png')}
                style={styles.imgMasterCard}
              />
            </View>
            <Text style={styles.cardNumber}>**** **** **** 2468</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, marginLeft: '20%', alignItems: 'center'}}>
      <Carousel
        ref={carouselRef}
        data={Array(NUMBER_OF_ITEM).fill(0)}
        renderItem={renderItem}
        style={styles.carousel}
        itemWidth={windowWidth * 0.9}
        containerWidth={windowWidth}
        separatorWidth={0}
        slideStyle={{borderRadius:20}}
        onScrollEnd={handleCarouselScrollEnd}
      />
      <PaginationDot
        activeDotColor="red"
        curPage={currentIndex}
        maxPage={NUMBER_OF_ITEM}
        sizeRatio={1.2}
      />
    </View>
  );
};
