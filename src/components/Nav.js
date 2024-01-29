import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React, { useState, useEffect } from 'react';
import * as styles from '../styles/nav.module.css';

const navSections = [
  {
    id: '#introduction',
    title: 'Introduction',
  },
  {
    id: '#about',
    title: 'About',
  },
  {
    id: '#expertise',
    title: 'Expertise',
  },
  {
    id: '#founder',
    title: 'Founder',
  },
  {
    id: '#faq',
    title: 'FAQ',
  },
];

export const Nav = () => {
  const [visibleSection, setVisibleSection] = useState('introduction');

  const navHeight = 30.5;
  const activeSectionIndex = navSections.findIndex((section) => {
    return section.title.toLowerCase() === visibleSection;
  });

  const markerPosition = activeSectionIndex * navHeight + navHeight / 2.3;

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setVisibleSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navContainer}>
      <ul>
        {navSections.map((section) => {
          return (
            <li
              className={
                `#${visibleSection}` === section.id ? styles.active : ''
              }
              key={section.id}
            >
              <AnchorLink to={section.id}>{section.title}</AnchorLink>
            </li>
          );
        })}
      </ul>
      <div className={styles.sectionMarker} style={{ top: markerPosition }} />
    </nav>
  );
};
