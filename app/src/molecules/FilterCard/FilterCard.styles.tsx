import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tag: {
    borderWidth: 1.2,
    marginHorizontal: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 18,
    minWidth: 55,
    borderColor: '#000',
    justifyContent: 'center',
  },
  tagText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  tagActiveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  tagActive: {
    marginHorizontal: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 18,
    minWidth: 55,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
});

export default styles;
