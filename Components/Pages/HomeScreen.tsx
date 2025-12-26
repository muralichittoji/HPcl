import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import InputSearch from '../Assests/Common/InputSearch';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Colours from '../Assests/Common/Colors';
import ListMenu from '../Assests/Common/ListMenu';
import Header from '../Assests/Common/Header';
const fuelIcon = '../Assests/Images/icons/fuel_icon.png';
const gasIcon = '../Assests/Images/icons/bitumens.png';
const oilIcon = '../Assests/Images/icons/oilcan-solid.png';
const IndustialIcon = '../Assests/Images/icons/CRMB.png';
// const LubricantsIcon = '../Assests/Images/icons/Drums.png';
import wholeData from '../Assests/Jsons/wholeData.json';

const { width } = Dimensions.get('window');

type RootStackParamList = {
  FuelsHome: undefined;
  LpgScreen: undefined;
  LubricantsHome: undefined;
  ContantScreen: undefined;
  IndustrialScreen: undefined;
  KnowledgeCenter: undefined;
  ProductFinder: undefined;
  InteractiveTools: undefined;
  InfoScreen: { name: string };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  // Function to get icons based on item name
  const getIcons = (itemName: string) => {
    switch (itemName) {
      case 'Motor Fuels':
        return require(fuelIcon);
      case 'LPG':
        return require(gasIcon);
      case 'Lubricants':
        return require(oilIcon);
      case 'Industrial Fuels':
        return require(IndustialIcon);
      case 'Product Finder':
        return 'search';
      case 'Knowledge Center':
        return 'book';
      default:
        return '#D1D5DB';
    }
  };

  // Navigation
  const navigate = (itemName: String) => {
    switch (itemName) {
      case 'Motor Fuels':
        navigation.navigate('FuelsHome');
        break;
      case 'LPG':
        navigation.navigate('InfoScreen', { name: 'LPG' });
        break;
      case 'Industrial Fuels':
        navigation.navigate('IndustrialScreen');
        break;
      case 'Knowledge Center':
        navigation.navigate('KnowledgeCenter');
        break;
      case 'Product Finder':
        navigation.navigate('ProductFinder');
        break;
      case 'Explore More':
        navigation.navigate('InteractiveTools');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Header caption={'Product \nCatalogue'} />
      <InputSearch />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <ListMenu
            items={wholeData?.home}
            navigate={navigate}
            png={true}
            getIcons={getIcons}
            itemHeight={170}
          />
        </View>
        <View>
          <Text style={styles.content}>Quick Help</Text>
          <ListMenu
            items={wholeData.acknoledgetment}
            navigate={navigate}
            png={false}
            getIcons={getIcons}
            itemHeight={70}
          />
        </View>
        <TouchableOpacity onPress={() => navigate('Explore More')}>
          <Text style={styles.exploreBtn}>Explore More {'->'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  subContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    color: Colours.blueDark,
    fontSize: 20,
    fontWeight: '900',
    marginHorizontal: 10,
    marginTop: 20,
  },
  logo: {
    width: 120,
    height: 120,
    margin: 10,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  salesText: {
    textAlign: 'center',
    color: 'gray',
    fontWeight: '600',
    fontSize: 16,
  },
  item: {
    height: 70,
    width: width / 2.2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    fontWeight: '600',
  },
  exploreBtn: {
    color: Colours.blueBright,
    textAlign: 'center',
    fontSize: 20,
  },
});
