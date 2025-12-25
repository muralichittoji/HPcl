import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import Colours from './Colors';
import InputSearch from './InputSearch';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import wholeData from '../Jsons/wholeData.json';
import Header from '../Common/Header';
const BitumenIcon = '../Images/icons/road-construction.png';
const FireIcon = '../Images/icons/fire-solid.png';
const ShieldIcon = '../Images/icons/shield-solid.png';
const WaterIcon = '../Images/icons/Waterproofing.png';

export type RootStackParamList = {
  InfoScreen: undefined;
};

const { width } = Dimensions.get('window');
const getColumns = () => {
  if (width < 350) {
    return 2;
  } else if (width < 600) {
    return 3;
  } else {
    return 4;
  }
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const KnowledgeCenter = () => {
  const columns = getColumns();
  const navigation = useNavigation<NavigationProp>();

  const navigate = (itemName: String) => {
    switch (itemName) {
      case 'Bitumen & roads':
        navigation.navigate('InfoScreen');
        break;
      default:
        break;
    }
  };

  const getIcons = (itemName: String) => {
    switch (itemName) {
      case 'Bitumen & Roads':
        return require(BitumenIcon);
      case 'Fire & Combustion':
        return require(FireIcon);
      case 'Lubricants & Maintenance':
        return require(WaterIcon);
      case 'Safety & Heading':
        return require(ShieldIcon);
      default:
        return '#D1D5DB';
    }
  };
  const getBackgroundColor = (itemName: String) => {
    switch (itemName) {
      case 'Bitumen & Roads':
        return Colours.orangeLight;
      case 'Fire & Combustion':
        return Colours.orangeRed;
      case 'Lubricants & Maintenance':
        return Colours.blueLight;
      case 'Safety & Heading':
        return Colours.greenBright;
      default:
        return '#D1D5DB';
    }
  };
  const getSubText = (itemName: String) => {
    switch (itemName) {
      case 'Bitumen & Roads':
        return '.VG Grades Explained\n.PMB vd CRMB';
      case 'Fire & Combustion':
        return '.Flash Point basics\n.Furnace Oil vs diesel';
      case 'Lubricants & Maintenance':
        return '.What is viscosity?\n.ISO VG grades';
      case 'Safety & Heading':
        return '.PPE\n.Storage condtions';
      default:
        return '#D1D5DB';
    }
  };

  return (
    <View style={styles.container}>
      <Header caption="Knowledge Center" />
      <InputSearch />
      <View>
        <View style={styles.row}>
          {wholeData.Knowledge.map((item: any, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigate(item)}
              style={[
                styles.item,
                {
                  height: 170,
                  width: width / columns + 50,

                  flexDirection: 'column',
                },
              ]}
            >
              <View
                style={{
                  backgroundColor: getBackgroundColor(item),
                  width: '100%',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  alignItems: 'center',
                  padding: 5,
                }}
              >
                <Image
                  source={getIcons(item)}
                  style={[styles.icons]}
                  width={60}
                />
              </View>
              <View style={{ paddingHorizontal: 20 }}>
                <Text style={styles.text}>{item}</Text>
                <Text>{getSubText(item)}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default KnowledgeCenter;

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
    alignItems: 'center',
    backgroundColor: '#FFF',
    margin: 5,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: Colours.blueDark,
    fontWeight: '700',
    marginBottom: 5,
  },
  icons: {
    width: 60,
    height: 60,
    color: 'white',
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
