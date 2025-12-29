/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../Assests/Common/Header';
import infoData from '../Assests/Jsons/InfoData.json';
import SpecificationsCard from '../Assests/Common/SpecificationsCard';
import AppIndustries from '../Assests/Common/AppIndustries';
import PackagingSupply from '../Assests/Common/PackagingSupply';
import DocumentsDownloads from '../Assests/Common/DocumentsDownloads';
import ProductComparison from '../Assests/Common/ProductComparison';
import RelatedProducts from '../Assests/Common/RelatedProducts';
import EnquiryShare from '../Assests/Common/EnquiryShare';
import { RouteProp, useIsFocused } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type InfoScreenRouteProp = RouteProp<RootStackParamList, 'InfoScreen'>;

type InfoScreenProps = {
  route: InfoScreenRouteProp;
};

const InfoScreen = ({ route }: InfoScreenProps) => {
  const { name } = route.params;
  const data = infoData[name as keyof typeof infoData];

  const scrollRef = useRef<ScrollView>(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && scrollRef.current) {
      scrollRef.current.scrollTo({ y: 0, animated: false });
    }
  }, [isFocused]);

  if (!data) {
    return (
      <View style={styles.container}>
        <Text>Data not found for {name}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header caption={data.title} subCaption={data.subTitle} />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
      >
        <View style={{ paddingHorizontal: 20 }}>
          {/* Divider */}
          <View style={styles.divider} />

          {/* Description */}
          <View style={{ margin: 5 }}>
            <Text style={styles.description}>{data.description}</Text>
          </View>
          <View>
            <SpecificationsCard data={data.specifications} />
          </View>
          <View>
            <AppIndustries data={data.appData} />
          </View>
          <View>
            <PackagingSupply data={data.packaging} />
          </View>
          <View>
            <DocumentsDownloads />
          </View>
          <View>
            <RelatedProducts Packages={data.related} />
          </View>
          <View>
            <ProductComparison />
          </View>
          <View>
            <EnquiryShare data={data} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#CBD5E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  checkText: {
    fontSize: 14,
    color: '#1E3A8A',
    fontWeight: 'bold',
  },

  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
  },

  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  textSection: {
    flex: 1,
    paddingRight: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 6,
  },

  subTitle: {
    fontSize: 14,
    color: '#475569',
  },

  icon: {
    fontSize: 48,
    color: '#334155',
  },

  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 16,
  },

  description: {
    fontSize: 16,
    color: '#334155',
    lineHeight: 20,
    textAlign: 'justify',
  },
});
