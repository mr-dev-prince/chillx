import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/base';
import useNavigationStore from '../context/NavigationContext';
import {TouchableOpacity} from 'react-native-gesture-handler';

const BackAndOptionHeader = () => {
  const navigation = useNavigationStore(state => state.navigation);

  const handleClick = () => {
    navigation?.popToTop();
  };
  return (
    <View className="flex flex-row w-full justify-between px-3 py-2 absolute z-50 top-0">
      <TouchableOpacity>
        <Pressable
          onPress={handleClick}
          className="rounded-full p-1 flex justify-center items-centerß bg-gray-50/40">
          <Icon name="chevron-left" type="feather" size={24} color={'gray'} />
        </Pressable>
        <Pressable className="rounded-full p-1 flex justify-center items-centerß bg-gray-50/40">
          <Icon
            name="ellipsis-horizontal-outline"
            type="ionicon"
            size={24}
            color={'gray'}
          />
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};

export default BackAndOptionHeader;
