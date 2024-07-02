import {View, Image, Text} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/base';

const ContentHeader = () => {
  return (
    <View className="h-[600px] w-full">
      <View className="relative">
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
          }}
          className="h-full w-full object-cover"
        />
      </View>
      <View className="absolute bottom-5 z-50 w-full">
        <View className="w-full flex flex-row justify-center items-center">
          <View className="w-28 py-2 rounded-full bg-gray-500 border border-white flex justify-center items-center flex-row">
            <Icon name="play" type="font-awesome" size={12} color={'white'} />
            <Text className=" ml-3 font-bold text-md text-gray-300">
              Play Now
            </Text>
          </View>
          <View className="w-8" />
          <View className="w-28 py-2 rounded-full bg-gray-900 border border-white flex justify-center items-center">
            <Text className="font-bold text-md text-gray-300">Details</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContentHeader;
