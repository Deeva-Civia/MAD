import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

const Input = ({label, placeholder, onChangeText, ...rest}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        {...rest}
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    color: 'black',
    fontSize: 17,
    fontWeight: '500',
  },
  input: {
    borderWidth: 2,
    borderColor: '#b8b8b8',
    marginTop: 6,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 13,
    borderRadius: 10,
    height: 50,
  },
});
