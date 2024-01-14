import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  label: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    lineHeight: 15,
    color: '#36455A',
  },
  input: {
    marginVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167, 167, 167, 0.5)',
  },
});

export default style;
