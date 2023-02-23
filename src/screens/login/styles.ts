import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #F7F8FA;
  height: 100%;
  width: 100%;
  padding: 0 24px;
  align-items: center;
`;

export const Title = styled.Text`
/* font-family: 'Inter'; */
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #262833;

  margin-bottom: 64px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  width: 200px;
  height: 48px;
  background-color: #006AFF;
  border-radius: 8px;
  margin-top: 90px;
  align-items: center;
  justify-content: center;
`;

export const ButtonTitle = styled.Text`
  /* font-family: 'IBM Plex Sans'; */
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #FFFFFF;
`;