import React, {Component} from 'react';
import {Button} from 'react-native-paper';

import {
  Container,
  TypeTitle,
  TypeDescription,
  RequestButton,
  RequestButtonText,
} from './styles';

export default class Details extends Component {
  render() {
    return (
      <Container>
        <TypeTitle>Mercado Livre</TypeTitle>
        <TypeDescription>Rua oceano Artico</TypeDescription>

        <TypeTitle>Entrega Intermunicipal</TypeTitle>
        <TypeDescription>Frete: R$6,00</TypeDescription>

        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Aceitar pediddo
        </Button>
      </Container>
    );
  }
}
