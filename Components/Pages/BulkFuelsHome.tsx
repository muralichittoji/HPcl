import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../Assests/Common/Header';
import InputSearch from '../Assests/Common/InputSearch';
import wholeData from '../Assests/Jsons/wholeData.json';
import ListMenu from '../Assests/Common/ListMenu';
import { useNavigation } from '@react-navigation/native';
const TankerIcon = '../Assests/Images/icons/bulk_tanker.png';

const BulkFuelsHome = () => {
  const navigation = useNavigation<any>();

  const navigate = (itemName: string) => {
    switch (itemName) {
      default:
        navigation.navigate('InfoScreen', { name: itemName });
        break;
    }
  };

  const getIcons = (itemName: string) => {
    switch (itemName) {
      default:
        return require(TankerIcon);
    }
  };

  return (
    <View style={styles.container}>
      <Header caption="Bulk Fuels" />
      <InputSearch />
      <ListMenu
        items={wholeData.BulkFuel}
        png={true}
        navigate={navigate}
        getIcons={getIcons}
        itemHeight={170}
      />
    </View>
  );
};

export default BulkFuelsHome;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
