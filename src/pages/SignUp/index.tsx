import {StyleSheet, View, Image, Text} from 'react-native';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign Up" displayBackButton />
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <View style={styles.photoWrapper}>
          <View style={styles.imageContainer}>
            <View style={styles.imgContent}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Add</Text>
                <Text style={styles.label}>Photo</Text>
              </View>
            </View>
          </View>
        </View>
        <Gap height={16} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
  photoWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    width: 110,
    height: 110,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#8D92A3',
    borderRadius: 100,
    padding: 10,
  },
  imgContent: {
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: '#F0F0F0',
  },
  labelContainer: {
    marginVertical: 24,
  },
  label: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 300,
    fontSize: 14,
    color: '#8D92A3',
  },
});
