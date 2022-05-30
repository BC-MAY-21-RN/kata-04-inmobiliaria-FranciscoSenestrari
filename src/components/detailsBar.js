import {StyleSheet, Text, View} from 'react-native';
import TextIcon from './textIcon';
import React from 'react';

const detailsBar = props => {
  const {title, location, bed, bathroom, area, cost} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextIcon type="map-o" color="grey" title={location} />
      <View style={styles.horizontalContainer}>
        <TextIcon type="hotel" color="grey" title={bed} />
        <TextIcon type="bathtub" color="grey" title={bathroom} />
        <TextIcon type="codepen" color="grey" title={area} />
      </View>
      <Text style={styles.cost}>${cost}/m</Text>
    </View>
  );
};

export default detailsBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'f4f4f4',
    felx: 1,
    flexDirection: 'column',
    marginTop: 15,
  },
  horizontalContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  title: {
    fontSize: 20,
    color: '#202020',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  cost: {
    color: '#202020',
    fontWeight: '900',
    fontSize: 22,
    marginBottom: 15,
  },
});
