// LPGScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import lpgData from '../Assests/Jsons/lpgData.json';
import InputSearch from '../Assests/Common/InputSearch';

const capitalizeWords = (str: string) => {
  return str
    .split(/_| /)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const LPGScreen = () => {
  const renderSpecification = (key: string, value: any) => {
    if (key === 'type' || key === 'brand') return null;

    if (Array.isArray(value)) {
      return (
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.label}>{capitalizeWords(key)}</Text>
          {value.map((item, index) => (
            <Text key={index} style={styles.value}>
              • {item.toString()}
            </Text>
          ))}
        </View>
      );
    }

    return (
      <View style={styles.row}>
        <Text style={styles.label}>{capitalizeWords(key)}</Text>
        <Text style={styles.value}>{value?.toString()}</Text>
      </View>
    );
  };

  const renderVariant = ({ item }: { item: (typeof lpgData.variants)[0] }) => (
    <View style={styles.card}>
      <Text style={styles.subTitle}>
        {item.type} ({item.brand})
      </Text>
      {Object.entries(item).map(([key, value], idx) => (
        <View key={idx}>{renderSpecification(key, value)}</View>
      ))}
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={lpgData.variants}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderVariant}
      ListHeaderComponent={
        <View>
          <Text style={styles.company}>{lpgData.company}</Text>
          <InputSearch />
        </View>
      }
      contentContainerStyle={{ paddingBottom: 16 }}
    />
  );
};

export default LPGScreen;

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#f5f5f5' },
  container: { flex: 1, paddingHorizontal: 16 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    elevation: 3,
  },
  subTitle: { fontWeight: '600', fontSize: 16, marginBottom: 8 },
  row: { marginBottom: 6, paddingVertical: 4 },
  label: { fontWeight: '600', textTransform: 'capitalize' },
  value: { marginLeft: 8, color: '#333' },
  company: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 16,
  },
});
