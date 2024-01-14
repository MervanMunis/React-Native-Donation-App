import {StyleSheet} from 'react-native';
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
  },
  registrationButton: {
    alignItems: 'center',
  },
  error: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: 16,
    color: '#FF0000',
    marginBottom: 24,
  },
});

export default style;
