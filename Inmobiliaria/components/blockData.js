import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HeartView from './heart';
const BlockData = ({ item }) => {
  return(
    <View
      style={styles.blockData}
    >
      <View style={styles.titleAndPrice}>
        <Text
          style={styles.textTitlePrice}
        >
          {item.name}
        </Text>
      </View>
      <View 
      style={styles.location}>
      <FontAwesome 
        name='map-marker' 
        size={18} 
        color='#474747' 
      />
        <Text
          style={styles.TextLocation}
        >
          {item.location}
        </Text>
      </View>
      <View style={styles.features}>
        <FontAwesome 
          name='bed' 
          size={18} 
          color='#D5D4D0' 
        />
        <Text style={{marginLeft:5, marginRight:20,fontWeight:'bold'}}>
          {item.bedroom}
        </Text>
        <FontAwesome 
              name='bath' 
              size={18} 
              color='#D5D4D0' 
        />
        <Text style={{marginLeft:5, marginRight:20,fontWeight:'bold'}}>
          {item.shower}
        </Text>
        <FontAwesome 
          name='home' 
          size={18} 
          color='#D5D4D0' 
        />
        <Text style={{marginLeft:5, marginRight:20,fontWeight:'bold'}}>
          {item.size}
        </Text>
      </View>
      <View style={styles.titleAndPrice}>
        <Text
          style={styles.textTitlePrice}
        >
          {item.price}
        </Text>
        <HeartView />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  blockData:{
    alignContent: 'flex-end',
    width: '60%',
    height: '90%',
  },
  textTitlePrice: {
    flexDirection:'row',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:5
  },
  location:{
    flexDirection:'row',
    marginHorizontal:15,
    height:'30%',
    alignItems:'center'
  },
  TextLocation:{
    marginHorizontal:10,
    textAlign:'justify'
  },
  titleAndPrice:{
    marginHorizontal:15,
    height:'25%',
    flexDirection:'row'
  },
  features:{
    flexDirection:'row',
    marginHorizontal:15,
    height:'25%',
    alignItems:'center'
  },
});

export default BlockData;
