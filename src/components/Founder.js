import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const Founder = () => {
  return (
    <section className='white-container-section' id='founder'>
      <StaticImage
        src='../assets/alex.png'
        loading='lazy'
        placeholder='blurred'
        alt='canvas founder Alex Taliadoros'
        width={120}
        className='founder-img'
      />
      <h1>FOUNDER</h1>
      <h2>Meet Alex</h2>
      <p>
        Alex has extensive experience in leadership across the philanthropic
        sector, with an expertise and passion for philanthropic and social
        impact strategy and charitable establishment and direction.
      </p>
      <p>
        Alex's career spans across the UK, Uganda, Burma, Armenia, New York and
        South Africa - but London is home, where she lives with her family and
        Frenchie - balancing the privilege of directing Canvas with the absolute
        joy of being a Mum to her son.
      </p>
      <p>
        “It's been my honour to support philanthropists of diverse backgrounds
        and passions, realise the impact and change they wish to see in an ever
        changing world. As we see the landscape of need increase regarding
        almost every cause and issue across the globe, it's a privilege to be
        able to support those who are able, make a difference to those in need”
      </p>
      <StaticImage
        src='../assets/alex-signature.png'
        alt='alex signature'
        loading='lazy'
        placeholder='blurred'
        width={90}
      />
      <div className='signature-container'>
        <p>Alexandra Taliadoros</p>
        <p>Founder - Canvas Philanthropy</p>
      </div>
    </section>
  );
};
