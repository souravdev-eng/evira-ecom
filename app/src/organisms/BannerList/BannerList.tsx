import {View, Text} from 'react-native';
import React from 'react';
import styles from './BannerList.styles';

const BannerList = () => {
  return (
    <View>
      <View style={styles.optionsContainer}>
        <Text style={{fontSize: 20, fontWeight: '500'}}>Special Offers</Text>
        <Text style={{fontSize: 20, fontWeight: '500'}}>See All</Text>
      </View>
      <View style={styles.container}>
        <Text style={{color: '#000', fontSize: 20}}>Banner List 1</Text>
      </View>
    </View>
  );
};

export default BannerList;
