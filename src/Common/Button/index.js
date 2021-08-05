import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, TYPO} from '../../Styles';

const Button = ({children, labelStyle, buttonStyle, onPress, icon}) => (
  <TouchableOpacity
    style={[styles.button, buttonStyle]}
    activeOpacity={0.7}
    onPress={onPress}>
    {icon}
    <Text style={[styles.label, labelStyle]}>{children}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.LIGHT_PURPLE,
    borderRadius: 10,
    padding: TYPO.PADDING_VERTICAL_10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontFamily: TYPO.FONT_FAMILY_MEDIUM,
  },
});
