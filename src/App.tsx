import {View} from 'react-native';
import React from 'react';
import {Provider as PaperProdvider} from 'react-native-paper';

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
      <PaperProdvider>
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
      </PaperProdvider>
    </NavigationContainer>
  );
};

export default App;
