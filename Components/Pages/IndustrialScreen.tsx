import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colours from '../Assests/Common/Colors';
import InputSearch from '../Assests/Common/InputSearch';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import wholeData from '../Assests/Jsons/wholeData.json';
import Header from '../Assests/Common/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListMenu from '../Assests/Common/ListMenu';
import { RootStackParamList } from '../navigation/types';
const BitumenIcon = '../Assests/Images/icons/Drums.png';
const TankerIcon = '../Assests/Images/icons/bulk_tanker.png';
const SolventsIcon = '../Assests/Images/icons/PMB.png';
const LiquidIcon = '../Assests/Images/icons/Waterproofing.png';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const IndustrialScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const navigate = (itemName: string) => {
    switch (itemName) {
      case 'Bitumen':
        navigation.navigate('BitumenScreen');
        break;
      case 'Industrial Liquids':
        navigation.navigate('InfoScreen', { name: 'LSHS' });
        break;
      case 'Solvents':
        navigation.navigate('SolventsHome');
        break;
      case 'Bulk Fuels':
        navigation.navigate('BulkFuelsHome');
        break;
      default:
        break;
    }
  };

  const getIcons = (itemName: String) => {
    switch (itemName) {
      case 'Bitumen':
        return require(BitumenIcon);
      case 'Bulk Fuels':
        return require(TankerIcon);
      case 'Solvents':
        return require(SolventsIcon);
      case 'Industrial Liquids':
        return require(LiquidIcon);
      case 'Product Finder':
        return 'search';
      case 'Knowledge Center':
        return 'book';
      default:
        return '#D1D5DB';
    }
  };

  return (
    <View style={styles.container}>
      <Header caption={'Industrial Fuels'} />
      <InputSearch />
      <View>
        <View>
          <ListMenu
            items={wholeData.industrial}
            navigate={navigate}
            png={true}
            getIcons={getIcons}
            itemHeight={170}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Icon name="gears" size={30} color="#fff" />
          <Text style={styles.text}>Process Oils{'\n'}& Base Oils</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IndustrialScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  item: {
    height: 170,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ccc',
    margin: 5,
    borderRadius: 10,
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: '400',
  },
  button: {
    width: '95%',
    height: 80,
    backgroundColor: Colours.blueDark,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
});
