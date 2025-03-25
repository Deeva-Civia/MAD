// 1. import component react-native
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// 2. buat component
const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Basic React Native</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput style={styles.input} placeholder="Enter your email" />
        <TextInput style={styles.input} placeholder="Enter your password" />
        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <Text style={styles.subTitle}>Image From URI</Text>
        <Image
          style={styles.img1}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Text style={styles.subTitle}>Image From Local Directory</Text>
        <Image style={styles.img2} source={require('./assets/logo.png')} />
        <Text style={styles.subTitle}>Image From Base64</Text>
        <Image
          style={styles.img1}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </ScrollView>
    </>
  );
};

// 3. export component
export default App;

// 4. Styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 5,
    padding: 20,
    margin: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    color: 'yellow',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 30,
    marginLeft: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
  img1: {
    height: 300,
    width: 300,
    marginLeft: 20,
  },
  img2: {
    marginLeft: 20,
    height: 233 / 3,
    width: 1024 / 3,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    padding: 20,
    fontSize: 30,
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'blue',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
});
