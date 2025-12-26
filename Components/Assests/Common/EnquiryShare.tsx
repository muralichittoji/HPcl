import {
  Image,
  Linking,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colours from './Colors';
import React from 'react';
const ShareIcon = '../Images/icons/share.png';
const EnquireIcon = '../Images/icons/Enquire.svg';
const MessageIcon = '../Images/icons/email.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { formatProductForShare } from '../Config/formatProductForShare';

const EnquiryShare = ({ data }: any) => {
  const Enquiry = [
    {
      id: 1,
      title: 'Enquire \nNow',
      icon: require(EnquireIcon),
      colors: Colours.blueBright,
    },
    {
      id: 2,
      title: 'E-Mail',
      icon: require(MessageIcon),
      colors: Colours.greenBright,
    },
    {
      id: 3,
      title: 'Share',
      icon: require(ShareIcon),
      colors: Colours.pink,
    },
  ];

  const openEmail = () => {
    Linking.openURL('mailto:customercare@hpcl.com');
  };

  const onShare = async () => {
    console.log(data);
    // if (!data) return;

    try {
      const message = formatProductForShare(data);
      await Share.share({ message });
    } catch (error) {
      console.log('Share error:', error);
    }
  };

  const handleAction = (title: string) => {
    switch (title) {
      case 'Share':
        onShare();
        break;

      case 'E-Mail':
        openEmail();
        break;

      case 'Enquire \nNow':
        // future: enquiry form
        break;

      default:
        break;
    }
  };

  return (
    <View>
      {/* Header */}
      {/* <View style={styles.appView}>
        <Image source={require(MessageIcon)} style={styles.icon} />
        <Text style={styles.content}>Enquiry &{'\n'} Share Buttons</Text>
      </View> */}

      <View style={styles.dividerGreen} />
      <View style={styles.mapContainer}>
        {Enquiry?.map((item: any) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.appBtn, { backgroundColor: item.colors }]}
            onPress={() => handleAction(item.title)}
          >
            {item.title !== 'Enquire \nNow' ? (
              <Image
                source={item.icon}
                style={[
                  styles.icon,
                  { backgroundColor: item.colors, height: 60, width: 60 },
                ]}
              />
            ) : (
              <Icon name="comment" size={38} color={'#fff'} />
            )}
            <Text style={[styles.appText, { color: '#fff' }]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default EnquiryShare;

const styles = StyleSheet.create({
  icon: {
    height: 60,
    width: 60,
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
  appBtn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    width: '30%',
    borderRadius: 10,
  },

  appText: {
    color: Colours.blueDark,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
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
