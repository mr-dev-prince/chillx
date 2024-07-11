import {View} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CombinedNavigationProp, RootStackParamList} from '../App';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import useNavigationStore from '../context/NavigationContext';
import useUserStore from '../context/UserContext';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  const {setNavigation} = useNavigationStore();

  useEffect(() => {
    setNavigation(navigation as CombinedNavigationProp);
  }, []);

  return (
    <View className="bg-black relative h-full">
      <Header />
      <MovieList />
    </View>
  );
};

export default Home;
