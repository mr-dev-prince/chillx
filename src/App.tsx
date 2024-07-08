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
import AuthScreen from './screens/AuthScreen';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';

// Types
export type RootStackParamList = {
  Home: undefined;
  Detail: {movieId: number};
  Login: undefined;
  Signup: undefined;
};

export type RootDrawerParamList = {
  Main: undefined;
  Favourite: undefined;
  Watchlist: undefined;
  Login: undefined;
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
      <Stack.Screen
        name="Login"
        component={LogIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Main"
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Main" component={MainStack} />
        <Drawer.Screen name="Favourite" component={Favourite} />
        <Drawer.Screen name="Watchlist" component={WatchList} />
        <Drawer.Screen name="Login" component={AuthScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
