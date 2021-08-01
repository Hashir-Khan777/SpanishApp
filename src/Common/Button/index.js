import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, TYPO} from '../../Styles';

const Button = ({children, labelStyle, buttonStyle, onPress}) => (
  <TouchableOpacity
    style={[styles.button, buttonStyle]}
    activeOpacity={0.7}
    onPress={onPress}>
    <Text style={[styles.label, labelStyle]}>{children}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.LIGHT_PURPLE,
    borderRadius: 10,
    paddingVertical: TYPO.PADDING_VERTICAL_5,
  },
  label: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: TYPO.FONT_SIZE_18,
    fontFamily: TYPO.FONT_FAMILY_BOLD,
  },
});
