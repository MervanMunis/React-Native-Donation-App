import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: 50,
    justifyContent: 'center',
    borderRadius: 50,
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  inactiveTitle: {
    color: '#79869F',
  },
  title: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 14,
    lineHeight: 17,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default style;
