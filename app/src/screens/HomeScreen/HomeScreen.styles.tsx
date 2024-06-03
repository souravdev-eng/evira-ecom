import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    backgroundColor: '#fff',
  },
  viewAllContainer: {
    width: '95%',
    alignSelf: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    gap: 8,
    padding: 0,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default styles;
