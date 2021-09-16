import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const BlockData = ({ item }) => {
  return(
    <View
      style={styles.blockData}
    >
      <Text>
        The Willows
      </Text>
      <Text>
        Ubicacion
      </Text>
      <Text>
        Caracteristicas
      </Text>
      <Text>
        precio
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blockData:{
    alignContent: 'flex-end',
    width: '60%',
    height: '90%',
    backgroundColor: '#FCF1B6',
    padding: 10
  },
  data: {

  }
});

export default BlockData;
