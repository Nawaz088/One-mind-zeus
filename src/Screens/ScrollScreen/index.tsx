import React from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useRef } from 'react';
import { Button } from '@rneui/themed';

// # image imports
import Imagebg1 from '../../theme/images/AdobeStock1.png';

// color imports
import {Colors} from '../../theme/colors/globalColors';

const BgColor = Colors.sliderColours.primary;
const styles = StyleSheet.create({
  wrapper: {
    height: '100%',

  },
  slide: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: `rgba(${BgColor}, 0.9)`,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  background3: {
    backgroundColor: '#e74c3c',
  },
  pagination: {
    bottom: 10,
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
});

const ScrollScreen: React.FC = () => {
  const swiperRef = useRef(null);

  const swipeToEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(2);
    }
  }

  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      paginationStyle={styles.pagination}
      ref={swiperRef}
      loop={false}
    >
      <ImageBackground source={Imagebg1} style={styles.slide}>
        <View style={[styles.overlay, styles.slide]}>

          <Text style={styles.text}>Slide 1</Text>
            <TouchableOpacity onPress={swipeToEnd}>
              <Text>Skip</Text>
            </TouchableOpacity>

        </View>
      </ImageBackground>
      <ImageBackground source={Imagebg1} style={styles.slide}>
          <View style={[styles.overlay, styles.slide]}>
            <Text style={styles.text}>Slide 2</Text>
          </View>
      </ImageBackground>
      <ImageBackground source={Imagebg1} style={styles.slide}>
          <View style={[styles.overlay, styles.slide]}>
            <Text style={styles.text}>Slide 3</Text>
          </View>
      </ImageBackground>
    </Swiper>
  );
};

export default ScrollScreen;
