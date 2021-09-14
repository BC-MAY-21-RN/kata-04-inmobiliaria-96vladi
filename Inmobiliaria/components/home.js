import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import VerticalList from './verticalList';

const Home = () => {
  return (
    <View style={styles.container}>
      <VerticalList
        items = { recipes }
      />
    </View>
  );
};


const recipes = [
  {
    name: 'item 1'
  },
  {
    name: 'item 2'
  },
  {
    name: 'item 3'
  },
  {
    name: 'item 3'
  },
  {
    name: 'item 3'
  },
  {
    name: 'item 3'
  },
  {
    name: 'item 3'
  },
  {
    name: 'item 3'
  },
  {
    name: 'item 3'
  },
  {
    name: 'item 3'
  }
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Home;
