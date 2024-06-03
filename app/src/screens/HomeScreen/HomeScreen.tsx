import React, {useState} from 'react';
import {View, ScrollView, FlatList} from 'react-native';

import styles from './HomeScreen.styles';
import {CATEGORY_TAG} from '../../assets/data/categoryTag';

import Header from '../../organisms/Header/Header';
import ViewAll from '../../molecules/ViewAll/ViewAll';
import SearchBar from '../../organisms/SearchBar/SearchBar';
import BannerList from '../../organisms/BannerList/BannerList';
import FilterCard from '../../molecules/FilterCard/FilterCard';
import CategoryList from '../../organisms/CategoryList/CategoryList';
import ProductCard from '../../molecules/ProductCard/ProductCard';

const HomeScreen = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1, backgroundColor: '#FCFCFC'}}>
      <View style={styles.container}>
        {/* User profile */}
        <Header />
        {/* Search bar */}
        <View style={{marginVertical: 20}}>
          <SearchBar />
        </View>
        {/* Special offers */}
        <ViewAll
          style={styles.viewAllContainer}
          title="Special Offers"
          onPress={() => {}}
        />
        <BannerList />
        {/* Category icon list */}
        <View style={{marginVertical: 20}}>
          <CategoryList />
        </View>
        {/* filter options */}
        <ViewAll
          style={styles.viewAllContainer}
          title="Most Popular"
          onPress={() => {}}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={CATEGORY_TAG}
          style={{marginBottom: 12}}
          renderItem={({item}) => (
            <FilterCard
              title={item}
              isActive={item === activeFilter ? true : false}
              onPress={() => setActiveFilter(item)}
            />
          )}
          keyExtractor={(_, idx) => idx.toString()}
        />
        <View style={styles.productContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
            <ProductCard key={idx} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
