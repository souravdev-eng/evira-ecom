import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './SearchBar.styles';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={{paddingLeft: 4}}>
        <Image
          source={require('../../assets/icons/search-outline.png')}
          style={{height: 25, width: 25}}
        />
      </View>
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor={'#C4C4C4'}
        />
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/options-outline.png')}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
