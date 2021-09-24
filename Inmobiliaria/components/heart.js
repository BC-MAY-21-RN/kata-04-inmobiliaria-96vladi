import React from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HeartView = ()=>{
    return(
        <View
        style={styles.circle}
        >
            <FontAwesome 
            name='heart'
            size={14}
            color='#fff'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    circle: {
      backgroundColor: '#18af75',
      alignSelf: 'flex-end',
      padding: 6,
      borderRadius: 50,
    },
  });

export default HeartView;