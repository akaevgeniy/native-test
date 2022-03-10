import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ItemPage({ route, navigation }) {
  const { items } = route.params;
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Text>{items[1].name}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
