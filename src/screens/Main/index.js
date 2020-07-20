import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';

import Map from '../../components/Maps/Map';
import Wallet from '../Wallet/index';

const MapRoute = () => <Map />;

const WalletRoute = () => <Wallet />;

const Main = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'map', title: 'Mapa', icon: 'map-search'},
    {key: 'wallet', title: 'Carteira', icon: 'wallet'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    map: MapRoute,
    wallet: WalletRoute,

  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Main;
