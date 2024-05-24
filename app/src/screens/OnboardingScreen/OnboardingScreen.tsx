import React, {useState} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import Button from '../../atoms/Button/Button';
import styles from './OnboardingScreen.styles';

const ONBOARDING_DATA = [
  {
    text: 'We provide high quality products just for you',
    image: require('../../assets/images/onboarding-img1.png'),
    buttonText: 'Next',
  },
  {
    text: 'Your satisfaction is our number one priority',
    image: require('../../assets/images/onboarding-img2.png'),
    buttonText: 'Next',
  },
  {
    text: "Let's fulfill your daily needs with Evira right now!",
    image: require('../../assets/images/onboarding-img3.png'),
    buttonText: 'Get Started',
  },
];

const OnboardingScreen = () => {
  const [indexNo, setIndexNo] = useState(0);
  const el = ONBOARDING_DATA[indexNo];

  const handleNextClick = () => {
    if (indexNo === ONBOARDING_DATA.length - 1) {
      return;
    } else {
      setIndexNo(indexNo + 1);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.imageContainer}>
        <Image source={el.image} style={{height: '100%', objectFit: 'cover'}} />
      </View>
      <View style={{width: '80%', alignSelf: 'center', marginTop: 20}}>
        <Text style={{fontSize: 30, fontWeight: '700', textAlign: 'center'}}>
          {el.text}
        </Text>
      </View>
      <View style={styles.indexContainer}>
        {ONBOARDING_DATA.map((_, idx) => (
          <View
            key={idx}
            style={{
              height: 10,
              backgroundColor: indexNo === idx ? '#0f0f0f' : 'grey',
              width: indexNo === idx ? 30 : 10,
              borderRadius: 50,
            }}
          />
        ))}
      </View>
      <View style={{marginTop: 8, width: '90%', alignSelf: 'center'}}>
        <Button title={el.buttonText} onPress={handleNextClick} />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
