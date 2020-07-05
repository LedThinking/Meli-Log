import React, {Component} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import Header from '../../components/Login/HeaderLogin';
import LoginFields from '../../components/Login/LoginFields';


export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="position">
        <Header  />
        <LoginFields  />
      </KeyboardAvoidingView>
    );
  }
}
