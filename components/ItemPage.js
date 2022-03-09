import React, { useEffect } from 'react';

export default function ItemPage({ info }) {
  return (
    <View style={styles.container}>
      <Text>{info.name}</Text>
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
