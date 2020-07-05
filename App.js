/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Routes from './src/routes';
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';


async function getLocation() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'App',
        message: 'are you sure you want to share your location with the app ?',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // permission granted
      // do code get location here.
      Geolocation.getCurrentPosition(pos => {
        console.log(pos.coords.longitude, pos.coords.latitude);
      });
    } else {
      // permission denied
      console.log('GPS permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
  Geolocation.getCurrentPosition(pos => {
    console.log('region', pos.coords.longitude, pos.coords.latitude);
  });
}

const App: () => React$Node = () => {
  getLocation();
  return <Routes />;
};

export default App;
