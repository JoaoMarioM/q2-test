import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const deviceWidth = 360, deviceHeight = 800;

const scale = (size: number) => PixelRatio.roundToNearestPixel(width / deviceWidth * size);

const responsiveCircle = (size: number, factor = 0.5) => parseFloat(
    PixelRatio.roundToNearestPixel(size + ( scale(size) - size ) * factor).toFixed(1)
);

const responsiveWidth = (value: number) => {
    const percent = (value * 100)/deviceWidth;
    const _width = (width * percent)/100;
    return parseFloat(_width.toFixed(1));
}

const responsiveHeight = (value: number) => {
    const percent = (value * 100)/deviceHeight;
    const _height = (height * percent)/100;
    return parseFloat(_height.toFixed(1)) ;
}

export {
    responsiveCircle,
    responsiveWidth,
    responsiveHeight
}