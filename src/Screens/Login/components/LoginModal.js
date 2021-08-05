import React, {useState} from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import {Input, Text} from '../../../Common';
import {Colors, TYPO} from '../../../Styles';
import RadioForm from 'react-native-simple-radio-button';
import {Button} from './../../../Common';

var radio_props = [
  {label: 'SI', value: 0},
  {label: 'NO', value: 1},
];

const LoginModal = ({visible, setVisible}) => {
  const [value, setValue] = useState(0);
  return (
    <Modal transparent visible={visible}>
      <View style={styles.main}>
        <View style={styles.popUp}>
          <View style={styles.modalHeader}>
            <Text textStyle={styles.center}>¡BIENVENIDO!</Text>
          </View>
          <View style={styles.modalBody}>
            <Text textStyle={styles.bodyText}>
              En PsicoHelp cuidamos tu privacidad, ¿quieres cambiar tu nickname?
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={value}
              formHorizontal
              animation
              onPress={value => setValue(value)}
            />
            <Input inputStyle={styles.input} />
            <Button onPress={() => setVisible(false)}>Guardar cambios</Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LoginModal;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popUp: {
    backgroundColor: '#F0EFF0',
    width: '90%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.LIGHT_PURPLE,
    borderRadius: 10,
  },
  modalHeader: {
    backgroundColor: Colors.LIGHT_PURPLE,
    paddingVertical: TYPO.PADDING_VERTICAL_10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  center: {
    textAlign: 'center',
    color: Colors.WHITE,
  },
  modalBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    textAlign: 'center',
    fontSize: TYPO.FONT_SIZE_16,
    width: '70%',
    marginVertical: TYPO.MARGIN_VERTICAL_20,
  },
  input: {
    backgroundColor: 'transparent',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    margin: 10,
    width: '90%',
  },
});
