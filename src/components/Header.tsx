import {View, Text, Image} from 'react-native';
import React from 'react';
import {FAB, Icon} from '@rneui/base';

const Header = () => {
  return (
    <View className="flex flex-row justify-between items-center p-3 bg-transparent absolute top-0 left-0 z-50 w-full">
      <View className="h-10 w-10 rounded-full overflow-hidden">
        <Image
          className="h-full w-full"
          source={{
            uri: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
        />
      </View>
      <FAB color="gray" size="small">
        <Icon className=" text-center" name="search" color={'white'} />
      </FAB>
    </View>
  );
};

export default Header;
