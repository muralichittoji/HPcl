import React from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';
import supportData from '../Assests/Jsons/supportData.json';

const ContactCard = ({ contact }: any) => {
  const handlePress = () => {
    if (contact.value.startsWith('http')) {
      Linking.openURL(contact.value);
    } else if (contact.value.match(/^\d+$/)) {
      Linking.openURL(`tel:${contact.value}`);
    } else if (contact.value.includes('@')) {
      Linking.openURL(`mailto:${contact.value}`);
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Text style={styles.type}>{contact.type}</Text>
      <Text style={styles.value}>{contact.value}</Text>
      {contact.notes && <Text style={styles.notes}>{contact.notes}</Text>}
    </TouchableOpacity>
  );
};

export default function SupportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.company}>{supportData.company}</Text>
      <FlatList
        data={supportData.contacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ContactCard contact={item} />}
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
  value: {
    fontSize: 16,
    color: '#007bff',
    marginTop: 4,
  },
  notes: {
    marginTop: 4,
    fontSize: 12,
    fontStyle: 'italic',
    color: '#555',
  },
});
