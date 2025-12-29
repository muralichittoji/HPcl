import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../Assests/Common/Header';
import InputSearch from '../Assests/Common/InputSearch';
import wholeData from '../Assests/Jsons/wholeData.json';
import ListMenu2 from '../Assests/Common/ListMenu2';
import { RootStackParamList } from '../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const LpgScreen = () => {
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
      <Header caption={'LPG'} />
      <InputSearch />
      <View>
        <ListMenu2
          items={wholeData.LPG}
          navigate={navigate}
          itemHeight={170}
          png={true}
          // getIcons={() => {}}
        />
      </View>
    </View>
  );
};

export default LpgScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
