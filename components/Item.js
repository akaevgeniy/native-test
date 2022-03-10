import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Item({ item }) {
  return <Text style={styles.text}>{item.title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 1,
    width: '100%',
    marginTop: 10,
  },
});
