import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Item({ item }) {
  return <Text style={styles.text}>{item.title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
