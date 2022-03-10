import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import ItemList from './components/ItemList';
import ItemPage from './components/ItemPage';
import AuthorizationPage from './components/AuthorizationPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AuthorizationPage"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#B22222',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: 'white',
              fontSize: 15,
            },
          }}
        >
          <Stack.Screen
            name="AuthorizationPage"
            component={AuthorizationPage}
            options={{
              title: 'Вход в личный кабинет',
            }}
          />
          <Stack.Screen
            name="ItemList"
            component={ItemList}
            options={{
              title: 'Список',
              headerLeft: () => false,
              headerRight: () => (
                <Text style={styles.rightText}>
                  {useSelector((state) => state.userReducer.user)}
                </Text>
              ),
            }}
          />
          <Stack.Screen
            name="ItemPage"
            component={ItemPage}
            options={{
              title: 'Элемент',
              headerRight: () => (
                <Text style={styles.rightText}>
                  {useSelector((state) => state.userReducer.user)}
                </Text>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightText: {
    color: 'white',
    fontSize: 15,
    marginRight: 10,
  },
});
