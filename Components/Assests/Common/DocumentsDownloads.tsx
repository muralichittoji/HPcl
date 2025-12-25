import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const documents = [
  { title: 'Product Data Sheet (PDS)', icon: '📄' },
  { title: 'Material Safety Data Sheet (MSDS)', icon: '🛡️' },
  { title: 'Brochure', icon: '📘' },
];

const DocumentsDownloads = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerIcon}>📁</Text>
        <Text style={styles.headerText}>Documents & Downloads</Text>
      </View>

      {/* List */}
      {documents.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.item}
          onPress={() => navigation.navigate('SelectedData')}
        >
          <View style={styles.itemIcon}>
            <Text style={styles.iconText}>{item.icon}</Text>
          </View>
          <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DocumentsDownloads;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F9FF',
    padding: 16,
    borderRadius: 18,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  headerIcon: {
    fontSize: 22,
    marginRight: 8,
  },

  headerText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },

  /* Items */
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DBEAFE',
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
  },

  itemIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  iconText: {
    fontSize: 16,
    color: '#FFFFFF',
  },

  itemText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
    flex: 1,
  },
});
