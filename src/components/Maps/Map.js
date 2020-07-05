import React from 'react';
import {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Avatar, Button} from 'react-native-paper';
import Geolocation from 'react-native-geolocation-service';

import MapView, {Marker, Callout} from 'react-native-maps';

const Maps = () => {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [availableDeliveries, setAvailableDeliveries] = useState([]);

  useEffect(() => {
    async function LoadCoordinates() {
      await Geolocation.getCurrentPosition(
        position => {
          setCurrentRegion({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
          console.log('minha localização => ', currentRegion);
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
    LoadCoordinates();
  }, []);
  let deliveries = [
    {
      position: {
        // eslint-disable-next-line prettier/prettier
        latitude: -6.6150,
        longitude: -35.2915,
      },
      andress: 'Rua joão da motta silvera',
      loja: 'Mercado Livre',
      frete: 'R$: 7,00',
      id: 1,
    },
    {
      position: {
        latitude: -6.6152,
        longitude: -35.2857,
      },
      andress: 'Rua',
      loja: 'Mercado Livre',
      frete: 'R$: 7,00',
      id: 2,
    },
  ];
  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }
  if (!currentRegion) {
    return null;
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onRegionChangeComplete={handleRegionChanged}
        showsUserLocation={true}
        loadingEnabled
        initialRegion={currentRegion}>
        {deliveries.map(delivery => (
          <Marker key={delivery.id} coordinate={delivery.position}>
            <Avatar.Icon size={62} icon="package" />
            <Callout
              onPress={() => {
                console.log('Clicou');
              }}>
              <View style={styles.callout}>
                <Text>Entregar em: {delivery.andress}</Text>
                <Text>{delivery.loja}</Text>
                <Text>Frete: {delivery.frete}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  callout: {
    width: 300,
  }
});

export default Maps;
