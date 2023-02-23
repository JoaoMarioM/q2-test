import styled from 'styled-components/native';
import { ButtonPickerHeaderProps, InputStyleProps } from './interface';

export const Container = styled.View`
  width: 100%;
`;

export const InputContainer = styled.View<InputStyleProps>`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border-color: ${({isFocus, error}) => error ? "#E01644" : isFocus ? "#006AFFB2" : "#CCCED9"};
  border-width: 1px;
  flex-direction: row;
  position: relative;
`;

export const InputIconContainer = styled.View<InputStyleProps>`
  width: 60px;
  height: 100%;
  border-right-width: 1px;
  border-color: ${({isFocus}) => isFocus ? "#006AFFB2" : "#CCCED9"};
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const InputText = styled.TextInput`
  width: 100%;
  box-sizing: border-box;
  padding-left: 76px;

  /* font-family: 'IBM Plex Sans'; */
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #262833;
`;

export const Label = styled.Text`
  /* font-family: 'Inter'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #262833;
  margin-bottom: 16px;
`;

export const ButtonPicker = styled.TouchableOpacity`
  width: 100%;
  box-sizing: border-box;
  padding-left: 76px;
  justify-content: center;
`;

export const ButtonPickerText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #262833;
`;

export const PickerContainer = styled.View`
  background-color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  /* border-radius: 12px 12px 0 0; */
`;

export const PickerHeader = styled.View`
  width: 100%;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonPickerHeader = styled.TouchableOpacity<ButtonPickerHeaderProps>`
  padding: 4px 6px;
  background-color: ${({isBlue}) => isBlue ? "#006AFF" : "#FFF"};
  border-radius: 4px;
  border-width: 1px;
  border-color: #006AFF;
`;

export const ButtonPickerHeaderText = styled.Text<ButtonPickerHeaderProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${({isBlue}) => isBlue ? "#006AFF" : "#FFF"};
`;