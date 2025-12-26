import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colours from './Colors';

const SpecificationsCard = ({ data }: any) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <Text style={styles.icon}>▦</Text>
        </View>
        <Text style={styles.headerText}>Specifications</Text>
      </View>

      {/* Table */}
      <View style={styles.table}>
        {/* Table Header */}
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerCell]}>Property</Text>
          <Text style={[styles.cell, styles.headerCell]}>Value</Text>
        </View>

        {/* Table Rows */}
        {data.map((item: any, index: number) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.property}</Text>
            <Text style={styles.cellValue}>{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SpecificationsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    gap: 10,
  },

  iconCircle: {
    width: 65,
    height: 65,
    borderRadius: 20,
    backgroundColor: '#E0F2FE',
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 10,
  },

  icon: {
    fontSize: 45,
    color: '#0369A1',
    fontWeight: '700',
    textAlign: 'center',
  },

  headerText: {
    textAlign: 'center',
    color: Colours.blueDark,
    fontSize: 25,
    fontWeight: '700',
  },

  /* Table */
  table: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },

  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#DBEAFE',
  },

  headerRow: {
    backgroundColor: '#F0F9FF',
  },

  cell: {
    flex: 1,
    padding: 12,
    fontSize: 14,
    color: '#0F172A',
  },

  headerCell: {
    fontWeight: '700',
  },

  cellValue: {
    flex: 1,
    padding: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
  },
});
