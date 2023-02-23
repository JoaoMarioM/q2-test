import styled from 'styled-components/native'

import { responsiveHeight, responsiveWidth } from '../../utils/responsive';

interface ContainerToastProps{
	color: string;
}

export const ContainerToast = styled.View<ContainerToastProps>`
	width: 100%;
	padding: ${responsiveHeight(50)}px ${responsiveWidth(20)}px
		${responsiveHeight(12)}px;
	background-color: ${({color}) => color};
`

export const Text = styled.Text`
	width: 100%;
	font-size: ${responsiveWidth(16)}px;
	font-weight: 400;
	color: #fff;
`
