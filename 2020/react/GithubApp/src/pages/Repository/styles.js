import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1; 
  padding: 20px;
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

export const RepoList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 10px 0 30px;
`;

export const Repo = styled.TouchableOpacity`
  align-items: center;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  background: #fff;
  padding:20px;
  margin-top: 10px;
`;

export const RepoName = styled.Text`
  font-weight: bold;
`;

export const RepoAvatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const Updated = styled.Text`
  font-size: 12px;
  color: #333;
`;

export const Language = styled.Text`
  font-size: 12px;
  color: #333;
`;
