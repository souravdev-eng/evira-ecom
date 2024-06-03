import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './ProductCard.styles';

interface ProductCardProps {
  title: string;
  productImage: string;
  sold: number;
  rating: number;
  price: number;
  onPress: () => void;
}

const ProductCard = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/lather-bag.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.title} numberOfLines={1}>
          Snake Leather Bag Snake Leather Bag
        </Text>
        <View style={{flexDirection: 'row', gap: 12, marginVertical: 10}}>
          {/* Ratting */}
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Image
              source={require('../../assets/icons/star-half-outline.png')}
              style={{width: 20, height: 20}}
            />
            <Text style={{fontSize: 16}}>4.5</Text>
          </View>
          <View style={styles.divider} />
          {/* Sold */}
          <View style={styles.soldContainer}>
            <Text style={styles.soldText}>652 sold</Text>
          </View>
        </View>
        <Text style={styles.title}>$400.00</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
