import styled from 'styled-components/native';
import { responsiveHeight, responsiveWidth } from '../../utils/responsive';

export const Container = styled.ScrollView`
  background-color: #F7F8FA;
  height: 100%;
  width: 100%;
  padding: 0 ${responsiveWidth(24)}px;
`;

export const TagContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const TagTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: ${responsiveWidth(16)}px;
  line-height: ${responsiveWidth(24)}px;
  color: #262833;

  margin-top: ${responsiveHeight(32)}px;
  margin-bottom: ${responsiveHeight(8)}px;
  width: 100%;
`;