import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Input from './components/Input';
import Button from './components/Button';
import Tittle from './components/Tittle';

const Exercise6 = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const onSubmit = () => {
    console.log(
      `Name: ${name}\nUsername: ${username}\nEmail: ${email}\nAddress: ${address}\nPhone Number: ${phoneNumber}`,
    );
  };
  return (
    <>
      <View style={styles.container}>
        <Tittle label="Registration" color="black" />
        <View style={styles.subContainer}>
          <Input
            label="Name"
            placeholder="Masukkan nama lengkap anda"
            onChangeText={e => setName(e)}
          />
        </View>
        <View style={styles.subContainer}>
          <Input
            label="Username"
            placeholder="Masukkan username anda"
            onChangeText={e => setUsername(e)}
          />
        </View>
        <View style={styles.subContainer}>
          <Input
            label="Email"
            placeholder="Masukkan email anda"
            onChangeText={e => setEmail(e)}
          />
        </View>
        <View style={styles.subContainer}>
          <Input
            label="Address"
            placeholder="Masukkan alamat anda"
            onChangeText={e => setAddress(e)}
          />
        </View>
        <View style={styles.subContainer}>
          <Input
            label="Phone Number"
            placeholder="Masukkan nomor telepon anda"
            onChangeText={e => setPhoneNumber(e)}
            keyboardType="numeric"
          />
        </View>
        <Button label="Register" color="purple" onPress={onSubmit} />
      </View>
    </>
  );
};

export default Exercise6;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  subContainer: {
    marginBottom: 20,
  },
});
