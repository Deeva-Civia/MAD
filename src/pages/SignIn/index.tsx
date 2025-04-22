import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button} from '../../components/atoms';

const SignIn = () => {
  return (
    <View>
      <Header />
      <TextInput />
      <TextInput />
      <Button />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
