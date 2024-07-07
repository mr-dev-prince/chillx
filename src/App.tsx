import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {enableScreens} from 'react-native-screens';

// Screens
import Home from './screens/Home';
import Detail from './screens/Detail';
import Favourite from './screens/Favourite';

// Types
export type RootStackParamList = {
  Home: undefined;
  Detail: {movieId: number};
};

export type RootDrawerParamList = {
  MainStack: undefined;
  Favourite: undefined;
};

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
        initialRouteName="MainStack"
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="MainStack" component={MainStack} />
        <Drawer.Screen name="Favourite" component={Favourite} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
