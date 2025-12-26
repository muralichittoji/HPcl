/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  // Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Colours from './Colors';

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

export type Listitem = {
  items: any;
  navigate: any;
  getIcons?: any;
  itemHeight: any;
  png?: any;
};

const ListMenu2 = ({
  items,
  navigate,
  // getIcons,
  itemHeight,
  png,
}: Listitem) => {
  const backgroundColorSet = [
    Colours.blueLight,
    Colours.greenLight,
    Colours.orangeLight,
    Colours.blueDeep,
  ];

  // index-based rotation (perfect for FlatList / map)
  const getBackgroundColor = (index: number) => {
    return backgroundColorSet[index % backgroundColorSet.length];
  };
  const columns = getColumns();

  return (
    <View style={styles.row}>
      {items.map((item: any, index: number) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigate(item)}
          style={[
            styles.item,
            {
              height: itemHeight,
              width: width / columns + 55,
              backgroundColor: getBackgroundColor(index),
              flexDirection: png ? 'column' : 'row',
              justifyContent: 'center',
            },
          ]}
        >
          {/* {png ? (
            <View
              style={{
                width: 95,
                height: 95,
              }}
            >
              <Image
                source={getIcons(item)}
                style={[styles.icons]}
                resizeMode="contain"
              />
            </View>
          ) : (
            <Icon name={getIcons(item)} color={'#fff'} size={20} />
          )} */}
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ListMenu2;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  item: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ccc',
    margin: 5,
    borderRadius: 10,
    padding: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
  },
  icons: {
    color: 'white',
    height: '100%',
    width: '100%',
  },
});
