import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListItem = ({ item }) => {
  return(
    <View

    >
      <Image
        style={
          styles.itemImage
        }
        source={{
          uri:'https://concasa.com.bo/wp-content/uploads/wp-realestate-uploads/_property_featured_image/2021/04/135521089_2685446131765920_7922389216418683418_o-850x550.jpg',
        }}
      />
      <Text style={ styles.itemName }>
        {item.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemImage: {
    width: '100%',
    height: 105,
    borderRadius: 6,
  },
  itemContainer:{
    width: 130,
    padding: 7,
  },
  itemName:{
    fontSize: 18,
    padding: 0,
    margin: 0,
    marginTop: 5,
  }
});

export default ListItem;
