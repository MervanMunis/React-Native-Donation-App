import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const [width, height] = Dimensions.get('window');

// This refers to Iphone 6,7,8. so if the it is smaller then that the deviec is small.
const isSmall = (width <= 375) && !DeviceInfo.hasNotch();

const guidlineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const horizontalScale = size => (width / guidlineBaseWidth()) * size;

const guidlineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const verticalScale = size => (height / guidlineBaseHeight()) * size;

const guidlineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const scaleFontSize = size => Math.round((width / guidlineBaseFonts()) * size);

export {horizontalScale, verticalScale, scaleFontSize};
