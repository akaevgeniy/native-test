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
          style={[styles.button, styles.buttonWhite]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.buttonText, styles.textWhiteTheme]}>Назад</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('AuthorizationPage')}
        >
          <Text style={styles.buttonText}>Выйти из аккаунта</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
  },
  button: {
    backgroundColor: '#b22222',
    width: '50%',
    height: 40,
    textAlign: 'center',
  },
  buttonWhite: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#b22222',
  },
  buttonText: {
    color: 'white',
    padding: 10,
  },
  textWhiteTheme: {
    color: '#b22222',
  },
  text: {
    fontWeight: 'bold',
    marginTop: 20,
    maxWidth: '90%',
    padding: 0,
    marginHorizontal: '5%',
    fontWeight: 'bold',
    fontSize: 15,
  },
  subtext: {
    marginTop: 20,
    maxWidth: '90%',
    padding: 0,
    marginHorizontal: '5%',
    fontSize: 15,
  },
});
