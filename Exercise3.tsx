import React from 'react';
import {StyleSheet, View} from 'react-native';
import Input from './components/Input';
import Button from './components/Button';
import Tittle from './components/Tittle';

const Exercise3 = () => {
  return (
    <>
      <View style={styles.container}>
        <Tittle label="Wellcome Deeva" color="blue" />
        <Input label="Username" placeholder="Masukkan username anda" />
        <Input label="Password" placeholder="Masukkan password anda" />
        <Button label="Sign In" color="#196bb8" />
        <Button label="Create a new password" color="black" />
      </View>
    </>
  );
};

export default Exercise3;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  subContainer: {
    marginBottom: 25,
  },
});
