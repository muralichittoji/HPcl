import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from './Header';
import InputSearch from './InputSearch';
import ListMenu from './ListMenu';
const compassIcon = '../Images/icons/compass-solid.png';
const calculatorIcon = '../Images/icons/calculator-solid.png';
const broucherIcon = '../Images/icons/Broucher.png';
const shieldIcon = '../Images/icons/shield-solid.png';

const data = [
  'Product Finder',
  'Tools & Calculators',
  'Knowledge Center',
  'FAQs & Safety Hub',
];
const InteractiveTools = () => {
  const getIcons = (itemName: string) => {
    switch (itemName) {
      case 'Product Finder':
        return require(compassIcon);
      case 'Tools & Calculators':
        return require(calculatorIcon);
      case 'Knowledge Center':
        return require(broucherIcon);
      case 'FAQs & Safety Hub':
        return require(shieldIcon);
      default:
        return '#D1D5DB';
    }
  };

  return (
    <View style={styles.container}>
      <Header caption="Interactive Tools" />
      <InputSearch />
      <View style={styles.subContainer}>
        <ListMenu
          items={data}
          getIcons={getIcons}
          itemHeight={170}
          png={true}
          navigate={() => {}}
        />
      </View>
    </View>
  );
};

export default InteractiveTools;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  subContainer: {
    // paddingHorizontal: 20,
  },
});
