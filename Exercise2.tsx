import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

const Exercise2 = () => {
  return (
    <View style={styles.container}>
      {/* View Left */}
      <View style={styles.viewLeft}>
        <View style={styles.subtitleCardLeftContainer}>
          <TextInput style={styles.input} placeholder="Comment here.." />
          <TouchableOpacity style={styles.submit} activeOpacity={0.5}>
            <Text style={styles.textSubmit}>Submit</Text>
          </TouchableOpacity>
          <View style={styles.subtitleCardSmall}>
            <Text style={styles.isi}>EDUCATION</Text>
          </View>
          <View style={styles.skillContainer}>
            <View style={styles.isi2Container}>
              <Text style={styles.isiTahun}>(2022 - Now)</Text>
              <Text style={styles.isi2}>UNIVERSITAS KLABAT</Text>
            </View>
          </View>
          <View style={styles.subtitleCardSmall}>
            <Text style={styles.isi}>SKILL</Text>
          </View>
          <View style={styles.skillContainer}>
            <View style={styles.isi2Container}>
              <Text style={styles.isi2}>Programming</Text>
              <Text style={styles.isiTahun}>
                Proficient in Python, PHP, SQL, JavaScript, HTML, and CSS to
                develop functional and efficient solutions for web and software
                projects.
              </Text>
            </View>
            <View style={styles.isi2Container}>
              <Text style={styles.isi2}>Design Tools</Text>
              <Text style={styles.isiTahun}>
                Experienced in using Figma, Canva, Visual Studio, and XAMPP to
                create visually stunning designs and streamline development
                workflows.
              </Text>
            </View>
            <View style={styles.isi2Container}>
              <Text style={styles.isi2}>Project Management</Text>
              <Text style={styles.isiTahun}>
                Skilled in creating and managing Gantt charts, performing cost
                analysis, and calculating Break-Even Points (BEP) for effective
                project execution.
              </Text>
            </View>
            <View style={styles.isi2Container}>
              <Text style={styles.isi2}>Leadership</Text>
              <Text style={styles.isiTahun}>
                Proven ability to lead and inspire teams, driving success in
                various projects and large-scale events through effective
                communication and coordination.
              </Text>
            </View>
          </View>
          <View style={styles.subtitleCardSmall}>
            <Text style={styles.isi}>CONTACT</Text>
          </View>
          <View style={styles.logoContainer}>
            <TouchableOpacity style={styles.button} activeOpacity={0.5}>
              <Image
                style={styles.logo}
                source={require('./assets/whatsapp.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={0.5}>
              <Image
                style={styles.logo}
                source={require('./assets/instagram.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={0.5}>
              <Image
                style={styles.logo}
                source={require('./assets/linkedin.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* View*/}
      <View style={styles.view}>
        <View style={styles.subtitleCardRightContainer}>
          <View style={styles.subtitleCardRightSmall}>
            <Text style={styles.isiRight}>ABOUT</Text>
          </View>
          <View style={styles.isi2RightContainer}>
            <Text style={styles.isi2Right}>
              "An enthusiastic Computer Science student focusing on Web
              Development and UI/UX design. Combining technical knowledge with
              creativity to create engaging and functional digital experiences.
              Currently working on personal and collaborative projects to
              strengthen my portfolio. Always eager to learn new technologies
              and keep up with the latest trends in Web Design."
            </Text>
          </View>
          <View style={styles.subtitleCardRightSmall}>
            <Text style={styles.isiRight}>EXPERIENCE</Text>
          </View>
          <View style={styles.experienceContainer}>
            <View style={styles.experienceSubContainer}>
              <Text style={styles.isiTahunRight}>(Aug 2024 - Now)</Text>
              <Text style={styles.isi2Right}>
                AWS Back-end Academy (Dicoding)
              </Text>
            </View>
            <View style={styles.experienceSubContainer}>
              <Text style={styles.isiTahunRight}>(Aug 2024 - Now)</Text>
              <Text style={styles.isi2Right}>
                SENAT & BEM Fakultas Ilmu Komputer - SENAT Pendidikan & BEM
                Tingkat 3 (Universitas Klabat )
              </Text>
            </View>
            <View style={styles.experienceSubContainer}>
              <Text style={styles.isiTahunRight}>(Sep 2024 - Dec 2024)</Text>
              <Text style={styles.isi2Right}>
                IDCamp - React Developer (Dicoding)
              </Text>
            </View>
          </View>
          <View style={styles.subtitleCardRightSmall}>
            <Text style={styles.isiRight}>SERTIFICATE</Text>
          </View>
          <View style={styles.sertifikatContainer}>
            <ScrollView showsVerticalScrollIndicator={true}>
              <Image
                style={styles.imgCertificate}
                source={require('./assets/sertif2.png')}
              />
              <Image
                style={styles.imgCertificate}
                source={require('./assets/sertif1.png')}
              />
              <Image
                style={styles.imgCertificate}
                source={require('./assets/sertif3.png')}
              />
            </ScrollView>
            <Text style={styles.info}>
              Scroll down on the certificate to see more..
            </Text>
          </View>
        </View>
      </View>

      {/* View Right */}
      <View style={styles.viewRight} />

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image style={styles.img} source={require('./assets/Deeva.jpeg')} />
        <View style={styles.textCard}>
          <Text style={styles.title}>DEEVA CIVIA AULIA</Text>
          <Text style={styles.title}>LOLONG</Text>
          <Text style={styles.subtitle}>Front-end Developer</Text>
        </View>
      </View>
    </View>
  );
};

export default Exercise2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    position: 'relative',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderTopStartRadius: 100,
    borderBottomStartRadius: 100,
    padding: 10,
    position: 'absolute',
    top: 33,
    left: '5%',
    width: 392,
    zIndex: 50,
    elevation: 6,
  },
  textCard: {
    marginLeft: 25,
  },
  subtitleCardLeftContainer: {
    marginTop: 160,
    alignItems: 'center',
  },
  subtitleCardRightContainer: {
    marginTop: 180,
    alignItems: 'center',
    width: '100%',
  },
  subtitleCardSmall: {
    backgroundColor: '#F8FAFC',
    marginTop: 8,
    borderRadius: 10,
    padding: 3,
    width: 130,
  },
  subtitleCardRightSmall: {
    backgroundColor: '#00879E',
    borderRadius: 10,
    padding: 5,
    width: 145,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: '#27445D',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 17,
    color: '#00879E',
    textAlign: 'left',
  },
  viewLeft: {
    backgroundColor: '#00879E',
    padding: 20,
    borderTopEndRadius: 40,
    borderBottomEndRadius: 40,
    width: '40%',
    height: '95%',
    position: 'absolute',
    left: 0,
    top: '1%',
    zIndex: 40,
    elevation: 6,
  },
  view: {
    backgroundColor: '#F8FAFC',
    padding: 5,
    width: '58%',
    height: '95%',
    position: 'absolute',
    right: '2%',
    top: '2%',
    zIndex: 40,
  },
  viewRight: {
    backgroundColor: '#00879E',
    padding: 20,
    borderBottomStartRadius: 40,
    width: '1%',
    height: '96%',
    position: 'absolute',
    right: -28,
    bottom: '0%',
    zIndex: 40,
    elevation: 6,
  },
  isi: {
    fontSize: 15,
    fontWeight: '800',
    color: '#00879E',
    textAlign: 'center',
  },
  isi2: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
    textAlign: 'left',
  },
  isiTahun: {
    fontSize: 9,
    color: '#F8FAFC',
    marginTop: 1,
  },
  isiRight: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'center',
  },
  isi2Right: {
    fontSize: 10,
    fontWeight: '500',
    color: '#00879E',
    textAlign: 'justify',
  },
  isiTahunRight: {
    fontSize: 9,
    color: '#00879E',
  },
  isi2Container: {
    marginTop: 6,
    borderLeftWidth: 1,
    borderLeftColor: 'white',
    paddingLeft: 8,
    width: '100%',
    marginRight: 14,
  },
  isi2RightContainer: {
    marginTop: 12,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 22,
    paddingLeft: 5,
    paddingRight: 7,
    width: '90%',
  },
  experienceSubContainer: {
    marginBottom: 5,
    marginLeft: 7,
    marginRight: 22,
    paddingLeft: 8,
    paddingRight: 7,
    width: '90%',
    borderLeftWidth: 1,
    borderLeftColor: '#00879E',
  },
  img: {
    height: 125,
    width: 125,
    borderRadius: 100,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 10,
    width: 25,
    height: 25,
    marginLeft: 8,
    marginRight: 11,
  },
  logoContainer: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 12,
  },
  logo: {
    width: 25,
    height: 25,
    borderRadius: 8,
  },
  experienceContainer: {
    marginTop: 12,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 5,
  },
  skillContainer: {
    marginTop: 5,
    marginBottom: 12,
    width: 145,
  },
  sertifikatContainer: {
    marginTop: 12,
    width: 200,
    height: 147,
    backgroundColor: '#F8FAFC',
  },
  imgCertificate: {
    marginBottom: 10,
    width: 190,
    height: 130,
  },
  info: {
    marginTop: 3,
    fontSize: 10,
    color: '#00879E',
  },
  input: {
    backgroundColor: 'white',
    marginTop: 9,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    fontSize: 13,
    borderRadius: 6,
    width: 143,
    height: 30,
  },
  submit: {
    backgroundColor: '#27445D',
    marginTop: 5,
    marginBottom: 11,
    borderRadius: 5,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 80,
    elevation: 6,
    width: 60,
  },
  textSubmit: {
    textAlign: 'center',
    fontSize: 13,
    color: 'white',
  },
});
