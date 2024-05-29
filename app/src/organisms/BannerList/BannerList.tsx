import {View, Text} from 'react-native';
import React from 'react';
import styles from './BannerList.styles';

const BannerList = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={{color: '#000', fontSize: 20}}>Banner List 1</Text>
      </View>
    </View>
  );
};

export default BannerList;
