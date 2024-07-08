import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  DrawerNavigationProp,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {enableScreens} from 'react-native-screens';

// Screens
import Home from './screens/Home';
import Detail from './screens/Detail';
import Favourite from './screens/Favourite';
import WatchList from './screens/WatchList';

// Types
export type RootStackParamList = {
  Home: undefined;
  Detail: {movieId: number};
};

export type RootDrawerParamList = {
  Home: undefined;
  Favourite: undefined;
  Watchlist: undefined;
};

export type CombinedNavigationProp = DrawerNavigationProp<RootDrawerParamList> &
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const MainStack = () => {
  enableScreens();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={MainStack} />
        <Drawer.Screen name="Favourite" component={Favourite} />
        <Drawer.Screen name="Watchlist" component={WatchList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
