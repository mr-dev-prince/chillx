import {View, Pressable, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import useNavigationStore from '../context/NavigationContext';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  const setNavigation = useNavigationStore(state => state.setNavigation);
  useEffect(() => {
    setNavigation(navigation);
  }, []);
  return (
    <View className="bg-black relative h-full">
      <Header />
      <MovieList />
    </View>
  );
};

export default Home;
