import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../Assests/Common/Header';
import Colours from '../Assests/Common/Colors';

const { width } = Dimensions.get('window');

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Header caption="Welcome to Login" screen="Login" />
      <View
        style={{
          width: width,
          height: '65%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <View style={{ width: width }}>
          <TextInput placeholder="Username/email" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
          <TouchableOpacity style={styles.logBtn}>
            <Text style={styles.logText}>Login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.forgBtn}>
          <Text style={styles.forgText}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    margin: '5%',
    padding: 10,
    fontSize: 20,
  },
  logBtn: {
    width: '90%',
    margin: '5%',
    height: 40,
    backgroundColor: Colours.blueDark,
    padding: 5,
    borderRadius: 10,
  },
  logText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  forgBtn: {
    width: '90%',
    margin: '5%',
    height: 40,
    padding: 5,
  },
  forgText: {
    fontSize: 20,
    textAlign: 'center',
    color: Colours.blueDark,
    fontWeight: '600',
  },
});
