import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ItemPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
