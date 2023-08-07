import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
`;


export const UserInfo = styled.View`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: #fff;
  padding: 20px;
  align-items: center;
`;

export const User = styled.View`
  
`;


export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const Location = styled.Text`
  color: #333;
`;

export const Login = styled.Text`
  color: #333;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #333;
  text-align: justify;
`;


export const SocialInfo = styled.View`
`;

export const SocialDiv = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SocialTitle = styled.Text`
  font-weight: bold;
  font-size: 13px;
`;

export const SocialValue = styled.Text`
  font-size: 12px;
  color: #7159c1;
`;

export const BlogLink = styled.TouchableOpacity`
  display: ${props => props.blog ? 'flex' : 'none'};
  margin-top: 5px;
  padding: 10px;
  border-radius: 4px;
  align-items: center;
  background: #FFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;


export const Blogtext = styled.Text`
  font-weight: bold;
  .3 ~;/[ 0-
`;