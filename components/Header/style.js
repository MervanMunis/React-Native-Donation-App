import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title1: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: 24,
    lineHeight: 29,
    color: 'black',
  },
  title2: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: 18,
    lineHeight: 22,
    color: 'black',
  },
  title3: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: 16,
    lineHeight: 19,
    color: 'black',
  },
});

export default style;
