import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import useNavigationStore from '../context/NavigationContext';

type MovieComponentProps = {
  poster: string;
  id: number;
};

const MovieComponent = ({poster, id}: MovieComponentProps) => {
  const navigation = useNavigationStore(state => state.navigation);

  const handleClick = () => {
    navigation?.navigate('Detail', {movieId: id});
  };
  return (
    <Pressable onPress={handleClick}>
      <View className="h-44 w-32 rounded-lg">
        <Image
          className="h-full w-full object-cover rounded-xl"
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${poster}`,
          }}
        />
      </View>
    </Pressable>
  );
};

export default MovieComponent;
