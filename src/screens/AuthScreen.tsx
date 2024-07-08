import {View, Text} from 'react-native';
import React from 'react';
import useNavigationStore from '../context/NavigationContext';
import {FAB} from '@rneui/base';
import SignUp from './SignUp';

const AuthScreen = () => {
  return (
    <View>
      <SignUp />
    </View>
  );
};

export default AuthScreen;
