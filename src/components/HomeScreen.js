import {ScrollView} from 'react-native';
import React from 'react';
import data from '../data/data.json';
import ListItem from './listItem';
const HomeScreen = () => {
  return (
    <ScrollView>
      {data.map((item, key) => (
        <ListItem
          key={key}
          url={item.img}
          rate={item.qualification}
          title={item.name}
          location={item.direction}
          bed={item.numberRooms}
          bathroom={item.numberBathrooms}
          area={item.area}
          cost={item.cost}
          like={item.like}
        />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
