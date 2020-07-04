import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View>
        <View style={styles.HeaderBackground}>
          <Image source={require('../../assets/Logo.png')} />
          <Text style={styles.Logo}>Meli Log</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HeaderBackground: {
    height: 260,
    backgroundColor: '#675ABF',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Logo: {
    fontSize: 42,
    color: '#ffff',
    paddingBottom: 10,
  },
});
