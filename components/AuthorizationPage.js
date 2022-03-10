import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/userReducer';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default function AuthorizationPage({ navigation }) {
  const [username, setUsername] = useState('');

  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const onChange = (text) => {
    setUsername(text);
  };

  const addHandler = (text) => {
    dispatch(setUser(text));
  };

  console.log(user);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вход</Text>
      <Text style={styles.subtitle}>
        React был создан Джорданом Валке, разработчиком программного обеспечения
        из Facebook. Впервые React использовался в новостной ленте Facebook в
        2011 году и позже в ленте Instagram в 2012 году. Исходный код React
        открыт в мае 2013 года на конференции «JSConf US». React Native
        анонсирован на конференции Facebook «React.js Conf» в феврале 2015 года,
        а исходный код открыт в марте 2015 года. Он позволяет разрабатывать
        нативные Android-, iOS- и UWP-приложения с использованием React. 18
        апреля 2017 года Facebook анонсировал React Fiber, переписанную и
        оптимизированную версию React.
      </Text>
      <TextInput
        maxLength={20}
        style={styles.input}
        placeholder="Логин"
        onChangeText={onChange}
      />
      <TextInput
        maxLength={20}
        secureTextEntry={true}
        style={styles.input}
        placeholder="Пароль"
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          addHandler(username);
          navigation.navigate('ItemList');
        }}
      >
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
  title: {
    marginTop: 55,
    fontWeight: 'bold',
    fontSize: 45,
    color: '#B22222',
  },
  subtitle: {
    color: 'silver',
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: '10%',
    marginTop: 25,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#b22222',
    width: '70%',
    height: 40,
    textAlign: 'center',
    marginVertical: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    padding: 10,
  },
  input: {
    marginTop: 25,
    width: '90%',
    fontSize: 15,
  },
});
