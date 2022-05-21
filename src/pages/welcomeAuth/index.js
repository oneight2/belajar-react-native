import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import WelcomeIcon from '../../asset/icon/welcomeauth.svg';
import {colors, layout} from '../../utils';
import {Button} from '../../components';

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={[styles.container, {backgroundColor: '#fff'}]}>
      <WelcomeIcon
        width={'70%'}
        height={'50%'}
        style={{margin: 0, padding: 0}}
      />
      <Text style={styles.Text}>Selamat Datang di OJOL</Text>
      <Button title={'Login'} onPress={() => handleGoTo('Login')} />
      <Button title={'Register'} onPress={() => handleGoTo('Register')} />
    </View>
  );
};

export default WelcomeAuth;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  Text: {
    color: colors.text.primary,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
});
