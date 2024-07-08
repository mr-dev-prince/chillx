// SignupScreen.tsx

import React, {useEffect, useState} from 'react';
import {View, TextInput, Text, Alert} from 'react-native';
import BackAndOptionHeader from '../components/BackAndOptionHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useNavigationStore from '../context/NavigationContext';
import {Icon} from '@rneui/base';
import {firebase} from '../config/firebaseConfig';

const SignUp: React.FC = () => {
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

  const handleSignup = async () => {
    if (!email || !password) {
      setErrorMessage('Empty fields!');
      return;
    }

    try {
      setErrorMessage('');
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('User Created', 'You are successfully registered!');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error: any) {
      let signUpErr = 'An error occurred. Please try again.';

      switch (error.code) {
        case 'auth/email-already-in-use':
          signUpErr = 'Email address is already in use.';
          break;
        case 'auth/invalid-email':
          signUpErr = 'Invalid email address.';
          break;
        case 'auth/weak-password':
          signUpErr = 'Password should be at least 6 characters.';
          break;
        default:
          if (error.message) {
            signUpErr = error.message;
          }
      }
      setErrorMessage(signUpErr);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <View className="h-full w-full flex justify-center items-center bg-black">
      <BackAndOptionHeader />
      <View className="w-full h-[80%] p-3">
        <Text className="text-center text-3xl font-bold text-white">
          Create Account
        </Text>
        <View className="mt-3 w-full ">
          <View className="h-fit py-1 flex justify-center items-center">
            {errorMessage ? (
              <View className="flex flex-row justify-center items-center gap-2">
                <Icon name="warning" type="ionicon" color={'red'} size={20} />
                <Text className="text-red-500 text-lg font-normal">
                  {errorMessage}
                </Text>
              </View>
            ) : null}
          </View>
          <TextInput
            className="rounded-xl pl-5 border-2 border-gray-400 focus:border-blue-600 text-lg font-semibold text-white"
            placeholder="Email"
            placeholderTextColor={'gray'}
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
          />
          <TextInput
            className="rounded-xl mt-4 pl-5 border-2 border-gray-400 focus:border-blue-600 text-lg font-semibold text-white"
            placeholder="Password"
            placeholderTextColor={'gray'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            className="rounded-xl mt-4 pl-5 border-2 border-gray-400 focus:border-blue-600 text-lg font-semibold text-white"
            placeholder="Confirm Password"
            placeholderTextColor={'gray'}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <TouchableOpacity activeOpacity={0.8} onPress={handleSignup}>
            <View className="mt-5 p-2 rounded-xl bg-blue-500">
              <Text className="text-center font-semibold text-lg text-white ">
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="mt-8">
          <Text className="text-center text-lg font-semibold text-gray-400">
            Already have an account ?
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation?.navigate('Login')}>
            <View className="mt-2 p-2 rounded-xl bg-blue-500">
              <Text className="text-center font-semibold text-lg text-white">
                Login
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
