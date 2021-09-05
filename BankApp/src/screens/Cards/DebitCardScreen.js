import Carousel from 'react-native-anchor-carousel';
import React from 'react';
import {
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

export default DebitCardScreen = () => {
  const windowWidth = useWindowDimensions().width;
  const styles = StyleSheet.create({
    carousel: {
      flex: 1,
    },
  });

  const getImageSource = index => {
    if (index == 0) {
      return require('../../images/Debit-Card.png');
    } else {
      return require('../../images/Debit-Card-2.png');
    }
  };
  const carouselRef = React.useRef(null);
  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        <Image
          source={getImageSource(index)}
          resizeMode="cover"
          styles={{flex: 1}}></Image>
      </TouchableOpacity>
    );
  };
  return (
    <Carousel
      ref={carouselRef}
      data={Array(2).fill(0)}
      renderItem={renderItem}
      style={styles.carousel}
      itemWidth={windowWidth * 0.9}
      containerWidth={windowWidth}
      separatorWidth={0}
    />
  );
};
