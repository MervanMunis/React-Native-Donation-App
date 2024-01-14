import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
    color: '#636776',
  },
  username: {
    marginTop: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  searchBox: {
    marginHorizontal: 24,
    marginTop: 20,
    marginBottom: 15,
  },
  highlightedImageContainer: {
    marginHorizontal: 24,
  },
  highlightedImage: {
    width: '100%',
    height: 160,
  },
  categories: {
    marginLeft: 24,
  },
  categoryItem: {
    marginRight: 10,
  },
  categoryHeader: {
    marginHorizontal: 24,
    marginTop: 20,
    marginBottom: 16,
  },
  donationItemsContainer: {
    marginTop: 20,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  singleDonationItem: {
    maxWidth: '49%',
    marginBottom: 23,

  },
});

export default style;
