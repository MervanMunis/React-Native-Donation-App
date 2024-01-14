import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: 55,
    justifyContent: 'center',
    borderRadius: 50,
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default style;
