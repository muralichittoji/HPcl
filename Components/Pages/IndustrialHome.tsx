import { View, StyleSheet } from 'react-native';
import React from 'react';
import Colours from '../Assests/Common/Colors';
import wholeData from '../Assests/Jsons/wholeData.json';
import ListMenu from '../Assests/Common/ListMenu';
import Header from '../Assests/Common/Header';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import InputSearch from '../Assests/Common/InputSearch';
const VG30 = '../Assests/Images/icons/bitumens.png';
const VG40 = '../Assests/Images/icons/VG-40.png';

export type RootStackParamList = {
  InfoScreen: { name: string };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const IndustrialHome = () => {
  const navigation = useNavigation<NavigationProp>();

  const getIcons = (itemName: String) => {
    switch (itemName) {
      case 'VG-10':
        return require(VG30);
      case 'VG-30':
        return require(VG30);
      case 'VG-40':
        return require(VG30);
      default:
        return require(VG40);
    }
  };

  // Navigation
  const navigate = (itemName: string) => {
    switch (itemName) {
      case 'VG-10':
        navigation.navigate('InfoScreen', { name: itemName });
        break;
      case 'VG-30':
        navigation.navigate('InfoScreen', { name: itemName });
        break;
      case 'VG-40':
        navigation.navigate('InfoScreen', { name: itemName });
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Header caption="Bitumen" />
      <InputSearch />
      <ListMenu
        items={wholeData.Bitumen}
        getIcons={getIcons}
        itemHeight={170}
        png={true}
        navigate={navigate}
      />
    </View>
  );
};

export default IndustrialHome;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    textAlign: 'center',
    color: Colours.blueDark,
    fontSize: 30,
    fontWeight: '500',
  },
  logo: {
    width: 70,
    height: 70,
    margin: 10,
  },
});
