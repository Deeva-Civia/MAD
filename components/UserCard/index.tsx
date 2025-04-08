import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const UserCard = ({item}) => {
  return (
    <View style={styles.userCard}>
      <Image style={styles.avatar} source={{uri: item.avatar}} />
      <View style={styles.textContainer}>
        <View style={styles.name}>
          <Text style={styles.lastName}>{item.last_name}</Text>
          <Text style={styles.firstName}> {item.first_name}</Text>
        </View>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 16,
    padding: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'gray',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  name: {
    flexDirection: 'row',
  },
  firstName: {
    color: 'black',
    fontSize: 20,
  },
  lastName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  email: {
    color: 'black',
    fontSize: 17,
  },
});
