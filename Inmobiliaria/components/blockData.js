import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const BlockData = ({ item }) => {
  return(
    <View
      style={styles.blockData}
    >
      <View>
        <Text
          style={{
            fontSize: 18
          }}
        >
          {item.name}
        </Text>
      </View>
      <View>
        <Text>
          {item.location}}
        </Text>
      </View>
      <View>
        <Text
        >
          {item.bedroom}
          {item.shower}
          {item.size}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold"
          }}
        >
          {item.price}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blockData:{
    alignContent: 'flex-end',
    width: '60%',
    height: '90%',
    backgroundColor: '#FCF1B6',
  },
  data: {

  }
});

export default BlockData;
