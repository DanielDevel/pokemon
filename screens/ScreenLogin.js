import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Button,
  View,
  Alert,
  Text,
} from 'react-native';
import Colors from '../constants/Colors';
import Input from '../constants/Input';

const ScreenLogin = ({navigation}) => {
  const [email, setEmail] = useState('user@demo.com');
  const [password, setPassword] = useState('password@demo.com');
  const loginCheck = () => {
    if (email === 'user@demo.com' && password === 'password@demo.com') {
      navigation.replace('Homes');
    } else {
      Alert.alert('Has Problem', 'Please Check Your Email And Password', [
        {style: 'default', text: 'OK'},
      ]);
    }
  };
  return (
    <View style={styles.cViewMain}>
      <ImageBackground
        style={styles.cImage}
        resizeMode="contain"
        source={require('./../assets/Images/bg-login.jpg')}>
        <View style={styles.cFormMain}>
          <View style={styles.cFormOne}>
            <Text style={styles.cFormTextOne}>Sign in</Text>
            <Text style={styles.cFormTextTwo}>
              Login to manage your account
            </Text>
            <Input
              onChangeText={setEmail}
              value={email}
              placeholder="user@demo.com"
            />
            <Input
              onChangeText={setPassword}
              value={password}
              placeholder="password@demo.com"
            />
            <View style={styles.cFormButton}>
              <Button title="Sign in" onPress={loginCheck} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ScreenLogin;

const styles = StyleSheet.create({
  cViewMain: {
    flex: 1,
  },
  cImage: {
    flex: 1,
  },
  cFormMain: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(33, 33, 33,0.9)',
    height: '100%',
  },
  cFormOne: {
    borderRadius: 8,
    padding: 20,
    justifyContent: 'space-between',
    height: '50%',
    width: '80%',
  },
  cFormTextOne: {
    color: Colors.grey,
    fontSize: 21,
  },
  cFormTextTwo: {
    color: Colors.grey,
    fontSize: 15,
  },
  cFormButton: {
    borderRadius: 8,
    marginVertical: 5,
  },
});
