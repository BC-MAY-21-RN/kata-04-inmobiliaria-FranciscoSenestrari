import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import data from '../data/data.json';
import ListItem from './listItem';
const HomeScreen = () => {
  const [like, setLike] = useState(data.like);
  const handleLike = () => {
    setLike(!like);
    data.like = !like;
  };
  return (
    <ScrollView>
      {data.map((item, key) => (
        <ListItem key={key} {...item} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
