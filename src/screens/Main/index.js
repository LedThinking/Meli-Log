import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Map from '../../components/Maps/Map';

const MapRoute = () => <Map />;

const WalletRoute = () => <Text>Teste</Text>;

const DeliveriesRoute = () => <Text>tesst</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

const Main = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'map', title: 'Mapa', icon: 'map-search'},
    {key: 'wallet', title: 'Carteira', icon: 'wallet'},
    {key: 'deliveries', title: 'Entregas', icon: 'package'},
    {key: 'profile', title: 'Perfil', icon: 'tag-text-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    map: MapRoute,
    wallet: WalletRoute,
    deliveries: DeliveriesRoute,
    profile: ProfileRoute,
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
