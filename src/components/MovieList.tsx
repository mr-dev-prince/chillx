import {View, FlatList} from 'react-native';
import React from 'react';
import Category from './Category';
import {genres} from '../constants/Data';
import ContentHeader from './ContentHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';



const MovieList = () => {
  const renderItem = ({item}: {item: {id: string; name: string}}) => {
    return <Category heading={item.name} id={item.id} />;
  };
  return (
    <View className="relative">
      <FlatList
        data={genres}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<ContentHeader />}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />
    </View>
  );
};

export default MovieList;
