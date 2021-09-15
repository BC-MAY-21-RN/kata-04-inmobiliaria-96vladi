import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BlockImage from './blockImage';

const ListItem = ({ item }) => {
  return(
    <View
      style={styles.block}
    >
      <BlockImage
        item = { item }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block:{
    width: '100%',
    height: 150,
    padding: 10,
    marginVertical: 13,
    backgroundColor: '#F0FDFF',
    borderRadius: 10,
  },
  itemName:{
    fontSize: 18,
    padding: 0,
    margin: 0,
    marginTop: 5,
  }
});

export default ListItem;
