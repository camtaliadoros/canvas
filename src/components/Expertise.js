import React from 'react';
import { ExpertiseCard } from './ExpertiseCard';

export const Expertise = () => {
  const cardsContent = [
    {
      title: 'Charity Establishment',
      description: `We help individuals, families and companies of all shapes and sizes, to create the charity, foundation or trust right for them. We don't mind which cause inspires you, we just ask it makes our collective world a better place. We are with you from the start to the end of the journey and will assist you with all aspects in between, from HMRC registration; best practice procedures, Gift Aid reclaim and everything in between - we have you covered. `,
      iconPath: '../assets/icons/charity-establishment.png',
    },
    {
      title: 'Due Diligence, Compliance and Governance',
      description: `Trust and transparency are increasingly the cornerstone values of every aspect of the charity sector. We work with you to ensure your organisation is aligned to best practice in all aspects of your work. With notable focus on due diligence; compliance; fraud and risk management; conflict of interest and reporting. We work to ensure steps and requirements are understood and implemented in a simple manner which works for the organisation.`,
      iconPath: '../assets/icons/philanthropy-icon.png',
    },
    {
      title: 'Philanthropy and Giving Strategy Consultancy',
      description: `investigating and identifying the fundamental values powering philanthropist's charitable activities, nurturing and developing these into the fabric of a wider operational strategy which not only gives life to those original values, but allows them to grow and widen their reach and scope.`,
      iconPath: '../assets/icons/philanthropy-icon.png',
    },
    {
      title: 'Charitable Foundation and Grant Programme Direction',
      description: `We direct grant making foundations and manage grant programmes for philanthropic individuals, families and companies, each with differing giving focuses but united in their passion to enhance the world we all share. We have had the privilege of establishing and running charitable foundations and grant programmes for many of our partners, we are proud of all of them as all make the world a little better.`,
      iconPath: '../assets/icons/csr-icon.png',
    },
    {
      title: 'CSR, Social Impact and ESG Consultancy',
      description: `No matter the size and scope of your project, we will help you realise your philanthropic motivations whilst engaging and harnessing your team's collective talent and passion to ensure your company's values are furthered; UN development goals are met and our world is a better place as a result.`,
      iconPath: '../assets/icons/csr-icon.png',
    },
    {
      title: 'Fundraising Management',
      description: `From warbird air shows with Buzz Aldrin, to black tie dinner galas - from pop up food surplus restaurants in collaboration with Time Out and the Mayor of London to raise awareness for Food Poverty, to a dinner dance aboard HMS Belfast for the Normandy Veterans; From gigs with Rudimental at Village Underground to micro-finance programme launches at The Ned.`,
      iconPath: '../assets/icons/fundraising-icon.png',
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
      <div className='expertise-cards-container'>
        {cardsContent.map((card, i) => {
          return <ExpertiseCard content={card} key={i} index={i} />;
        })}
      </div>
    </section>
  );
};
