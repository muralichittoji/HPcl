import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Colours from './Colors';
// const DrumsIcon = '../Images/icons/Drums.png';
// const TankerIcon = '../Images/icons/bulk_tanker.png';
// const RailIcon = '../Images/icons/rail.png';
const PackageIcon = '../Images/icons/Packaging.png';
import { PACKAGE_MAP } from '../Config/packageMap';

const PackagingSupply = ({ data }: any) => {
  //   const Packages = [
  //     {
  //       id: 1,
  //       title: 'Drums',
  //       icon: require(DrumsIcon),
  //       colors: Colours.blueBright,
  //     },
  //     {
  //       id: 2,
  //       title: 'Bulk Tanker',
  //       icon: require(TankerIcon),
  //       colors: Colours.greenBright,
  //     },
  //     {
  //       id: 3,
  //       title: 'Rail',
  //       icon: require(RailIcon),
  //       colors: Colours.pink,
  //     },
  //   ];
  return (
    <View>
      {/* Header */}
      <View style={styles.appView}>
        <Image
          source={require(PackageIcon)}
          style={[
            styles.icon,
            {
              backgroundColor: Colours.blueDark,
              padding: 10,
              borderRadius: 10,
            },
          ]}
        />
        <Text style={styles.content}>Packaging {'\n'} & Supply</Text>
      </View>

      <View style={styles.dividerGreen} />
      <View style={styles.mapContainer}>
        {data.map((item: any) => {
          if (item === '-')
            return <Text style={{ fontSize: 16, fontWeight: '700' }}>-</Text>;
          const config = PACKAGE_MAP[item];
          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.appBtn, { backgroundColor: config.color }]}
            >
              <Image source={config.icon} style={[styles.icon]} />
              <Text style={styles.appText}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default PackagingSupply;

const styles = StyleSheet.create({
  icon: {
    height: 50,
    width: 50,
  },

  appView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginVertical: 10,
    marginTop: 20,
    gap: 20,
  },
  appBtn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    width: 90,
    height: 90,
    padding: 5,
  },

  appText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    marginVertical: 5,
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
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
});
