import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
const HappinessIcon = '../Images/icons/DeliveringHappiness.png';
import wholeData from '../Jsons/wholeData.json';
import productDetails from '../Jsons/InfoData.json';
import Colours from './Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductComparison = () => {
  const [product1, setProduct1] = useState('');
  const [product2, setProduct2] = useState('');
  const [product3, setProduct3] = useState('');
  const [showComparison, setShowComparison] = useState(false);

  /* -------------------- HELPERS -------------------- */

  const selectedProducts = [product1, product2, product3].filter(Boolean);

  const canCompare = selectedProducts.length >= 2;

  const getAvailableProducts = (currentValue: string) => {
    return wholeData.products.filter(
      p => p.value === currentValue || !selectedProducts.includes(p.value),
    );
  };

  /* -------------------- UI -------------------- */

  return (
    <View style={styles.container}>
      {/* Icon */}
      <Text style={styles.icon}>⚖️</Text>

      {/* Title */}
      <Text style={styles.title}>Product Comparison</Text>
      <Text style={styles.subtitle}>Select at least 2 products to compare</Text>

      {/* Picker 1 */}
      <View style={styles.dropdown}>
        <Picker
          selectedValue={product1}
          onValueChange={setProduct1}
          style={styles.picker}
        >
          <Picker.Item label="Select product" value="" />
          {getAvailableProducts(product1).map(p => (
            <Picker.Item key={p.value} label={p.label} value={p.value} />
          ))}
        </Picker>
      </View>

      {/* Picker 2 */}
      <View style={styles.dropdown}>
        <Picker
          selectedValue={product2}
          onValueChange={setProduct2}
          style={styles.picker}
        >
          <Picker.Item label="Select product" value="" />
          {getAvailableProducts(product2).map(p => (
            <Picker.Item key={p.value} label={p.label} value={p.value} />
          ))}
        </Picker>
      </View>

      {/* Picker 3 */}
      <View style={styles.dropdown}>
        <Picker
          selectedValue={product3}
          onValueChange={setProduct3}
          style={styles.picker}
        >
          <Picker.Item label="Select product" value="" />
          {getAvailableProducts(product3).map(p => (
            <Picker.Item key={p.value} label={p.label} value={p.value} />
          ))}
        </Picker>
      </View>

      {/* Compare Button */}
      <TouchableOpacity
        style={[styles.button, !canCompare && styles.disabledButton]}
        disabled={!canCompare}
        onPress={() => setShowComparison(true)}
      >
        <Text style={styles.buttonText}>COMPARE</Text>
      </TouchableOpacity>

      {/* -------------------- COMPARISON MODAL -------------------- */}
      <SafeAreaView>
        <Modal transparent animationType="slide" visible={showComparison}>
          <View style={styles.overlay}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Comparison</Text>
              <TouchableOpacity onPress={() => setShowComparison(false)}>
                <Text style={styles.close}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Floating Cards */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.cardContainer}
            >
              {selectedProducts.map((key: string) => {
                const product =
                  productDetails[key as keyof typeof productDetails];

                if (!product) return null;

                return (
                  <View key={key} style={styles.card}>
                    <View>
                      <Text style={styles.cardTitle}>{product.title}</Text>
                      <Text style={styles.cardSubTitle}>
                        {product.subTitle}
                      </Text>
                      <View style={styles.divider} />
                      <Text style={styles.section}>Description</Text>
                      <Text style={styles.text}>{product.description}</Text>

                      <Text style={styles.section}>Specifications</Text>
                      <View style={styles.divider} />
                      {product.specifications.map(
                        (spec: any, index: number) => (
                          <View key={index} style={styles.specRow}>
                            <Text style={styles.specKey}>{spec.property}:</Text>
                            <Text style={styles.specValue}>{spec.value}</Text>
                          </View>
                        ),
                      )}

                      <Text style={styles.section}>Applications</Text>
                      <Text style={styles.text}>{product.appData}</Text>

                      <Text style={styles.section}>Packaging</Text>
                      <Text style={styles.text}>
                        {product.packaging.join(', ')}
                      </Text>
                    </View>
                    <Image
                      source={require(HappinessIcon)}
                      style={styles.happiness}
                    />
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
};

export default ProductComparison;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f6fa',
  },
  picker: { color: Colours.black },
  divider: {
    height: 1,
    backgroundColor: Colours.gray,
  },
  icon: {
    fontSize: 40,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 16,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#0a3d62',
    padding: 14,
    borderRadius: 8,
    marginTop: 8,
  },
  disabledButton: {
    backgroundColor: '#b2bec3',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalHeader: {
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colours.blueDark,
  },
  close: {
    fontSize: 20,
    fontWeight: '900',
  },
  cardContainer: {
    padding: 16,
  },
  card: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
    elevation: 6,
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colours.blueDark,
  },
  cardSubTitle: {
    fontSize: 12,
    color: '#777',
    marginBottom: 8,
  },
  section: {
    marginTop: 12,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'justify',
  },
  specRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  specKey: {
    fontSize: 12,
    fontWeight: '700',
  },
  specValue: {
    fontSize: 11,
  },
  happiness: { height: 100, width: 130, alignSelf: 'flex-end' },
});
