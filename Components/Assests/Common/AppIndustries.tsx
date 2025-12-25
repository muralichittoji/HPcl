import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colours from './Colors';
const locationIcon = '../Images/icons/Location.png';
// const roofingIcon = '../Images/icons/roofing.png';
// const wProofIcon = '../Images/icons/Waterproofing.png';
// const buildingIcon = '../Images/icons/Building-Project.png';
// const roadConstIcon = '../Images/icons/road-construction.png';

const AppIndustries = ({ data }: any) => {
  //   const applications = [
  //     {
  //       id: 1,
  //       title: 'Road Construction',
  //       icon: require(roadConstIcon),
  //       colors: Colours.blueBright,
  //     },
  //     {
  //       id: 2,
  //       title: 'Building Projects',
  //       icon: require(buildingIcon),
  //       colors: Colours.orangeRed,
  //     },
  //     {
  //       id: 3,
  //       title: 'Water Proofing',
  //       icon: require(wProofIcon),
  //       colors: Colours.orangeLight,
  //     },
  //     {
  //       id: 4,
  //       title: 'Roofing',
  //       icon: require(roofingIcon),
  //       colors: Colours.purple,
  //     },
  //   ];

  return (
    <View>
      {/* Header */}
      <View style={styles.appView}>
        <Image source={require(locationIcon)} style={styles.icon} />
        <Text style={styles.content}>Applications {'\n'} & Industries</Text>
      </View>

      <View style={styles.dividerGreen} />

      <View style={{ margin: 5 }}>
        <Text style={styles.desText}>{data}</Text>
      </View>
      {/* List */}
      {/* {applications.map((item: any) => (
        <TouchableOpacity key={item?.id} style={styles.appBtn}>
          <Image
            source={item.icon}
            style={[styles.icon, { backgroundColor: item.colors }]}
          />
          <Text style={styles.appText}>{item.title}</Text>
        </TouchableOpacity>
      ))} */}
    </View>
  );
};

export default AppIndustries;

const styles = StyleSheet.create({
  icon: {
    height: 60,
    width: 60,
    padding: 10,
    borderRadius: 10,
  },

  appText: {
    color: Colours.blueDark,
    textAlign: 'left',
    width: '70%',
    fontSize: 20,
    fontWeight: '600',
  },

  appView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginVertical: 10,
    gap: 5,
  },

  desText: { fontSize: 16, textAlign: 'justify' },

  appBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginVertical: 10,
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
});
