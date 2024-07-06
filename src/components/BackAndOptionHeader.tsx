import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/base';

const BackAndOptionHeader = () => {
  return (
    <View className="flex flex-row w-full justify-between px-3 py-2 absolute z-50 top-0">
      <Pressable className="rounded-full p-1 flex justify-center items-centerß bg-gray-50/40">
        <Icon
          name="chevron-back-outline"
          type="ionicon"
          size={24}
          color={'gray'}
        />
      </Pressable>
      <Pressable className="rounded-full p-1 flex justify-center items-centerß bg-gray-50/40">
        <Icon
          name="ellipsis-horizontal-outline"
          type="ionicon"
          size={24}
          color={'gray'}
        />
      </Pressable>
    </View>
  );
};

export default BackAndOptionHeader;
