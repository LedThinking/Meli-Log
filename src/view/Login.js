import React, { Component } from 'react'
import { StyleSheet,KeyboardAvoidingView} from 'react-native';
import Header from '../components/Login/HeaderLogin.js';
import LoginFields from '../components/Login/LoginFields';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={Styles.item} behavior='position' >
                <Header style={Styles.item}/>
                <LoginFields style={Styles.itens}/>
            </KeyboardAvoidingView>
        )
    }
}

const Styles = StyleSheet.create({
    item: {
      flex: 1
    }
});