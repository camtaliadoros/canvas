import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React, { useEffect, useState } from 'react';
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

let shouldWatchScroll = true;

export const Nav = () => {
  const [visibleSection, setVisibleSection] = useState('introduction');
  const [loaded, setLoaded] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const navHeight = 32;
  const halfMarkerHeight = 3;
  const xHeightDelta = 1;
  const activeSectionIndex = navSections.findIndex((section) => {
    return section.title.toLowerCase() === visibleSection;
  });

  const markerPosition =
    activeSectionIndex * navHeight +
    navHeight / 2 -
    halfMarkerHeight +
    xHeightDelta;

  useEffect(() => {
    const handleScroll = () => {
      if (shouldWatchScroll) {
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
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    setLoaded(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.querySelector('body').style.overflowY = menuIsOpen
      ? 'hidden'
      : 'auto';
  }, [menuIsOpen]);

  const handleAnchorClick = (sectionTitle) => {
    shouldWatchScroll = false;

    setVisibleSection(sectionTitle.toLowerCase());
    setTimeout(() => {
      shouldWatchScroll = true;
    }, 1000);
  };

  const handleMenuClick = () => {
    setMenuIsOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <button
        onClick={handleMenuClick}
        className={`${styles.navIcon} ${menuIsOpen ? styles.open : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav
        className={`${styles.navContainer} ${menuIsOpen ? styles.active : ''}`}
      >
        <ul>
          {navSections.map((section) => {
            return (
              <li
                className={
                  `#${visibleSection}` === section.id ? styles.active : ''
                }
                key={section.id}
              >
                <AnchorLink
                  to={`/${section.id}`}
                  onAnchorLinkClick={() => handleAnchorClick(section.title)}
                >
                  {section.title}
                </AnchorLink>
              </li>
            );
          })}
        </ul>
        {loaded && (
          <div
            className={styles.sectionMarker}
            style={{ top: markerPosition }}
          />
        )}
      </nav>
    </>
  );
};
