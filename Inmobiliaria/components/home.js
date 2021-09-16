import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import VerticalList from './verticalList';
import { realState } from '../data/data.js';

const Home = () => {
  return (
    <View style={styles.container}>
      <VerticalList
        items = { realState }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Home;
