import {StyleSheet} from 'react-native';
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginLeft: 6,
    height: '100%',
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: 14,
    lineHeight: 14,
    color: '#686C7A',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#F3F5F9',
    height: 50,
    borderRadius: 15,
  },
});

export default style;
