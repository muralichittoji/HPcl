/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  getIcons: any;
  itemHeight: any;
  png?: any;
};

const ListMenu = ({ items, navigate, getIcons, itemHeight, png }: Listitem) => {
  // Function to get background color based on item
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
              width: png ? width / columns + 45 : width / columns + 45,
              backgroundColor: getBackgroundColor(index),
              flexDirection: png ? 'column' : 'row',
              justifyContent: png ? 'space-around' : 'flex-start',
              gap: png ? 0 : 10,
            },
          ]}
        >
          {png ? (
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
          )}
          <Text
            style={[
              styles.text,
              {
                textAlign: png ? 'center' : 'justify',
                width: png ? '100%' : '75%',
              },
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ListMenu;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginHorizontal: 10,
    flexWrap: 'wrap',
  },
  item: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    margin: 5,
    borderRadius: 10,
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
  icons: {
    color: 'white',
    height: '100%',
    width: '100%',
  },
});
