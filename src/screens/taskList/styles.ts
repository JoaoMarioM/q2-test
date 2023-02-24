import styled from 'styled-components/native';
import { responsiveCircle, responsiveHeight, responsiveWidth } from '../../utils/responsive';
import { ButtonCheckStyleProps, ButtonFilterProps, TagColor } from './interface';

export const Container = styled.ScrollView`
  background-color: #F7F8FA;
  height: 100%;
  width: 100%;
  padding: 0 ${responsiveWidth(24)}px;
`;

export const FilterContainer = styled.View`
width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${responsiveHeight(32)}px;
`;

export const TitleContainer = styled.View``;

export const Title = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: ${responsiveWidth(20)}px;
  line-height: ${responsiveWidth(24)}px;
  color: #262833;
`;

export const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: ${responsiveWidth(12)}px;
  line-height: ${responsiveWidth(15)}px;
  color: #262833;
`;

export const ButtonFilter = styled.TouchableOpacity`
  width: ${responsiveWidth(96)}px;
  height: ${responsiveHeight(30)}px;
  border-color: #006AFF;
  border-width: ${responsiveWidth(1)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: ${responsiveCircle(8)}px;
`;

export const ButtonTitleFilter = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: ${responsiveWidth(16)}px;
  line-height: ${responsiveWidth(21)}px;
  color: #006AFF;
`;

export const CardTaskContainer = styled.View<ButtonCheckStyleProps>`
  width: 100%;
  background-color: #fff;
  border-radius: ${responsiveCircle(4)}px;
  border-left-color: ${({isCheck, colorTag}) => isCheck ? "#129E69" : colorTag};
  border-left-width: ${responsiveWidth(5)}px;
  padding: ${responsiveHeight(24)}px 0 ${responsiveHeight(24)}px 0;
  margin-bottom: ${responsiveHeight(16)}px;
`;

export const CardTaskHeader = styled.View`
  width: 100%;
  flex-direction: row;
  border-bottom-color: #CCCED980;
  border-bottom-width: ${responsiveWidth(1)}px;
  padding: 0 ${responsiveWidth(24)}px ${responsiveHeight(16)}px ${responsiveWidth(19)}px;
  box-sizing: border-box;
`;

export const CardButtonSelect = styled.TouchableOpacity<ButtonCheckStyleProps>`
  border-radius: ${responsiveCircle(4)}px;
  border-width: ${responsiveWidth(1)}px;
  border-color: ${({isCheck}) => isCheck ? "#129E69" : "#CCCED9"};
  background-color: ${({isCheck}) => isCheck ? "#129E69" : "#F7F8FA"};
  height: ${responsiveCircle(28)}px;
  width: ${responsiveCircle(28)}px;
  align-items: center;
  justify-content: center;
`;

export const CardHeaderTitle = styled.Text<ButtonCheckStyleProps>`
  font-style: normal;
  font-weight: 400;
  font-size: ${responsiveWidth(16)}px;
  line-height: ${responsiveWidth(21)}px;
  color: #262833;
  box-sizing: border-box;
  width: 100%;
  max-width: ${responsiveWidth(210)}px;
  margin-left: ${responsiveWidth(16)}px;
  text-decoration-line: ${({isCheck}) => isCheck ? "line-through" : "none"};;
`;

export const ButtonTrash = styled.TouchableOpacity``;

export const CardTaskFooter = styled.View`
  padding: ${responsiveHeight(16)}px ${responsiveWidth(19)}px 0;
  justify-content: center;
`;

export const InfoFooterContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoFooterText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: ${responsiveWidth(16)}px;
  line-height: ${responsiveWidth(21)}px;
  color: #262833;
  margin-right: ${responsiveWidth(16)}px;
`;

export const TagContainer = styled.View<TagColor>`
  border-radius: ${responsiveCircle(6)}px;
  padding: 0 ${responsiveWidth(7)}px;
  border-color: ${({colorTag}) => colorTag};
  border-width: ${responsiveWidth(0.9)}px;
`;

export const TagText = styled.Text<TagColor>`
  font-style: normal;
  font-weight: 500;
  font-size: ${responsiveWidth(12)}px;
  line-height: ${responsiveWidth(19)}px;
  text-align: center;
  color: ${({colorTag}) => colorTag};
`;

export const Button = styled.TouchableOpacity`
  width: ${responsiveWidth(200)}px;
  padding: 0 ${responsiveWidth(15)}px;
  height: ${responsiveHeight(48)}px;
  background-color: #006AFF;
  border-radius: ${responsiveCircle(8)}px;
  margin-top: ${responsiveHeight(90)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonWhite = styled.TouchableOpacity`
  width: 100%;
  padding: 0 ${responsiveWidth(15)}px;
  height: ${responsiveHeight(48)}px;
  background-color: #fff;
  border-color: #006AFF;
  border-width: ${responsiveWidth(1)}px;
  border-radius: ${responsiveCircle(12)}px;
  margin-top: ${responsiveHeight(16)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: ${responsiveWidth(18)}px;
  line-height: ${responsiveWidth(23)}px;
  color: #FFFFFF;
  margin-left: ${responsiveWidth(16)}px;
`;

export const ContainerModal = styled.View`
  width: 100%;
  align-items: center;
  padding: ${responsiveHeight(32)}px ${responsiveWidth(24)}px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  border-top-left-radius: ${responsiveCircle(12)}px;
  border-top-right-radius: ${responsiveCircle(12)}px;
`;

export const TitleModal = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: ${responsiveWidth(24)}px;
  line-height: ${responsiveWidth(36)}px;
  color: #262833;

  margin-bottom: ${responsiveHeight(24)}px;
  width: 100%;
`;

export const SubTitleModal = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: ${responsiveWidth(16)}px;
  line-height: ${responsiveWidth(24)}px;
  color: #262833;

  width: 100%;
`;

export const FilterOptionContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: ${responsiveHeight(8)}px;
  margin-bottom: ${responsiveHeight(24)}px;
`;
export const FilterOption = styled.TouchableOpacity<ButtonFilterProps>`
  padding: 0 ${responsiveWidth(9)}px;
  background-color: ${({selected}) => selected ? "#006AFF" : "transparent"};
  border-color: #006AFF;
  border-width: ${responsiveWidth(1.15)}px;
  border-radius: ${responsiveCircle(6)}px;
  margin-right: ${responsiveWidth(16)}px;
`;

export const FilterOptionText = styled.Text<ButtonFilterProps>`
  font-style: normal;
  font-weight: 500;
  font-size: ${responsiveWidth(13)}px;
  line-height: ${responsiveWidth(22)}px;
  color: ${({selected}) => selected ? "#fff" : "#006AFF"};
`;