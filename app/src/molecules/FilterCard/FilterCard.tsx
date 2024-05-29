import React, {FC} from 'react';
import {Text, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import styles from './FilterCard.styles';

interface FilterCardProps {
  title: string;
  onPress?: () => void;
  isActive?: boolean;
  style?: StyleProp<ViewStyle>;
}

const FilterCard: FC<FilterCardProps> = ({title, onPress, isActive, style}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[style, isActive ? styles.tagActive : styles.tag]}
      onPress={onPress}>
      <Text style={isActive ? styles.tagActiveText : styles.tagText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterCard;
