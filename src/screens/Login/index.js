import React, {Component} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import Header from '../../components/Login/HeaderLogin';
import LoginFields from '../../components/Login/LoginFields';

import Styles from './style';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={Styles.item} behavior="position">
        <Header style={Styles.item} />
        <LoginFields style={Styles.itens} />
      </KeyboardAvoidingView>
    );
  }
}
