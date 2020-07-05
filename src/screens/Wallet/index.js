import React, {useState, useEffect} from 'react';
import {FlatList, View, SafeAreaView, Text} from 'react-native';
import {List, Button} from 'react-native-paper';

import {useRoute} from '@react-navigation/native';

import styles from '../Wallet/style';

const Wallet = () => {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [allMoney, setallMoney] = useState(0);
  const [loading, setLoading] = useState(false);

  const response = useRoute().params.data;

  async function loadOrders() {
    if (loading) {
      return;
    }
    if (total > 0 && order.length === total) {
      return;
    }

    setLoading(true);
    setOrder([...order, ...response.encomendas]);
    setTotal(response.data.total);

    setLoading(false);
  }

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Text}>R$ {allMoney} </Text>
        <Button icon="account" style={styles.button} mode="contained">
          sacar{''}
        </Button>
      </View>
      <FlatList
        style={styles.listContent}
        showsVerticalScrollIndicator={false}
        onEndReached={loadOrders}
        onEndReachedThreshold={0.2}
        data={response}
        keyExtractor={response => String(response.encomendas)}
        renderItem={({item: response}) => (
          <List.Item
            title={response.title}
            description={[response.description, response.value]}
            left={props => <List.Icon {...props} icon="box-cutter" />}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Wallet;
