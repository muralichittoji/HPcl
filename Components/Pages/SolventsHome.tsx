import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../Assests/Common/Header';
import InputSearch from '../Assests/Common/InputSearch';
import { useNavigation } from '@react-navigation/native';
import wholeData from '../Assests/Jsons/wholeData.json';
// import ListMenu from '../Assests/Common/ListMenu';
import ListMenu2 from '../Assests/Common/ListMenu2';
const SolventsIcon = '../Assests/Images/icons/PMB.png';

const SolventsHome = () => {
  const navigation = useNavigation<any>();

  const navigate = (itemName: string) => {
    switch (itemName) {
      default:
        navigation.navigate('InfoScreen', { name: itemName });
    }
  };

  const getIcons = (itemName: string) => {
    switch (itemName) {
      default:
        return require(SolventsIcon);
    }
  };

  return (
    <View style={styles.container}>
      <Header caption="Solvents" />
      <InputSearch />
      <View>
        <ListMenu2
          items={wholeData.Solvents}
          navigate={navigate}
          png={true}
          getIcons={getIcons}
          itemHeight={170}
        />
      </View>
    </View>
  );
};

export default SolventsHome;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
