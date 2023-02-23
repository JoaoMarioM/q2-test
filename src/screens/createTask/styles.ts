import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #F7F8FA;
  height: 100%;
  width: 100%;
  padding: 0 24px;
`;

export const TagContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const TagTitle = styled.Text`
  /* font-family: 'IBM Plex Sans'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #262833;

  margin-top: 32px;
  margin-bottom: 8px;
  width: 100%;
`;