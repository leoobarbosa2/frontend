import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  text-align: center;
`;

export const Form = styled.View`
  flex-direction: row;
  border: 1px solid #000;
  border-radius: 4px;
`;

export const TitleInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, .7)',
})`
  flex: 1;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  padding: 0 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background: #000;
  justify-content: center;
  padding: 0 12px;
  align-items: center;
`;

export const UserList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.TouchableOpacity`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 4px;
  padding: 18px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const Login = styled.Text`
  font-size: 12px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 12px;
  font-weight: bold;
  color: #333;
`;

export const Location = styled.Text`
  font-size: 10px;
`;