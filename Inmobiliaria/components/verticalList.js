import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import ListItem from './listItems';

const VerticalList = ({ items }) => {
  return(
    <View style={ styles.container }>
      <Text>
        Titulo
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={true}
        style = { styles.scrollContainer }
      >
        {items.map((listItem, index) => (
          <ListItem
            item={listItem}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop: 25,
    padding: 5,
    height: 'auto',
  },
  scrollContainer:{
    paddingBottom: 15,
  }
});

export default VerticalList;
