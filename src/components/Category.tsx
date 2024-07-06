import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Separator from './Separator';
import MovieComponent from './MovieComponent';

type CategoryProps = {
  heading: string;
  id: string;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const Category: React.FC<CategoryProps> = ({heading, id}) => {
  const [data, setData] = useState<Movie[]>([]);

  const renderItem = ({item}: {item: Movie}) => {
    return <MovieComponent poster={item.poster_path} id={item.id} />;
  };

  useEffect(() => {
    try {
      const getMovies = async () => {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd3ec03e1e721376a5d7d385de13b32&with_genres=${id}`,
        );
        setData(res?.data?.results);
      };
      getMovies();
    } catch (error) {
      console.log('Get movies error', error);
    }
  }, []);
  return (
    <View className="mt-4">
      <View className="flex flex-row justify-between items-end px-1">
        <Text className="text-white text-2xl font-semibold">{heading}</Text>
        <Text className="text-lg font-semibold text-gray-400">See all</Text>
      </View>
      <View className="mt-4">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex flex-row px-2"
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={Separator}
        />
      </View>
    </View>
  );
};

export default Category;
