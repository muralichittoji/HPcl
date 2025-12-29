import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../Assests/Common/Header';
import InputSearch from '../Assests/Common/InputSearch';
import ListMenu2 from '../Assests/Common/ListMenu2';
import wholeData from '../Assests/Jsons/wholeData.json';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const LubricantsScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const navigate = (itemName: string) => {
    switch (itemName) {
      default:
        navigation.navigate('InfoScreen', { name: itemName });
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Header caption={'Lubricants'} />
      <InputSearch />
      <View>
        <ListMenu2
          items={wholeData.Lubricants}
          navigate={navigate}
          itemHeight={170}
          png={true}
        />
      </View>
    </View>
  );
};

export default LubricantsScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
