import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useRef } from 'react';

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  background1: {
    backgroundColor: '#3498db',
  },
  background2: {
    backgroundColor: '#2ecc71',
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
      <View style={[styles.slide, styles.background1]}>
        <Text style={styles.text}>Slide 1</Text>
        <TouchableOpacity onPress={swipeToEnd}>
            <Text>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.slide, styles.background2]}>
        <Text style={styles.text}>Slide 2</Text>
      </View>
      <View style={[styles.slide, styles.background3]}>
        <Text style={styles.text}>Slide 3</Text>
      </View>
    </Swiper>
  );
};

export default ScrollScreen;
