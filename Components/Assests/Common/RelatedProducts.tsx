import { Image, StyleSheet, Text, View } from 'react-native';
import Colours from './Colors';
import React from 'react';
const RoadIcon = '../Images/icons/road-construction.png';

const RelatedProducts = ({ Packages }: any) => {
  return (
    <View>
      {/* Header */}
      <View style={styles.appView}>
        <Image source={require(RoadIcon)} style={styles.icon} />
        <Text style={styles.content}>Related Products</Text>
      </View>

      <View style={styles.dividerGreen} />
      <View style={styles.mapContainer}>
        {Packages?.map((item: any, index: number) => (
          <Text style={styles.appText}>
            {item}
            {index < Packages.length - 1 ? ',' : ''}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default RelatedProducts;

const styles = StyleSheet.create({
  icon: {
    height: 70,
    width: 70,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colours.blueDark,
  },

  appView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginVertical: 10,
    marginTop: 20,
    gap: 20,
  },

  appText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },

  dividerGreen: {
    backgroundColor: Colours.greenDark,
    height: 2,
    marginVertical: 10,
  },

  content: {
    textAlign: 'center',
    color: Colours.blueDark,
    fontSize: 25,
    fontWeight: '700',
  },

  mapContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
});
