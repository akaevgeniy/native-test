import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from 'react-native';

export default function ItemPage({ route, navigation }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.subtext}>{item.body}</Text>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text>Назад</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('AuthorizationPage')}
        >
          <Text>Выйти из аккаунта</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'start',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'end',
  },
  button: {
    backgroundColor: '#b22222',
  },
  text: {
    fontWeight: 'bold',
    marginTop: 20,
    maxWidth: '90%',
    padding: 0,
    marginHorizontal: '5%',
  },
  subtext: {
    marginTop: 20,
    maxWidth: '90%',
    padding: 0,
    marginHorizontal: '5%',
  },
});
