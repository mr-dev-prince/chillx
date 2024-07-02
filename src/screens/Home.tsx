import {View, FlatList} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import MovieList from '../components/MovieList';

const Home = () => {
  return (
    <View className="bg-black relative">
      <Header />
      <MovieList />
    </View>
  );
};

export default Home;
