import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../Assests/Common/Header';
import InputSearch from '../Assests/Common/InputSearch';
import ListMenu from '../Assests/Common/ListMenu';
const LiquidIcon = '../Assests/Images/icons/oilcan-solid.png';
import wholeData from '../Assests/Jsons/wholeData.json';
import { useNavigation } from '@react-navigation/native';

const IndustialLiquids = () => {
  const navigation = useNavigation<any>();

  const getIcons = (item: string) => {
    switch (item) {
      case 'Hexane':
        return require(LiquidIcon);
      default:
        return require(LiquidIcon);
    }
  };

  const naigate = (item: string) => {
    switch (item) {
      default:
        navigation.navigate('InfoScreen', { name: item });
    }
  };

  return (
    <View style={styles.container}>
      <Header caption="Industrial Liquids" />
      <InputSearch />
      <View>
        <ListMenu
          getIcons={getIcons}
          items={wholeData.IndusLiquids}
          itemHeight={170}
          png={true}
          navigate={naigate}
        />
      </View>
    </View>
  );
};

export default IndustialLiquids;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
