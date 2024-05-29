import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1.1,
    height: 180,
    backgroundColor: '#E7E7E7',
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default styles;
