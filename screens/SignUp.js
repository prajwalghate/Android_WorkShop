import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import colors from '../components/colors';

import auth from '@react-native-firebase/auth';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default function SignUp({navigation}) {
  const [name, setname] = useState('');
  const [mobile, setmobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const createAccount = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View style={styles.main}>
      <View style={{width: '100%', paddingLeft: 20}}>
        <Text style={styles.hey}>Hey</Text>
        <Text style={styles.hey}>There</Text>
      </View>
      <View>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#000"
            value={name}
            onChangeText={val => setname(val)}
            underlineColorAndroid="transparent"></TextInput>
        </View>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={styles.input}
            placeholder="Mobile"
            placeholderTextColor="#000"
            value={mobile}
            onChangeText={val => setmobile(val)}
            underlineColorAndroid="transparent"></TextInput>
        </View>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#000"
            value={email}
            onChangeText={val => setEmail(val)}
            underlineColorAndroid="transparent"></TextInput>
        </View>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#000"
            value={password}
            secureTextEntry
            onChangeText={val => setPassword(val)}
            underlineColorAndroid="transparent"></TextInput>
        </View>
      </View>
      <View style={styles.loginButton}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#fff',
              fontSize: 35,
            }}>
            Register
          </Text>
        </View>
        <TouchableOpacity onPress={() => createAccount()}>
          <View style={styles.loginIcon}>
            <Image
              source={require('../assets/arrow.png')}
              style={{height: 40, width: 40}}></Image>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginTop: height * 0.05,
          marginRight: 50,
        }}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Already Have an Account ?
          </Text>
          <Text
            onPress={() => navigation.navigate('LogIn')}
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Login
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00cba9',
  },
  button: {
    height: 30,
    width: 200,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  input: {
    marginTop: height * 0.02,
    width: width - 50,
    borderBottomWidth: 1.5,
  },
  hey: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 35,
  },
  loginButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 50,
  },
  loginIcon: {
    height: 50,
    width: 50,
    borderRadius: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
