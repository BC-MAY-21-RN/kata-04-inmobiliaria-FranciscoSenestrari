import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import React from 'react';

const textIcon = props => {
  const {type, color, title, size} = props;
  return (
    <View style={styles.container}>
      <Icon name={type} type="font-awesome" color={color} size={size} />
      <Text style={[styles.title, {fontSize: size}]}>{title}</Text>
    </View>
  );
};

export default textIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontWeight: '900',
    marginLeft: 5,
  },
});
