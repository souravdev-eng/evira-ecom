import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './CategoryList.styles';
import {CATEGORY_LIST} from '../../assets/data/categoryList';

const CategoryList = () => {
  const renderItem = (item: any) => (
    <View
      style={{
        justifyContent: 'center',
        width: 70,
        marginHorizontal: 10,
        marginVertical: 14,
      }}>
      <TouchableOpacity activeOpacity={0.5} style={styles.container}>
        <Image
          source={require('../../assets/icons/heart-sharp.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text numberOfLines={1} style={styles.categoryText}>
        {item.category}
      </Text>
    </View>
  );

  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {CATEGORY_LIST.map((el, idx) => (
        <React.Fragment key={idx}>{renderItem(el)}</React.Fragment>
      ))}
    </View>
  );
};

export default CategoryList;
