import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {colors, input, layout} from '../../utils';
import {Button} from '../../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLeftLong} from '@fortawesome/free-solid-svg-icons';
import LoginIcon from '../../asset/icon/login.svg';

const Login = ({navigation}) => {
  const handleGoTo = () => {
    navigation.replace('Welcome');
  };
  return (
    <SafeAreaView style={[styles.login, {backgroundColor: 'white', flex: 1}]}>
      <View style={layout.container}>
        <TouchableOpacity
          onPress={() => handleGoTo()}
          style={{
            backgroundColor: colors.primary,
            width: 45,
            paddingHorizontal: 5,
            borderRadius: 45 / 2,
          }}>
          <FontAwesomeIcon icon={faLeftLong} size={32} color="white" />
        </TouchableOpacity>
        <Text style={styles.text}>Login</Text>
        <Text style={{marginVertical: 10}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          ipsam quos sit recusandae corporis vel fuga, eaque ut laborum nemo.
        </Text>
        <TextInput style={input.default} placeholder={'Email'} />
        <TextInput
          style={[input.default, {marginBottom: 20}]}
          placeholder={'Password'}
          secureTextEntry={true}
        />
        <Button title={'Login'} />
      </View>
      <LoginIcon style={styles.background} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {},
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: '30%',
    color: '#000',
  },
  background: {
    position: 'absolute',
    bottom: 0,
    zIndex: -11111,
  },
});
