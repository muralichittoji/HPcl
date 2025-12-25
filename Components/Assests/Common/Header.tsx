import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colours from './Colors';
const Master_logo = '../Images/Master_Logo.png';
import { ViewStyle } from 'react-native';
const { width } = Dimensions.get('window');
const Header = ({
  caption,
  screen,
  subCaption,
}: {
  caption?: string;
  screen?: string;
  subCaption?: string;
}) => {
  const MasterLogo = require(Master_logo);

  const getStyle = (): ViewStyle => ({
    minHeight: screen === 'Login' ? 180 : 120,
    height: '15%',
    display: 'flex',
    flexDirection: screen ? 'column' : 'row',
    justifyContent: screen ? 'center' : 'flex-start',
    gap: 10,
    alignItems: 'center',
    padding: 10,
    width: width - 20,
    margin: 10,
  });

  const getHeader = () => {
    switch (screen) {
      case 'Login':
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 5,
              marginTop: 30,
            }}
          >
            <Image
              style={[{ width: '20%', height: 100, marginRight: 5 }]}
              source={MasterLogo}
              resizeMode="contain"
            />
            <View>
              <Text style={[styles.headText, { fontSize: 20 }]}>
                हिंदुस्तान पेट्रोलियम कॉर्पोरेशन लिमिटेड
              </Text>
              <Text style={[styles.headText, { fontSize: 16 }]}>
                Hindustan Petroleum Corporation Limited
              </Text>
              <Text
                style={[styles.headText, { fontSize: 20, fontWeight: '900' }]}
              >
                (A Maharatna Company)
              </Text>
            </View>
          </View>
        );
      default:
        return (
          <Image
            style={[{ width: '30%', height: 150 }]}
            source={MasterLogo}
            resizeMode="contain"
          />
        );
    }
  };

  return (
    <View style={getStyle()}>
      {getHeader()}
      <View style={{ width: '70%' }}>
        {caption && <Text style={[styles.content]}>{caption}</Text>}
        {subCaption && <Text style={styles.subTitle}>{subCaption}</Text>}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  content: {
    color: Colours.blueDark,
    fontSize: 30,
    fontWeight: '700',
  },
  subTitle: {
    fontSize: 14,
    color: '#475569',
  },

  // logo: {
  //   height: scr,
  //   // margin: 10,
  // },
  headText: {
    color: Colours.blueDeep,
    fontSize: 15,
    fontWeight: '700',
  },
  divider: {
    height: 10,
    backgroundColor: '#000',
    marginVertical: 16,
  },
});
