import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SvgXml} from 'react-native-svg';

const Icon = ({name, fill, iconStyle, iconHeight}) => (
  <View style={styles.main}>
    <SvgXml xml={name} fill={fill} style={iconStyle} height={iconHeight} />
  </View>
);

export default Icon;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
