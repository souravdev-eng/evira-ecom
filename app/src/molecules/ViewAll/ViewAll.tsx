import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ViewAll.styles';

interface Props {
  title: string;
  onPress?: () => void;
  style?: any;
  subtitle?: string;
  star?: boolean;
}

const ViewAll: FC<Props> = ({title, onPress, style, subtitle}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.textBold}>{title}</Text>

      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <Text style={[styles.textBold, {color: '#000', fontSize: 16}]}>
          {subtitle ? subtitle : 'See All'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewAll;
