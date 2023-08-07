import React, { useState, useEffect } from 'react';
import {Alert, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Background from '../../components/Background';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container,
  Form,
  TitleInput,
  SubmitButton,
  UserList,
  User,
  Avatar,
  Login,
  Name,
  Location,
  } from './styles';

import api from '../../services/api';

export default function Dashboard({navigation}) {
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState('');
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function getUserList(){
      const users = await AsyncStorage.getItem('listusers');
      if(users) {
        setUserList(JSON.parse(users));
      }
    }
    getUserList();
  }, [])

  useEffect(() => {
    async function getUpdatedUsers(){
      await AsyncStorage.setItem('listusers', JSON.stringify(userList))
    }
    getUpdatedUsers();
  }, [userList])

  async function handleSubmit() {

    try {
      setLoading(true);
      const response = await api.get(`/users/${newUser}`);
  
      const data = {
        id: response.data.id,
        name: response.data.name,
        bio: response.data.bio,
        avatar_url: response.data.avatar_url,
        login: response.data.login,
        location: response.data.location,
        followers: response.data.followers,
        following: response.data.following,
        blog: response.data.blog,
      }

      const userExists = userList.find(user => user.id === data.id);

      if(userExists) {
        Alert.alert('Erro!', 'Você já adicionou esse usuário!');
        setNewUser('');
        setLoading(false);
        return;
      }
      
       setUserList(users => [...users, data]);
       setNewUser('');
       setLoading(false);
    } catch(err) {
      Alert.alert('Ops!', 'Nenhum usuário foi encontrado');
      setLoading(false);
    }
  }

  function handleNavigate(user){
    navigation.navigate('Profile', {user})
  }

  return (
    <>
    <Background>
      <Container>

        <Form>
          <TitleInput 
            placeholder="Usuário do github"
            autoCapitalize="none"
            value={newUser}
            onChangeText={setNewUser}
          />
          <SubmitButton onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator size={20} color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>
        </Form>

        <UserList 
          data={userList}
          keyExtractor={user => String(user.id)}
          renderItem={({item}) => (
            <User onPress={() => handleNavigate(item)}>
              <Avatar source={{uri: item.avatar_url}} />
              <Login>{item.login}</Login>
              <Name>{item.name}</Name>
              <Location>{item.location ? item.location : 'Não informado'}</Location>

            </User>
          )}
        />
      </Container>
    </Background>
    </>
  )
}