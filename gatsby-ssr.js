import * as React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel='preload'
      href='/fonts/abcnormal-book.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
    />,
    <link
      rel='preload'
      href='/fonts/abcnormal-regular.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
    />,
    <link
      rel='preload'
      href='/fonts/abcnormal-regular.woff'
      as='font'
      type='font/woff'
      crossOrigin='anonymous'
    />,
    <link
      rel='preload'
      href='/fonts/abcnormal-book.woff'
      as='font'
      type='font/woff'
      crossOrigin='anonymous'
    />,
    <link rel='stylesheet' href='https://use.typekit.net/emz5qfb.css' />,
  ]);
};
