import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackLogo} from '../../../assets';

const Header = ({title, displayBackButton}) => {
  return (
    <View style={styles.container}>
      {displayBackButton && (
        <TouchableOpacity style={styles.backButton}>
          <BackLogo />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    paddingVertical: 38,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    marginLeft: 26,
  },
});
