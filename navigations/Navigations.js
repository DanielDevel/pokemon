import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenLogin from '../screens/ScreenLogin';
import ScreenHome from '../screens/ScreenHome';
import NaviConfig from './NaviConfig';
import ScreenFavorite from '../screens/ScreenFavorite';
import ScreenPokemonDetail from '../screens/ScreenPokemonDetail';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const NavigateTab = () => {
  return (
    <Tab.Navigator screenOptions={NaviConfig.tabBottom}>
      <Tab.Screen name="Home" component={ScreenHome} />
      <Tab.Screen name="Favorite" component={ScreenFavorite} />
    </Tab.Navigator>
  );
};
const NavigateList = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={NaviConfig.offHeader}>
        <Stack.Screen name="Login" component={ScreenLogin} />
        <Stack.Screen name="Homes" component={NavigateTab} />
      </Stack.Group>
      <Stack.Screen name="PokoDetail" component={ScreenPokemonDetail} />
    </Stack.Navigator>
  );
};

function Navigations() {
  return (
    <NavigationContainer>
      <NavigateList />
    </NavigationContainer>
  );
}
export default Navigations;
