import React from 'react';
import { View, TouchableOpacity,Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';

import { Container,
   Avatar,
    Location,
    Login,
    Name,
    User,
    UserInfo,
    SocialInfo,
    SocialDiv,
    SocialValue,
    SocialTitle,
    BlogLink,
    Blogtext
  } from './styles';

export default function Profile({navigation}) {
  const user = navigation.getParam('user');

  function handleNavigate(blog) {
    navigation.navigate('Blog', { blog })
  }

  return (
    <Background>
      <Container>
        <UserInfo>
          <Avatar source={{ uri: user.avatar_url}} />
          <User>
            <Login>{user.login}</Login>
            <Name>{user.name}</Name>
            <Location>{user.location ? user.location : 'Localização não informada'}</Location>
            
            <SocialInfo>
              <SocialDiv>
                <SocialTitle>Seguidores: </SocialTitle>
                <SocialValue>{user.followers}</SocialValue>
              </SocialDiv>
              <SocialDiv>
                <SocialTitle>Seguindo: </SocialTitle>
                <SocialValue>{user.following}</SocialValue>
              </SocialDiv>
            </SocialInfo>
          </User>
        </UserInfo>

        <BlogLink blog={user.blog} onPress={() => handleNavigate(user.blog)}>
        <Blogtext>VISITAR BLOG</Blogtext>
        </BlogLink>


      </Container>
    </Background>
  );
}

Profile.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={35} color="#000" />
    </TouchableOpacity>
  ),
});
