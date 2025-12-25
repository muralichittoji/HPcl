// FuelScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import fuelData from '../Assests/Jsons/fuelData.json';
import InputSearch from '../Assests/Common/InputSearch';

const capitalizeWords = (str: string) => {
  return str
    .split(/_| /)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const FuelScreen = () => {
  // Petrol octane button handler
  const handleOctanePress = (variant: string, RON: number) => {
    Alert.alert('Selected Octane', `${variant} — RON ${RON}`);
  };

  // Diesel button handler
  const handleDieselPress = (spec: string) => {
    Alert.alert('Selected Diesel', spec);
  };

  const renderSpecification = (key: string, value: any) => {
    // Petrol octane ratings
    if (key === 'typical_octane_ratings' && Array.isArray(value)) {
      return (
        <View style={{ marginBottom: 6 }}>
          <Text style={styles.label}>Octane Ratings</Text>
          <FlatList
            data={value}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.octaneButton}
                onPress={() => handleOctanePress(item.variant, item.RON)}
              >
                <Text style={styles.value}>
                  • {item.variant} — RON {item.RON}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }

    // Diesel cetane number or biodiesel blend
    if (key === 'cetane_number' || key === 'biodiesel_blend') {
      return (
        <TouchableOpacity
          style={styles.octaneButton}
          onPress={() => handleDieselPress(`${capitalizeWords(key)}: ${value}`)}
        >
          <Text style={styles.value}>
            • {capitalizeWords(key)}: {value}
          </Text>
        </TouchableOpacity>
      );
    }

    // Other specifications
    return (
      <View style={styles.row}>
        <Text style={styles.label}>{capitalizeWords(key)}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    );
  };

  const renderProduct = ({ item }: { item: (typeof fuelData.products)[0] }) => (
    <View style={styles.card}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.subTitle}>{item.industry_name}</Text>

      <Text style={styles.sectionTitle}>Specifications</Text>

      {Object.entries(item.specifications).map(([key, value], idx) => (
        <View key={idx}>{renderSpecification(key, value)}</View>
      ))}
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <>
          <Text style={styles.company}>{fuelData.company}</Text>
          <InputSearch />
        </>
      }
      data={fuelData.products}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderProduct}
      contentContainerStyle={{ paddingBottom: 16 }}
    />
  );
};

export default FuelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  company: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    elevation: 3,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#666',
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    marginBottom: 6,
  },
  label: {
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  value: {
    marginLeft: 8,
    color: '#333',
  },
  octaneButton: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginVertical: 2,
    backgroundColor: '#e0f7fa',
    borderRadius: 6,
  },
});
