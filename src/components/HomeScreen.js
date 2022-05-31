import {ScrollView} from 'react-native';
import React from 'react';
import data from '../data/data.json';
import ListItem from './listItem';
const HomeScreen = () => {
  return (
    <ScrollView>
      {data.map((item, key) => (
        <ListItem key={key} {...item} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
