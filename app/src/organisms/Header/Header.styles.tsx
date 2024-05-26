import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    objectFit: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 4,
  },
});

export default styles;
