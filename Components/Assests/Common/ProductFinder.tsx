import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import Header from './Header';
import InputSearch from './InputSearch';
import Colours from './Colors';

import wholeData from '../Jsons/wholeData.json';

type PickerJSON = {
  [industry: string]: {
    [application: string]: {
      [condition: string]: string[];
    };
  };
};

const ProductFinder = () => {
  const navigation = useNavigation<any>();
  const pickerData = wholeData.PICKER_DATA as PickerJSON;

  /** ---------------- Industry ---------------- */
  const [industryOpen, setIndustryOpen] = useState(false);
  const [industry, setIndustry] = useState<string | null>(null);
  const industryItems = useMemo(
    () =>
      Object.keys(pickerData).map(item => ({
        label: item,
        value: item,
      })),
    [pickerData],
  );

  /** ---------------- Application ---------------- */
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [application, setApplication] = useState<string | null>(null);
  const applicationItems = useMemo(() => {
    if (!industry) return [];

    const apps = pickerData[industry];
    if (!apps) return [];

    return Object.keys(apps).map(item => ({
      label: item,
      value: item,
    }));
  }, [industry, pickerData]);

  /** ---------------- Condition ---------------- */
  const [conditionOpen, setConditionOpen] = useState(false);
  const [condition, setCondition] = useState<string | null>(null);
  const conditionItems = useMemo(() => {
    if (!industry || !application) return [];

    const conditions = pickerData[industry]?.[application];
    if (!conditions) return [];

    return Object.keys(conditions).map(item => ({
      label: item,
      value: item,
    }));
  }, [industry, application, pickerData]);

  /** ---------------- Products ---------------- */
  const products = useMemo(() => {
    if (!industry || !application || !condition) return [];

    const raw = pickerData?.[industry]?.[application]?.[condition] ?? [];

    return raw.flatMap(item =>
      item.includes('/') ? item.split('/').map(v => v.trim()) : [item],
    );
  }, [industry, application, condition, pickerData]);

  return (
    <View style={styles.container}>
      <Header caption="Product Finder" />
      <InputSearch />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.inner}>
          {/* Industry */}
          <Text style={styles.label}>Industry</Text>
          <DropDownPicker
            open={industryOpen}
            value={industry}
            items={industryItems}
            setOpen={setIndustryOpen}
            setValue={setIndustry}
            onChangeValue={() => {
              setApplication(null);
              setCondition(null);
            }}
            placeholder="Select Industry"
            listMode="SCROLLVIEW"
          />

          {/* Application */}
          <Text style={styles.label}>Application</Text>
          <DropDownPicker
            open={applicationOpen}
            value={application}
            listMode="SCROLLVIEW"
            items={applicationItems}
            setOpen={setApplicationOpen}
            setValue={setApplication}
            placeholder="Select Application"
            disabled={!industry}
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            zIndex={2000}
            zIndexInverse={2000}
          />

          {/* Condition */}
          <Text style={styles.label}>Operating Conditions</Text>
          <DropDownPicker
            open={conditionOpen}
            value={condition}
            items={conditionItems}
            listMode="SCROLLVIEW"
            setOpen={setConditionOpen}
            setValue={setCondition}
            placeholder="Select Condition"
            disabled={!application}
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            zIndex={1000}
            zIndexInverse={3000}
          />

          {/* Results */}
          {products.map(product => (
            <LinearGradient
              key={product}
              colors={['#1D4ED8', '#0EA5E9']}
              style={styles.productCard}
            >
              <View>
                <Text style={styles.productTitle}>{product}</Text>
                <Text style={styles.productDesc}>
                  Eligible / Recommended Product
                </Text>

                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    style={styles.outlineBtn}
                    onPress={() =>
                      navigation.navigate('InfoScreen', {
                        name: product,
                      })
                    }
                  >
                    <Text style={styles.outlineText}>View Specifications</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.outlineBtn}>
                    <Text style={styles.outlineText}>Enquire</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductFinder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.white,
  },
  inner: {
    paddingHorizontal: 20,
  },
  label: {
    marginTop: 20,
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '600',
    color: Colours.black,
  },
  dropdown: {
    borderColor: '#E5E7EB',
    borderRadius: 8,
    minHeight: 48,
  },
  dropdownContainer: {
    borderColor: '#E5E7EB',
  },
  productCard: {
    marginTop: 10,
    padding: 16,
    borderRadius: 12,
    height: 170,
    // width: '100%',
    // alignSelf: 'stretch',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  productDesc: {
    marginTop: 6,
    fontSize: 14,
    color: '#E5E7EB',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 14,
  },
  outlineBtn: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  outlineText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
});
