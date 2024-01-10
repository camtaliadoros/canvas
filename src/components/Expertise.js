import React from 'react';
import { ExpertiseCard } from './ExpertiseCard';

export const Expertise = () => {
  const cardsContent = [
    {
      title: 'Charity Establishment',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Ac turpis egestas sed tempus. Dignissim convallis aenean et tortor. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Commodo nulla facilisi nullam vehicula ipsum a arcu. ',
      iconPath: 'icon',
    },
    {
      title: 'Charity Establishment',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Ac turpis egestas sed tempus. Dignissim convallis aenean et tortor. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Commodo nulla facilisi nullam vehicula ipsum a arcu. ',
      iconPath: 'icon',
    },
    {
      title: 'Charity Establishment',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Ac turpis egestas sed tempus. Dignissim convallis aenean et tortor. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Commodo nulla facilisi nullam vehicula ipsum a arcu. ',
      iconPath: 'icon',
    },
    {
      title: 'Charity Establishment',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Ac turpis egestas sed tempus. Dignissim convallis aenean et tortor. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Commodo nulla facilisi nullam vehicula ipsum a arcu. ',
      iconPath: 'icon',
    },
    {
      title: 'Charity Establishment',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Ac turpis egestas sed tempus. Dignissim convallis aenean et tortor. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Commodo nulla facilisi nullam vehicula ipsum a arcu. ',
      iconPath: 'icon',
    },
    {
      title: 'Charity Establishment',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Ac turpis egestas sed tempus. Dignissim convallis aenean et tortor. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Commodo nulla facilisi nullam vehicula ipsum a arcu. ',
      iconPath: 'icon',
    },
  ];

  return (
    <section id='expertise'>
      <h1>EXPERTISE</h1>
      <h2>A Space to Grow</h2>
      <p className='large'>
        Our principle offering is through management of philanthropic and
        socially responsible initiatives. However, we offer a menu of services
        for those partners who have a particular requirement in their non-profit
        operation.
      </p>
      <p className='large'>
        No matter your fundraising goal we will work with you to construct and
        achieve a fruitful strategy which will not only raise income, but engage
        supporters – achieving both commercial and emotional investment from
        donors.
      </p>
      {cardsContent.map((card, i) => {
        return <ExpertiseCard content={card} key={i} index={i} />;
      })}
    </section>
  );
};
