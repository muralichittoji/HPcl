import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import React from 'react';
import Header from '../Assests/Common/Header';
import Colours from '../Assests/Common/Colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width } = Dimensions.get('window');

export type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Header caption="" screen="Login" />
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.content}>Your Petroleum Product Catalogue</Text>
          <Text style={styles.description}>
            Explore Motor Fuels, LPG, Lubricants, Industrial Fuels and more
          </Text>
          <TouchableOpacity
            style={styles.enterBtn}
            onPress={() => navigation.navigate('HomeScreen')}
          >
            <Text style={styles.enterText}>ENTER</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.loginText}>FOR SALES OFFICERS {'->'} LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  content: {
    textAlign: 'center',
    color: Colours.blueDark,
    fontSize: 45,
    fontWeight: '500',
    margin: 10,
  },
  description: {
    textAlign: 'center',
    color: '#555',
    fontSize: 25,
    fontWeight: '400',
    margin: 20,
  },
  enterBtn: {
    width: width - 40,
    marginVertical: 60,
    marginHorizontal: '5%',
    height: 70,
    backgroundColor: Colours.blueDeep,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  enterText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  loginText: {
    textAlign: 'center',
    color: Colours.blueDark,
    fontSize: 20,
    fontWeight: '400',
  },
  subContainer: {
    width: width,
    height: '70%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
