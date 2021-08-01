import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TYPO} from '../../Styles';

const CustomText = ({children, textStyle}) => (
  <Text style={[styles.text, textStyle]}>{children}</Text>
);

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontSize: TYPO.FONT_SIZE_20,
    fontFamily: TYPO.FONT_FAMILY_MEDIUM,
  },
});
