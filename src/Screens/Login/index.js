import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {logo} from '../../Assets/Icons';
import {brain} from '../../Assets/Images';
import {Colors, TYPO} from '../../Styles';
import {Button, Icon, Text} from './../../Common';
import IonIcons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import LoginModal from './components/LoginModal';

const Login = () => {
  const [isSelected, setSelection] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <ScrollView>
      <ImageBackground style={styles.image} source={brain}>
        <View style={styles.main}>
          <Icon name={logo} iconHeight={80} />
          <View style={styles.logo}>
            <Text textStyle={styles.psico}>PSICO</Text>
            <Text textStyle={styles.help}>HELP</Text>
          </View>
          <Text textStyle={styles.tagLine}>SOPORTE PISICOLOGICO</Text>
          <View style={styles.signIn}>
            <Text>Iniciar Sesión / Registro</Text>
            <View style={styles.horizontalLine}></View>
            <View style={styles.button}>
              <Button
                onPress={() => setIsActive(!isActive)}
                icon={
                  <IonIcons
                    name="logo-facebook"
                    style={styles.icon}
                    size={20}
                    color="#fff"
                  />
                }>
                INICIO CON FACEBOOK
              </Button>
              <Button
                onPress={() => setIsActive(!isActive)}
                icon={
                  <IonIcons
                    name="logo-google"
                    style={styles.icon}
                    size={20}
                    color="#fff"
                  />
                }>
                INICIO CON GOOGLE
              </Button>
              <View style={styles.checkBox}>
                <Text textStyle={styles.checkBoxText}>
                  Acepto que soy mayor de edad y las condiciones de uso
                </Text>
                <CheckBox value={isSelected} onValueChange={setSelection} />
              </View>
              <View style={styles.mainSigninInButtons}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.siginInButtons}>
                  <Text textStyle={styles.center}>Usuario</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.siginInButtons}>
                  <Text textStyle={styles.center}>Contraseña</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Button>INICIAR SESIÓN</Button>
            <TouchableOpacity>
              <Text textStyle={styles.registerButton}>*QUIERO REGISTRARME</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <LoginModal visible={isActive} setVisible={setIsActive} />
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: TYPO.PADDING_HORIZONTAL_20,
    backgroundColor: Colors.BACKGROUND,
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  psico: {
    color: Colors.LIGHT_PURPLE,
    fontSize: 40,
    fontFamily: TYPO.FONT_FAMILY_BLACK,
  },
  help: {
    color: Colors.DARK_PURPLE,
    fontSize: 40,
    fontFamily: TYPO.FONT_FAMILY_BLACK,
  },
  tagLine: {
    fontSize: TYPO.FONT_SIZE_16,
    textAlign: 'center',
  },
  signIn: {
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontalLine: {
    alignSelf: 'center',
    backgroundColor: Colors.LIGHT_PURPLE,
    width: 150,
    height: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
  },
  checkBox: {
    flexDirection: 'row',
  },
  checkBoxText: {
    fontSize: TYPO.FONT_SIZE_16,
  },
  siginInButtons: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#707070',
    marginTop: 10,
    paddingVertical: TYPO.PADDING_VERTICAL_5,
    borderRadius: 10,
  },
  center: {
    textAlign: 'center',
    color: Colors.LIGHT_PURPLE,
  },
  mainSigninInButtons: {
    marginVertical: 30,
  },
  registerButton: {
    fontSize: TYPO.FONT_SIZE_12,
    color: Colors.LIGHT_PURPLE,
    marginTop: 30,
  },
});
