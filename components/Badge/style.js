import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: 22,
    justifyContent: 'center',
    borderRadius: 50,
  },
  title: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 10,
    lineHeight: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default style;
