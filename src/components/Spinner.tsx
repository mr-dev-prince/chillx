import {Icon} from '@rneui/base';
import React, {useEffect, useRef} from 'react';
import {View, Animated, Easing} from 'react-native';

const SpinningElement = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = () => {
      spinValue.setValue(0);
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => spin());
    };

    spin();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{transform: [{rotate: spin}]}}>
      <Icon name="loading1" type="antdesign" color={'white'} />
    </Animated.View>
  );
};

export default SpinningElement;
