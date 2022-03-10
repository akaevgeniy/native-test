import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Item({ item }) {
  return (
    <TouchableOpacity style={styles.touch}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touch: {
    width: '100%',
  },
  text: {
    padding: 20,
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 1,
    width: '100%',
    marginTop: 10,
  },
});
