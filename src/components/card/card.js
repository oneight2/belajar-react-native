/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const Card = props => {
  return (
    <View style={styles.card}>
      <Image
        source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
        style={styles.imgProduct}
      />
      <Text style={styles.textProduct}>Macbook Pro 2019</Text>
      <Text style={{marginBottom: 10}}>Bandung, Jawa Barat</Text>
      <Button
        style={{marginVertical: 10}}
        title={'Beli Sekarang'}
        onPress={props.click}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '47%',
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
  },
  imgProduct: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  textProduct: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1a1a1a',
    marginTop: 10,
  },
});

export default Card;
