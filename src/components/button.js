import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import React from 'react';

const button = ({name, size, color, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon type="font-awesome" name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default button;
