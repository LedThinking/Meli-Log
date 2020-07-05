import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyCDP5QZVHSJnRc-pbbLt2Zh74G7iSzNp_o"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
