import { View, StyleSheet } from 'react-native';
import React from 'react';
import Colours from '../Assests/Common/Colors';
import wholeData from '../Assests/Jsons/wholeData.json';
import ListMenu2 from '../Assests/Common/ListMenu2';
import Header from '../Assests/Common/Header';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import InputSearch from '../Assests/Common/InputSearch';
import { RootStackParamList } from '../navigation/types';
const VG30 = '../Assests/Images/icons/cylinder.png';
const VG40 = '../Assests/Images/icons/VG-40.png';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const BitumenScreen = () => {
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
      // case 'VG-10':
      //   navigation.navigate('InfoScreen', { name: itemName });
      //   break;
      // case 'VG-30':
      //   navigation.navigate('InfoScreen', { name: itemName });
      //   break;
      // case 'VG-40':
      //   navigation.navigate('InfoScreen', { name: itemName });
      //   break;
      default:
        navigation.navigate('InfoScreen', { name: itemName });
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Header caption="Bitumen" />
      <InputSearch />
      <ListMenu2
        items={wholeData.Bitumen}
        getIcons={getIcons}
        itemHeight={170}
        png={true}
        navigate={navigate}
      />
    </View>
  );
};

export default BitumenScreen;

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
