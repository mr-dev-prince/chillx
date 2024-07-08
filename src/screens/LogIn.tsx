// LoginScreen.tsx

import React, {useEffect, useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {login} from '../utils/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useNavigationStore from '../context/NavigationContext';
import BackAndOptionHeader from '../components/BackAndOptionHeader';
import {Icon} from '@rneui/base';

const LoginScreen: React.FC = () => {
  const {navigation} = useNavigationStore();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (password.length === 0 || confirmPassword.length === 0) {
      setErrorMessage('');
    } else if (confirmPassword !== password) {
      setErrorMessage('Password do not match !');
    } else {
      setErrorMessage('');
    }
  }, [confirmPassword, password]);

  const handleSignup = () => {
    login({email, password});
  };

  return (
    <View className="h-full w-full flex justify-center items-center bg-black">
      <BackAndOptionHeader />
      <View className="w-full h-[80%] p-3">
        <Text className="text-center text-3xl font-bold text-white">Login</Text>
        <View className="mt-3 w-full ">
          <View className="h-10 flex justify-center items-center">
            {errorMessage ? (
              <View className="flex flex-row justify-center items-center gap-2">
                <Icon name="warning" type="ionicon" color={'red'} size={24} />
                <Text className="text-red-500 text-lg font-bold">
                  {errorMessage}
                </Text>
              </View>
            ) : null}
          </View>
          <TextInput
            className="rounded-xl pl-5 border-2 border-gray-400 focus:border-blue-600 text-lg font-semibold text-white "
            placeholderTextColor={'gray'}
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
          />
          <TextInput
            className="rounded-xl mt-4 pl-5 border-2 border-gray-400 focus:border-blue-600 text-lg font-semibold text-white"
            placeholderTextColor={'gray'}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity activeOpacity={0.8}>
            <View className="mt-5 p-2 rounded-xl bg-blue-500">
              <Text className="text-center font-semibold text-lg text-white">
                Login
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="mt-8">
          <Text className="text-center text-lg font-semibold text-gray-400">
            Don't have an account ?
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation?.navigate('Signup')}>
            <View className="mt-2 p-2 rounded-xl bg-blue-500">
              <Text className="text-center font-semibold text-lg text-white">
                Create Account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
