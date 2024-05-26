import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './Header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', gap: 20}}>
        <View>
          <Image
            source={require('../../assets/images/onboarding-img1.png')}
            style={styles.profileImage}
          />
        </View>
        <View>
          <Text style={styles.subTitle}>Good morning 👋</Text>
          <Text style={styles.title}>Sourav Majumdar</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: 12}}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/notifications-outline.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/heart-outline.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
