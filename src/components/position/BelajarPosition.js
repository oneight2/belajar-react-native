import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import cart from '../../asset/images/cart.png';

const BelajarPosition = props => {
  return (
    <View style={styles.wrapper}>
      <Text>BelajarPosition</Text>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.icon} />
        <Text style={styles.textCart}>{props.quantity}</Text>
      </View>
    </View>
  );
};
export default BelajarPosition;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  icon: {
    width: 120,
    height: 120,
  },
  cartWrapper: {
    borderWidth: 3,
    width: 170,
    height: 170,
    borderRadius: 170 / 2,
    backgroundColor: '#fcff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  textCart: {
    backgroundColor: 'salmon',
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    borderRadius: 10,
    padding: 8,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
