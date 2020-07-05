/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {FlatList, View, SafeAreaView, Text} from 'react-native';
import {List, Button} from 'react-native-paper';

import styles from './style';

const Wallet = () => {
  const [order, setOrders] = useState([]);
  const [allMoney, setallMoney] = useState(0);

  // Gera 5 elementos aleatorios
  function generateFakeData() {
    let data = [];
    for (var i = 0; i < 5; i++) {
      data.push({
        id: `${Math.random()}`,
        title: 'Encomenda Mercado Livre',
        description: '01/01/1990',
        value: 0.5,
      });
    }
    return data;
  }

  // Chama a função para gerar 5 elementos e adiciona no estado "order" junto com todos os elementos que já estavam lá.
  // Isso faz com que a lista sempre aumente a medida que o scroll desce.
  function loadOrders() {
    const response = generateFakeData();
    setOrders([...order, ...response]);
    loadMoney();
  }

  function loadMoney() {
    order.map(item => {
      const sum = item.value + allMoney;
      setallMoney(sum);
    });
  }

  // Executa o carregamento das orders na lista logo ao iniciar a tela;
  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Text}>R$ {allMoney} </Text>
        <Button icon="card" style={styles.button} mode="contained">
          sacar{''}
        </Button>
      </View>
      <FlatList
        style={styles.listContent}
        showsVerticalScrollIndicator={false}
        onEndReached={loadOrders}
        onEndReachedThreshold={0.2}
        data={order}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <List.Item
            title={item.title}
            description={`Data: ${item.description} | Valor: ${item.value}`}
            left={props => <List.Icon {...props} icon="card" />}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Wallet;
