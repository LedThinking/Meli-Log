import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import Header from '../../components/Login/HeaderLogin';
import LoginFields from '../../components/Login/LoginFields';

export default function Login({navigation}) {
  return (
    <KeyboardAvoidingView behavior="position">
      <Header />
      <LoginFields navigation={navigation} />
    </KeyboardAvoidingView>
  );
}
