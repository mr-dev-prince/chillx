import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import axios from 'axios';
import {RootStackParamList} from '../App';
import BackAndOptionHeader from '../components/BackAndOptionHeader';
import {Icon} from '@rneui/base';
import Separator from '../components/Separator';
import IconComponent from '../components/IconComponent';
import Loader from '../components/Loader';

type DetailProps = {
  movieId?: number;
};

interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  } | null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const Detail = () => {
  const [detail, setDetail] = useState<MovieDetail>();
  const [year, setYear] = useState<number>();
  const route = useRoute<DetailRouteProp>();
  const {movieId} = route.params;

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const res = await axios.get<MovieDetail>(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=3fd3ec03e1e721376a5d7d385de13b32`,
        );
        const dateObj = new Date(res.data.release_date);
        const year = dateObj.getFullYear();
        setDetail(res.data);
        setYear(year);
      } catch (error) {
        console.log('Error while fetching movie details', error);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  if (!detail) {
    return (
      <View className="h-full w-full flex justify-center items-center bg-black">
        <BackAndOptionHeader />
        <View>
          <Loader />
        </View>
      </View>
    );
  }

  return (
    <View className="bg-black h-full w-full">
      <BackAndOptionHeader />
      <View>
        <View className="h-72 w-full">
          <Image
            className="w-full h-full rounded-bl-md rounded-br-md"
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${detail.backdrop_path}`,
            }}
          />
        </View>
        <View>
          <View className="p-2 mt-2 flex flex-row justify-between items-center">
            <View>
              <Text className="text-white text-2xl font-bold tracking-wider">
                {detail.original_title}
              </Text>
            </View>
            <View className="flex flex-row">
              <IconComponent name="add-circle-outline" />
              <Separator />
              <IconComponent name="arrow-down-circle-outline" />
            </View>
          </View>
          <View className="px-3 flex flex-row">
            <View className="flex flex-row justify-center items-center">
              <IconComponent name="stopwatch-outline" size={20} />
              <Text className="text-white ml-1 font-semibold">
                {detail.runtime} mins
              </Text>
            </View>
            <Separator />
            <View className="flex flex-row justify-center items-center">
              <IconComponent name="calendar-clear-outline" size={16} />
              <Text className="ml-1 text-white font-semibold">{year}</Text>
            </View>
            <Separator />
            <View className="flex flex-row justify-center items-center">
              <IconComponent name="star" size={16} color="red" />
              <Text className="ml-1.5 font-semibold text-red-500">
                {detail.vote_average}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View className="mt-4 p-2">
            <Text className="text-white text-xl font-semibold">Overview</Text>
            <Text className="text-gray-500 text-sm mt-1">
              {detail.overview}
            </Text>
          </View>
          <View className="mt-4 p-2">
            <Text className="text-white text-xl font-semibold">Top Cast</Text>
            <Text className="text-gray-500 text-sm mt-1">
              {detail.overview}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Detail;
