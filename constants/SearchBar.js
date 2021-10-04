import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from './Colors';
const SearchBar = ({placeholder, onPress, onChangeText, value}) => {
  return (
    <View>
      <View style={styles.cViewFormInput}>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          style={styles.cInputText}
          placeholder={placeholder}
          placeholderTextColor="#51585a"
        />
        <TouchableNativeFeedback onPress={onPress}>
          <Icon name="search" type="font-awesome" color={Colors.blue} />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  cViewFormInput: {
    backgroundColor: Colors.grey,
    borderColor: Colors.blue_grey,
    borderWidth: 1,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  cInputText: {
    width: '90%',
    color: Colors.black,
    fontSize: 17,
  },
});
