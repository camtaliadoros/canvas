import * as React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel='preload'
      href='./static/fonts/abcnormal-book.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
    />,
    <link
      rel='preload'
      href='./static/fonts/abcnormal-regular.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
    />,
    <link
      rel='preload'
      href='./static/fonts/abcnormal-regular.woff'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
    />,
    <link
      rel='preload'
      href='./static/fonts/abcnormal-book.woff'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
    />,
  ]);
};
