import React, { Component } from 'react'
import {StyleSheet } from 'react-native'
import { Button , Divider} from 'react-native-paper';
import { TextInput } from 'react-native-paper';


export default class LoginFields extends Component {
    
    render() {
        return (
            <>
                <TextInput style={Style.fields} label="Email" />
                <TextInput style={Style.fields} label="Senha"  />
                
                <Button style={[Style.fields,Style.button]} mode="contained" onPress={() => console.log('Pressed')}>Login </Button>
                <Divider />
                <Button style={[Style.fields,Style.button]} mode="outlined" onPress={() => console.log('Pressed')}>Registrar </Button>

            </>
        )
    }
}




const Style = StyleSheet.create({
    fields: { 
        margin: 10,
        justifyContent: 'center',
    },
    button: {
        padding: 5
    },
})