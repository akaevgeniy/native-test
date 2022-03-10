import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import ItemList from './components/ItemList';
import ItemPage from './components/ItemPage';
import AuthorizationPage from './components/AuthorizationPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
              headerLeft: false,
            }}
          />
          <Stack.Screen
            name="ItemPage"
            component={ItemPage}
            options={{
              title: 'Элемент',
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
});
