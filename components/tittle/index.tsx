import {StyleSheet, Text} from 'react-native';
import React from 'react';

const Tittle = ({label, color}) => {
  return (
    <>
      <Text style={styles.title(color)}>{label}</Text>
    </>
  );
};

export default Tittle;

const styles = StyleSheet.create({
  title: color => ({
    color: color,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 35,
  }),
});
