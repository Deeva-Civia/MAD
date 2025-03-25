import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const Exercise4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <View style={styles.kotakWrapper}>
          <View style={styles.kotakHitam} />
          <View style={styles.kotakKuning} />
          <View style={styles.kotakHitam} />
        </View>
      </View>
      <View style={styles.subContainer2}>
        <Image
          style={styles.img}
          source={require('./assets/logo-with-motto-3.png')}
        />
      </View>
      <View style={styles.subContainer3}>
        <View style={styles.kotakHitam} />
        <View style={styles.kotakKuning} />
        <View style={styles.kotakHitam} />
      </View>
    </View>
  );
};

export default Exercise4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  kotakWrapper: {
    flexDirection: 'row',
    gap: 15,
  },
  subContainer1: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  subContainer2: {
    backgroundColor: 'white',
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer3: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  kotakHitam: {
    backgroundColor: 'black',
    height: 100,
    width: 100,
  },
  kotakKuning: {
    backgroundColor: 'yellow',
    height: 100,
    width: 100,
  },
  img: {
    width: 380,
    height: 85,
  },
});
