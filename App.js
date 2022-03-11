import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import ItemList from './components/ItemList';
import ItemPage from './components/ItemPage';
import AuthorizationPage from './components/AuthorizationPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

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
                <View style={styles.rightBlock}>
                  <Text style={styles.rightText}>
                    {useSelector((state) => state.userReducer.user)}
                  </Text>
                  <FontAwesome name="user" size={26} color="white" />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="ItemPage"
            component={ItemPage}
            options={{
              title: 'Элемент',
              headerRight: () => (
                <View style={styles.rightBlock}>
                  <Text style={styles.rightText}>
                    {useSelector((state) => state.userReducer.user)}
                  </Text>
                  <FontAwesome name="user" size={26} color="white" />
                </View>
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
  rightBlock: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 10,
    marginTop: 15,
  },
  rightText: {
    color: 'white',
    fontSize: 15,
    marginRight: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
});
