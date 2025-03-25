import React from 'react';
import {StyleSheet, View} from 'react-native';
import Input from './components/input';
import Button from './components/button';
import Tittle from './components/tittle';

const Exercise5 = () => {
  return (
    <View style={styles.container}>
      <Tittle label="Wellcome Deeva" color="blue" />
      <Input label="Username" placeholder="Masukkan username anda" />
      <Input label="Password" placeholder="Masukkan password anda" />
      <Button label="Sign In Google" color="red" />
      <Button label="Sign In Facebook" color="blue" />
      <Button label="Sign In Apple" color="black" />
    </View>
  );
};

export default Exercise5;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
