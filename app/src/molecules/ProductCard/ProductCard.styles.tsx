import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: 265,
    width: WIDTH / 2.1,
    borderRadius: 16,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  imageContainer: {
    height: 150,
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    objectFit: 'cover',
    alignSelf: 'center',
  },
  image: {
    backgroundColor: '#F3F3F3',
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  productDetails: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    marginTop: 10,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    borderEndWidth: 1,
    borderEndColor: '#000',
    height: 20,
    alignSelf: 'center',
  },
  soldContainer: {
    backgroundColor: '#ECECEC',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  soldText: {color: '#000', fontSize: 15},
});

export default styles;
