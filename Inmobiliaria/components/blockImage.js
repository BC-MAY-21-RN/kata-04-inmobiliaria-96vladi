import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BlockImage = ({ item }) => {
  return(
    <View
      style={styles.imgContainer}
    >
      <ImageBackground
        source={{
          uri: item && item.image || 'https://concasa.com.bo/wp-content/uploads/wp-realestate-uploads/_property_featured_image/2021/04/135521089_2685446131765920_7922389216418683418_o-850x550.jpg'
        }}
        style = {styles.imgBackground}
        imageStyle={{ borderRadius:10 }}
      >
        <View
          style={styles.stars}
        >
          <FontAwesome 
            name='star' 
            size={18} 
            color='#FECD1A' 
          />
          <Text
            style={{
              marginHorizontal:4
            }}
          >
            {item.qualification}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    width: '40%',
    height: '90%',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
  },
  stars:{
    width: '40%',
    height: '20%',
    flexDirection:'row',
    backgroundColor: '#FCF1B6',
    marginVertical: '65%',
    marginHorizontal: '30%',
    borderRadius: 6,
    padding:2
  }
});

export default BlockImage;
