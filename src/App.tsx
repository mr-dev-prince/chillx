import {View} from 'react-native';
import React from 'react';

//screens
import Detail from './screens/Detail';
import Home from './screens/Home';

//Navigation

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//type safety

export type RootStackParamList = {
  Home: undefined;
  MovieList: undefined;
  Detail: {movieId: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default App;
