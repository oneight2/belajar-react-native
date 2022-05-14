import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Axios from 'axios';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';
import Modal from 'react-native-modal';

const Card = ({name, jurusan, onPress, modalShow}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress}>
        <Image source={{uri: `https://unsplash.it/100`}} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.text}>
        <Text style={styles.heading}>{name}</Text>
        <Text>{jurusan}</Text>
      </View>
      <TouchableOpacity onPress={modalShow} style={styles.delete}>
        <Text style={{color: 'red', fontSize: 20}}>X</Text>
      </TouchableOpacity>
    </View>
  );
};
const Crud = () => {
  const [user, setUser] = useState([]);
  const [button, setButton] = useState('Create');
  const [selectedUser, setSelectedUser] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log('modal');
  };
  const validationSchema = Yup.object()
    .shape({
      name: Yup.string().min(3).max(20).required(),
      jurusan: Yup.string().required().min(3).max(20),
    })
    .required();

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
  const getData = () => {
    Axios.get(`http://10.0.2.2:8000/users`).then(res => {
      setUser(res.data);
      console.log('data', res.data);
    });
  };
  const onSubmit = data => {
    if (button === 'Create') {
      Axios.post(`http://10.0.2.2:8000/users`, data).then(res => {
        getData();
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Data Berhasil Ditambahkan',
        });
      });
    } else {
      Axios.put(`http://10.0.2.2:8000/users/${selectedUser.id}`, data).then(
        res => {
          getData();
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Data Berhasil Diupdate',
          });
          setButton('Create');
          setValue('name', '');
          setValue('jurusan', '');
        },
      );
    }
  };
  const onDelete = () => {
    Axios.delete(`http://10.0.2.2:8000/users/${selectedUser.id}`).then(res => {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Data Berhasil Dihapus',
      });
      setModalVisible(!isModalVisible);
      getData();
    });
  };
  const selectUser = data => {
    setValue('name', data.name);
    setValue('jurusan', data.jurusan);
    setButton('Update');
    setSelectedUser(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="name"
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <TextInput
            style={[styles.input, {borderColor: error ? 'red' : '#ccc'}]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={'Name'}
          />
        )}
      />
      {errors.name && (
        <Text style={styles.errorText}>{errors.name.message}</Text>
      )}
      <Controller
        control={control}
        name="jurusan"
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <TextInput
            style={[styles.input, {borderColor: error ? 'red' : '#ccc'}]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={'Jurusan'}
          />
        )}
      />
      {errors.jurusan && (
        <Text style={styles.errorText}>
          {errors.jurusan.message || 'Error'}
        </Text>
      )}
      <Button title={button} onPress={handleSubmit(onSubmit)} />
      {user.map(user => (
        <Card
          key={user.id}
          name={user.name}
          jurusan={user.jurusan}
          onPress={() => selectUser(user)}
          modalShow={() => {
            toggleModal();
            setSelectedUser(user);
          }}
        />
      ))}
      <Modal
        isVisible={isModalVisible}
        animationIn={'slideInUp'}
        animationInTiming={1000}>
        <View style={styles.modal}>
          <Text>Hapus Data ini ?</Text>
          <Text>{selectedUser.name}</Text>
          <Text>{selectedUser.jurusan}</Text>
          <Button title="Hide modal" onPress={toggleModal} />
          <Button title="Delete" onPress={onDelete} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 15,
    position: 'relative',
  },
  input: {
    borderRadius: 25,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  delete: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    paddingVertical: 10,
  },
  text: {
    color: '#000',
    paddingLeft: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginVertical: 2,
    marginLeft: 20,
  },
  modal: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: '70%',
    borderRadius: 10,
    flex: 1,
  },
});
export default Crud;
