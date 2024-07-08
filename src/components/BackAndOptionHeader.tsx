import {View} from 'react-native';
import React from 'react';
import {FAB, Icon} from '@rneui/base';
import useNavigationStore from '../context/NavigationContext';

const BackAndOptionHeader = () => {
  const navigation = useNavigationStore(state => state.navigation);

  const handleClick = () => {
    navigation?.popToTop();
  };
  return (
    <View className="flex flex-row w-full justify-between px-3 py-2 absolute z-50 top-0">
      <FAB
        onPress={handleClick}
        color="gray"
        size="small"
        icon={{name: 'arrow-back', color: 'white'}}
      />
      <FAB
        color="gray"
        size="small"
        icon={{name: 'more-horiz', color: 'white'}}
      />
    </View>
  );
};

export default BackAndOptionHeader;
