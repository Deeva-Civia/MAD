import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Tittle from './components/Tittle';
import UserCard from './components/UserCard';

const Exercise7 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?per_page=12')
      .then(res => setUsers(res.data.data));
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Tittle label="User List" color="black" />
        {users.map(item => (
          <UserCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Exercise7;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 16,
  },
});
