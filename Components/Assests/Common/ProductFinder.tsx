import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';
import InputSearch from './InputSearch';
import { useNavigation } from '@react-navigation/native';
import Colours from './Colors';

const PRODUCT_RULES = [
  {
    industry: 'roads',
    application: 'surfacing',
    condition: 'hot',
    product: {
      name: 'VG-30',
      description: 'Viscosity grade bitumen for hot mix asphalt',
    },
  },
];

const ProductFinder = () => {
  const [industry, setIndustry] = useState('');
  const [application, setApplication] = useState('');
  const [condition, setCondition] = useState('');
  const [suggestedProduct, setSuggestedProduct] = useState<any>(null);
  const navigation = useNavigation<any>();

  useEffect(() => {
    const match = PRODUCT_RULES.find(
      item =>
        item.industry === industry &&
        item.application === application &&
        item.condition === condition,
    );

    setSuggestedProduct(match ? match.product : null);
  }, [industry, application, condition]);

  return (
    <View style={styles.container}>
      <Header caption={'Product Finder'} />
      <InputSearch />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 180 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingHorizontal: 20 }}>
          {/* Industry */}
          <Text style={styles.label}>Industry</Text>
          <View style={styles.dropdown}>
            <Picker
              style={styles.picker}
              selectedValue={industry}
              onValueChange={setIndustry}
            >
              <Picker.Item label="Select Item" value="" />
              <Picker.Item label="Roads / Highways" value="roads" />
              <Picker.Item label="Construction" value="construction" />
            </Picker>
          </View>

          {/* Application */}
          <Text style={styles.label}>Application</Text>
          <View style={styles.dropdown}>
            <Picker
              style={styles.picker}
              selectedValue={application}
              onValueChange={setApplication}
            >
              <Picker.Item label="Select Item" value="" />
              <Picker.Item label="Road surfacing" value="surfacing" />
              <Picker.Item label="Paving" value="paving" />
            </Picker>
          </View>

          {/* Conditions */}
          <Text style={styles.label}>Conditions</Text>
          <View style={styles.dropdown}>
            <Picker
              style={styles.picker}
              selectedValue={condition}
              onValueChange={setCondition}
            >
              <Picker.Item label="Select Item" value="" />
              <Picker.Item label="Hot" value="hot" />
              <Picker.Item label="Cold" value="cold" />
            </Picker>
          </View>

          {/* Suggested Product */}
          {suggestedProduct && (
            <>
              <Text style={styles.suggested}>Suggested Product</Text>

              <LinearGradient
                colors={['#1D4ED8', '#0EA5E9']}
                style={styles.productCard}
              >
                <Text style={styles.productTitle}>{suggestedProduct.name}</Text>

                <Text style={styles.productDesc}>
                  {suggestedProduct.description}
                </Text>

                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    style={styles.outlineBtn}
                    onPress={() =>
                      navigation.navigate('InfoScreen', { name: 'VG-30' })
                    }
                  >
                    <Text style={styles.outlineText}>View Specifications</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.outlineBtn}>
                    <Text style={styles.outlineText}>Enquire</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductFinder;

const styles = StyleSheet.create({
  container: { height: '100%', backgroundColor: '#FFFFFF' },
  /* Header */ header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  picker: { color: Colours.black },
  back: { fontSize: 28, marginRight: 10 },
  headerTitle: { flex: 1, fontSize: 18, fontWeight: '700', color: '#0F172A' },
  logo: { fontWeight: '800', color: '#1E3A8A' },
  /* Search */ searchBox: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: { flex: 1, height: 44, fontSize: 14 },
  mic: { fontSize: 20 },
  /* Form */ label: { fontSize: 18, fontWeight: '700', marginBottom: 6 },
  dropdown: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
  },
  suggested: { fontSize: 16, fontWeight: '700', marginVertical: 12 },
  /* Product Card */ productCard: {
    borderRadius: 16,
    padding: 18,
    height: 200,
  },
  productTitle: { fontSize: 28, fontWeight: '800', color: '#FFFFFF' },
  productDesc: { fontSize: 14, color: '#E0F2FE', marginVertical: 10 },
  buttonRow: { flexDirection: 'row', marginTop: 12 },
  outlineBtn: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginRight: 10,
  },
  outlineText: { fontSize: 13, fontWeight: '600', color: '#1E40AF' },
});
