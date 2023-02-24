import styled from 'styled-components/native';
import { responsiveCircle, responsiveHeight, responsiveWidth } from '../../utils/responsive';

export const Container = styled.View`
  background-color: #F7F8FA;
  height: 100%;
  width: 100%;
  padding: 0 ${responsiveWidth(24)}px;
  align-items: center;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: ${responsiveWidth(24)}px;
  line-height: ${responsiveWidth(29)}px;
  color: #262833;

  margin-bottom: ${responsiveHeight(64)}px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  width: ${responsiveWidth(200)}px;
  height: ${responsiveHeight(48)}px;
  background-color: #006AFF;
  border-radius: ${responsiveCircle(8)}px;
  margin-top: ${responsiveHeight(80)}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: ${responsiveWidth(18)}px;
  line-height: ${responsiveWidth(23)}px;
  color: #FFFFFF;
`;