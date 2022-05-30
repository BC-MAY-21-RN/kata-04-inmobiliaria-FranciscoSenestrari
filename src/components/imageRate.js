import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import TextIcon from './textIcon';

const imageRate = props => {
  const {url, rate} = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: url}} />
      <View style={styles.iconbox}>
        <TextIcon type="star" color="#fab61b" size={15} title={rate} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 20,
    position: 'absolute',
    width: 125,
    height: 125,
    marginTop: 15,
  },
  textrate: {
    fontWeight: 'blod',
    color: '#84642f',
  },
  iconbox: {
    backgroundColor: '#ffebb9',
    width: 65,
    height: 30,
    borderRadius: 25,
    marginTop: 100,
  },
});

export default imageRate;
