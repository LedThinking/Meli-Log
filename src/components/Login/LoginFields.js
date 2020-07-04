import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Divider, TextInput, Text} from 'react-native-paper';

export default class LoginFields extends Component {
  render() {
    return (
      <>
        <TextInput style={Style.fields} label="Email" mode={'outlined'} />
        <TextInput
          style={Style.fields}
          label="Senha"
          mode={'outlined'}
          secureTextEntry={true}
        />
        <TouchableOpacity style={Style.buttonAltenative}>
          <Text style={Style.textButton}>> Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <Button
          style={[Style.fields, Style.button]}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Login{' '}
        </Button>
        <Divider />
        <Button
          style={[Style.fields, Style.button]}
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          Login com Google{' '}
        </Button>
        <Divider />
        <Button
          style={[Style.fields, Style.button]}
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          Registrar{' '}
        </Button>
      </>
    );
  }
}

const Style = StyleSheet.create({
  fields: {
    margin: 10,
    justifyContent: 'center',
  },
  button: {
    padding: 2,
  },
  buttonAltenative: {
    alignItems: 'flex-end',
    marginRight: 15,
    marginBottom: 10,
  },
  textButton: {
    textDecorationLine: 'underline',
    color: '#0073CF',
  },
});
