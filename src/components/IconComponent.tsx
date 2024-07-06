import {View, Text} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/base';

const IconComponent = ({
  name,
  size = 28,
  color = 'white',
}: {
  name: string;
  size?: number;
  color?: string;
}) => {
  return <Icon name={name} type="ionicon" color={color} size={size} />;
};

export default IconComponent;
