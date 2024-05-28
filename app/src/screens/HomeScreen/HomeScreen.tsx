import {View, Text} from 'react-native';
import React from 'react';
import styles from './HomeScreen.styles';
import Header from '../../organisms/Header/Header';
import SearchBar from '../../organisms/SearchBar/SearchBar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* User profile */}
      <Header />
      {/* Search bar */}
      <View style={{marginVertical: 20}}>
        <SearchBar />
      </View>
      {/* Special offers */}
      {/* Category icon list */}
      {/* filter options */}
      {/* List of products */}
    </View>
  );
};

export default HomeScreen;
