import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../Assests/Common/Header';
import InputSearch from '../Assests/Common/InputSearch';
// import ListMenu from '../Assests/Common/ListMenu';
import wholeData from '../Assests/Jsons/wholeData.json';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import ListMenu2 from '../Assests/Common/ListMenu2';
import ListMenu from '../Assests/Common/ListMenu';
const fuelIcon = '../Assests/Images/icons/fuel_pump.png';

export type RootStackParamList = {
  InfoScreen: { name: string };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const FuelsHome = () => {
  const navigation = useNavigation<NavigationProp>();
  const navigate = (itemName: string) => {
    switch (itemName) {
      case 'Petrol':
        navigation.navigate('InfoScreen', { name: itemName });
        break;
      case 'Diesel':
        navigation.navigate('InfoScreen', { name: itemName });
        break;
      case 'ATF Jet':
        navigation.navigate('InfoScreen', { name: itemName });
        break;
      default:
        navigation.navigate('InfoScreen', { name: itemName });
        break;
    }
  };

  const getIcons = (itemName: string) => {
    switch (itemName) {
      case 'Petrol':
        return require(fuelIcon);
      case 'Diesel':
        return require(fuelIcon);
      case 'ATF Jet':
        return require(fuelIcon);
      default:
        return require(fuelIcon);
    }
  };

  return (
    <View style={styles.container}>
      <Header caption="Motor Fuels" />
      <InputSearch />
      <View>
        <ListMenu
          items={wholeData.MotorFuels}
          navigate={navigate}
          getIcons={getIcons}
          png={true}
          itemHeight={170}
        />
      </View>
    </View>
  );
};

export default FuelsHome;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
