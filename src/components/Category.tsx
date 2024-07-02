import {View, Text, ScrollView, FlatList, Image} from 'react-native';
import React, {PureComponent, useEffect, useState} from 'react';
import axios from 'axios';
import Separator from './Separator';

type PropType = {
  heading: string;
  id: string;
};

interface Movie {
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
}

const Category: React.FC<PropType> = ({heading, id}) => {
  const [data, setData] = useState<Movie[]>([]);

  const renderItem = ({item}: {item: {poster_path: string}}) => {
    return (
      <View className="h-44 w-32 rounded-lg">
        <Image
          className="h-full w-full object-cover rounded-xl"
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
        />
      </View>
    );
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

