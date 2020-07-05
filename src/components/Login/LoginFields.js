import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Divider, TextInput, Text} from 'react-native-paper';
import {GoogleSigninButton} from '@react-native-community/google-signin';

const LoginFields = ({navigation}) => {
  return (
    <View style={Style.container}>
      <TextInput style={Style.fields} label="Email" mode={'outlined'} />
      <TextInput
        style={Style.fields}
        label="Senha"
        mode={'outlined'}
        secureTextEntry={true}
      />
      <View style={{width: 370}}>
        <TouchableOpacity style={Style.buttonAltenative}>
          <Text style={Style.textButton}> &gt;Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

      <Divider style={{height: 5, backgroundColor: 'red'}} />
      <Divider />
      <Divider />

      <Button
        style={[Style.fields]}
        mode="contained"
        onPress={() => navigation.navigate('Main')}>
        Login{' '}
      </Button>

      <GoogleSigninButton
        style={[Style.button]}
        size={GoogleSigninButton.Size.Wide}
      />

      <Button
        style={[Style.fields]}
        mode="outlined"
        onPress={() => navigation.navigate('Register')}>
        Registrar
      </Button>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 0,
  },
  fields: {
    justifyContent: 'center',
    width: 370,
    height: 50,
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    width: 377,
    height: 55,
    alignItems: 'center',
  },
  buttonAltenative: {
    alignItems: 'flex-end',
  },
  textButton: {
    textDecorationLine: 'underline',
    color: '#0073CF',
    marginTop: 10,
  },
});

export default LoginFields;
