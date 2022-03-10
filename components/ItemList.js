import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../store/infoReducer';
import { Button, FlatList, TouchableOpacity } from 'react-native';
import Item from './Item';

export default function ItemList({ navigation }) {
  const items = useSelector((state) => state.infoReducer.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  console.log(items);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ItemPage', { item })}
            style={styles.touch}
          >
            <Item item={item} />
          </TouchableOpacity>
        )}
      />
      <Button
        title="Go to Page"
        onPress={() => navigation.navigate('ItemPage', { items })}
      />
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
  list: {
    marginTop: 30,
    width: '80%',
  },
  touch: {
    width: '100%',
  },
});
