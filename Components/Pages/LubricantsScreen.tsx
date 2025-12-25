import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import lubricantData from '../Assests/Jsons/lubricantData.json';
import InputSearch from '../Assests/Common/InputSearch';

const VariantCard = ({ variant }: any) => {
  return (
    <View style={styles.card}>
      <Text style={styles.type}>{variant.type}</Text>
      <Text style={styles.detail}>Brand: {variant.brand}</Text>
      <Text style={styles.detail}>Usage: {variant.usage}</Text>
      {variant.pack_sizes_l && (
        <Text style={styles.detail}>
          Pack Sizes (L): {variant.pack_sizes_l.join(', ')}
        </Text>
      )}
      {variant.viscosity_grade && (
        <View style={styles.row}>
          <Text style={styles.detail}>Viscosity Grade:</Text>
          <TouchableOpacity style={styles.detailsBtn}>
            <Text>{variant.viscosity_grade}</Text>
          </TouchableOpacity>
        </View>
      )}
      {variant.api_spec && (
        <Text style={styles.detail}>API Spec: {variant.api_spec}</Text>
      )}
      {variant.iso_grade && (
        <Text style={styles.detail}>ISO Grade: {variant.iso_grade}</Text>
      )}
      {variant.flash_point_c && (
        <Text style={styles.detail}>
          Flash Point: {variant.flash_point_c}°C
        </Text>
      )}
      {variant.notes && (
        <Text style={styles.notes}>Notes: {variant.notes}</Text>
      )}
    </View>
  );
};

export default function LubricantsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.company}>{lubricantData.company}</Text>
      <InputSearch />
      <FlatList
        data={lubricantData.variants}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <VariantCard variant={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  company: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  type: {
    fontSize: 18,
    fontWeight: '600',
  },
  detail: {
    fontSize: 14,
  },
  detailsBtn: {
    backgroundColor: '#e0f7aa',
    padding: 4,
    borderRadius: 4,
  },
  notes: {
    marginTop: 6,
    fontSize: 12,
    fontStyle: 'italic',
    color: '#555',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
