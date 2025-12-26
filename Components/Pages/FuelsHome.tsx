import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../Assests/Common/Header';
import InputSearch from '../Assests/Common/InputSearch';
// import ListMenu from '../Assests/Common/ListMenu';
import wholeData from '../Assests/Jsons/wholeData.json';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import ListMenu2 from '../Assests/Common/ListMenu2';
// import ListMenu from '../Assests/Common/ListMenu';
import ListMenu2 from '../Assests/Common/ListMenu2';
// const fuelIcon = '../Assests/Images/icons/fuel_pump.png';

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
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      <Header caption="Motor Fuels" />
      <InputSearch />
      <View>
        <ListMenu2
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
