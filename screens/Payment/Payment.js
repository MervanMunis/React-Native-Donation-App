import React, {useState} from 'react';

import { Alert, SafeAreaView, ScrollView, Text, View } from "react-native";
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import style from './style';
import {useSelector} from 'react-redux';
import Button from '../../components/Button/Button';
import {
  CardForm,
  StripeProvider,
  useConfirmPayment,
} from '@stripe/stripe-react-native';

const Payment = ({navigation}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const [isReady, setIsReady] = useState(false);
  const {confirmPayment, loadingPayment} = useConfirmPayment();
  const user = useSelector(state => state.user);
  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(
      'http://localhost:3000/create-payment-intent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          currency: 'usd',
          amount: donationItemInformation.price * 100,
        }),
      },
    );
    const {clientScrete} = await response.json();
    return clientScrete;
  };

  const handlePayment = async () => {
    const clientSecrete = await fetchPaymentIntentClientSecret();
    const {error, paymentIntent} = await confirmPayment(clientSecrete, {
      paymentMethodType: 'Card',
    });
    if (error) {
      Alert.alert('Error occurred with your payment.', error.localizedMessage);
    } else if (paymentIntent) {
      Alert.alert('payment is successful');
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={style.paymentContainer}>
        <Header title={'Making Donation'} />
        <Text style={style.donationAmountDescription}>
          You are about to donate {donationItemInformation.price}
        </Text>
        {/*<View>*/}
        {/*  <StripeProvider publishableKey={} children={}>*/}
        {/*    <CardForm style={style.cardForm} onFormComplete={() => {
          setIsReady(true);
        }} />*/}
        {/*  </StripeProvider>*/}
        {/*</View>*/}
      </ScrollView>
      <View style={style.button}>
        <Button
          title={'Donate'}
          isDisabled={!isReady || loadingPayment}
          onPress={async () => await handlePayment()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
