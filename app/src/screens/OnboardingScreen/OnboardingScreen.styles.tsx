import {StyleSheet, Dimensions} from 'react-native';

const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  imageContainer: {
    height: HEIGHT / 1.7,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  indexContainer: {
    alignSelf: 'center',
    marginVertical: 25,
    flexDirection: 'row',
    gap: 8,
  },
});

export default styles;
