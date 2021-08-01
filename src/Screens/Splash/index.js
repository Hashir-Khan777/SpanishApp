import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, Text} from '../../Common';
import {Colors, TYPO} from '../../Styles';
import {logo} from '../../Assets/Icons';
import {CommonActions} from '@react-navigation/routers';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(
      () =>
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Login'}],
          }),
        ),
      3000,
    );
  }, []);

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

export default SplashScreen;

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
