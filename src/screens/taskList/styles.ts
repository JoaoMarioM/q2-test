import styled from 'styled-components/native';
import { ButtonCheckStyleProps, ButtonFilterProps, TagColor } from './interface';

export const Container = styled.ScrollView`
  background-color: #F7F8FA;
  height: 100%;
  width: 100%;
  padding: 0 24px;
`;

export const FilterContainer = styled.View`
width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const TitleContainer = styled.View`

`

export const Title = styled.Text`
  /* font-family: 'Inter'; */
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #262833;
`;

export const SubTitle = styled.Text`
  /* font-family: 'Inter'; */
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #262833;
`;

export const ButtonFilter = styled.TouchableOpacity`
  width: 96px;
  height: 30px;
  border-color: #006AFF;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 8px;
`;

export const ButtonTitleFilter = styled.Text`
  /* font-family: 'IBM Plex Sans'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #006AFF;
`;

export const CardTaskContainer = styled.View<ButtonCheckStyleProps>`
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  border-left-color: ${({isCheck, colorTag}) => isCheck ? "#129E69" : colorTag};
  border-left-width: 5px;
  padding: 24px 0 24px 0;
  margin-bottom: 16px;
`;

export const CardTaskHeader = styled.View`
  width: 100%;
  flex-direction: row;
  border-bottom-color: #CCCED980;
  border-bottom-width: 1px;
  padding: 0 24px 16px 19px;
  /* padding-bottom: 16px; */
  /* padding-left: 19px; */
  /* padding-right: 62px; */
  /* position: relative; */
  box-sizing: border-box;
`;

export const CardButtonSelect = styled.TouchableOpacity<ButtonCheckStyleProps>`
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({isCheck}) => isCheck ? "#129E69" : "#CCCED9"};
  background-color: ${({isCheck}) => isCheck ? "#129E69" : "#F7F8FA"};
  height: 28px;
  width: 28px;
  align-items: center;
  justify-content: center;
`;

export const CardHeaderTitle = styled.Text<ButtonCheckStyleProps>`
  /* font-family: 'IBM Plex Sans'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #262833;
  box-sizing: border-box;
  width: 100%;
  max-width: 210px;
  margin-left: 16px;
  text-decoration-line: ${({isCheck}) => isCheck ? "line-through" : "none"};;
`;

export const ButtonTrash = styled.TouchableOpacity`
`;

export const CardTaskFooter = styled.View`
  padding: 16px 19px 0;
  /* align-items: center; */
  justify-content: center;
`;

export const InfoFooterContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoFooterText = styled.Text`
  /* font-family: 'IBM Plex Sans'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #262833;
  margin-right: 16px;
`;

export const TagContainer = styled.View<TagColor>`
  border-radius: 6px;
  padding: 0 7px;
  border-color: ${({colorTag}) => colorTag};
  border-width: 0.9px;
`;

export const TagText = styled.Text<TagColor>`
  /* font-family: 'IBM Plex Sans'; */
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 19px;
  text-align: center;
  color: ${({colorTag}) => colorTag};
`;

export const Button = styled.TouchableOpacity`
  width: 200px;
  padding: 0 15px;
  height: 48px;
  background-color: #006AFF;
  border-radius: 8px;
  margin-top: 90px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonWhite = styled.TouchableOpacity`
  width: 100%;
  padding: 0 15px;
  height: 48px;
  background-color: #fff;
  border-color: #006AFF;
  border-width: 1px;
  border-radius: 12px;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonTitle = styled.Text`
  /* font-family: 'IBM Plex Sans'; */
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #FFFFFF;
  margin-left: 16px;
`;

export const ContainerModal = styled.View`
  /* height: 100%; */
  width: 100%;
  align-items: center;
  padding: 32px 24px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  border-radius: 12px 12px 0 0 ;
`;

export const TitleModal = styled.Text`
  /* font-family: 'IBM Plex Sans'; */
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #262833;
  margin-bottom: 24px;

  width: 100%;
`;

export const SubTitleModal = styled.Text`
  /* font-family: 'IBM Plex Sans'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #262833;

  width: 100%;
`;

export const FilterOptionContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 24px;
`;
export const FilterOption = styled.TouchableOpacity<ButtonFilterProps>`
  padding: 0 9px;
  background-color: ${({selected}) => selected ? "#006AFF" : "transparent"};
  border-color: #006AFF;
  border-width: 1.15px;
  border-radius: 6px;
  margin-right: 16px;
`;

export const FilterOptionText = styled.Text<ButtonFilterProps>`
  /* font-family: 'IBM Plex Sans'; */
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  color: ${({selected}) => selected ? "#fff" : "#006AFF"};
`;