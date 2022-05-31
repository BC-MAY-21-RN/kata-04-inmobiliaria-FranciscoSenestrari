import {StyleSheet, View} from 'react-native';
import Button from './button';
import ImageRate from './imageRate';
import DetailsBar from './detailsBar';
import React from 'react';

const listItem = ({
  url,
  rate,
  title,
  location,
  bed,
  bathroom,
  area,
  cost,
  like,
}) => {
  return (
    <View style={styles.container}>
      <ImageRate url={url} rate={rate} />
      <DetailsBar
        title={title}
        location={location}
        bed={bed}
        bathroom={bathroom}
        area={area}
        cost={cost}
      />
      <View style={styles.button}>
        <Button name="gittip" size={40} color={like ? '#00b37a' : 'grey'} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3fdff',
    flexDirection: 'row',
    borderRadius: 20,
    margin: 5,
  },
  button: {
    position: 'absolute',
    marginLeft: 320,
    marginTop: 110,
  },
});
export default listItem;
