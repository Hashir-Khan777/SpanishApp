import React from 'react';
import {StyleSheet, View} from 'react-native';
import {logo} from '../../Assets/Icons';
import {Colors, TYPO} from '../../Styles';
import {Icon, Text} from './../../Common';

const Login = () => {
  return (
    <View style={styles.main}>
      <Icon name={logo} iconHeight={80} />
      <View style={styles.logo}>
        <Text textStyle={styles.psico}>PSICO</Text>
        <Text textStyle={styles.help}>HELP</Text>
      </View>
      <Text textStyle={styles.tagLine}>SOPORTE PISICOLOGICO</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
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
});
