import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Colors from './Colors';
const Input = props => {
  return (
    <View style={{...styles.cViewFormInput, ...styles.props}}>
      <TextInput {...props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  cViewFormInput: {
    backgroundColor: Colors.grey,
    borderColor: Colors.blue_grey,
    borderWidth: 1,
    elevation: 8,
    borderRadius: 4,
    marginVertical: 15,
  },
});
