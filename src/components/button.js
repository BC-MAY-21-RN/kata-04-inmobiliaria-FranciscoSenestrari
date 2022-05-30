import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import React from 'react';

const button = props => {
  const {name, size, color, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon type="font-awesome" name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default button;
