import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ItemPage({ route, navigation }) {
  const { items } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{items[1].name}</Text>
      <Text>{items[1].name}</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Назад"
          onPress={() => navigation.goBack()}
        />
        <Button
          style={styles.button}
          title="Выйти из аккаунта"
          onPress={() => navigation.goBack()}
        />
      </View>
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
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'end',
  },
  button: {
    width: '50%',
  },
  text: {
    fontWeight: 'bold',
    marginTop: 20,
  },
});
