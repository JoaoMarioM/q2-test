import React from 'react';
import { Image } from 'react-native';

import PreloaderGif from '../../assets/images/loader.gif';
import { responsiveHeight } from '../../utils/responsive';

export const Preloader = () => {
  return (
    <Image
      source={PreloaderGif as any}
      style={{
        height: responsiveHeight(40),
        width: 30
      }}
    />
  );
}