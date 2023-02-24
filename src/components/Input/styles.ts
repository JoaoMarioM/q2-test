import styled from 'styled-components/native';
import { responsiveCircle, responsiveHeight, responsiveWidth } from '../../utils/responsive';
import { ButtonPickerHeaderProps, InputStyleProps } from './interface';

export const Container = styled.View`
  width: 100%;
`;

export const InputContainer = styled.View<InputStyleProps>`
  width: 100%;
  height: ${responsiveHeight(48)}px;
  border-radius: ${responsiveCircle(8)}px;
  border-color: ${({isFocus, error}) => error ? "#E01644" : isFocus ? "#006AFFB2" : "#CCCED9"};
  border-width: ${responsiveWidth(1)}px;
  flex-direction: row;
  position: relative;
`;

export const InputIconContainer = styled.View<InputStyleProps>`
  width: ${responsiveWidth(60)}px;
  height: 100%;
  border-right-width: ${responsiveWidth(1)}px;
  border-color: ${({isFocus}) => isFocus ? "#006AFFB2" : "#CCCED9"};
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const InputText = styled.TextInput`
  width: 100%;
  box-sizing: border-box;
  padding-left: ${responsiveWidth(76)}px;

  font-style: normal;
  font-weight: 400;
  font-size: ${responsiveWidth(18)}px;
  line-height: ${responsiveWidth(23)}px;
  color: #262833;
`;

export const Label = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: ${responsiveWidth(16)}px;
  line-height: ${responsiveWidth(19)}px;
  color: #262833;
  margin-bottom: ${responsiveHeight(16)}px;
`;

export const ButtonPicker = styled.TouchableOpacity`
  width: 100%;
  box-sizing: border-box;
  padding-left: ${responsiveWidth(76)}px;
  justify-content: center;
`;

export const ButtonPickerText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: ${responsiveWidth(18)}px;
  line-height: ${responsiveWidth(23)}px;
  color: #262833;
`;

export const PickerContainer = styled.View`
  background-color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top-left-radius: ${responsiveCircle(12)}px;
  border-top-right-radius: ${responsiveCircle(12)}px;
`;

export const PickerHeader = styled.View`
  width: 100%;
  padding: ${responsiveHeight(16)}px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonPickerHeader = styled.TouchableOpacity<ButtonPickerHeaderProps>`
  padding: ${responsiveHeight(4)}px ${responsiveWidth(6)}px;
  background-color: ${({isBlue}) => isBlue ? "#006AFF" : "#FFF"};
  border-radius: ${responsiveCircle(4)}px;
  border-width: ${responsiveWidth(1)}px;
  border-color: #006AFF;
`;

export const ButtonPickerHeaderText = styled.Text<ButtonPickerHeaderProps>`
  font-style: normal;
  font-weight: 400;
  font-size: ${responsiveWidth(14)}px;
  line-height: ${responsiveWidth(24)}px;
  color: ${({isBlue}) => isBlue ? "#006AFF" : "#FFF"};
`;