import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Colors, TYPO} from '../../Styles';

const Input = ({placeholder, inputStyle}) => (
  <TextInput
    placeholder={placeholder}
    placeholderTextColor={Colors.PLACEHOLDER}
    style={[styles.input, inputStyle]}
  />
);

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    textAlign: 'center',
    fontSize: TYPO.FONT_SIZE_20,
  },
});
