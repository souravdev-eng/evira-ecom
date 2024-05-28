import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1.1,
    height: 60,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 8,
    gap: 10,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  input: {
    width: '85%',
    height: 40,
    color: '#000',
    fontSize: 16,
  },
});

export default styles;
