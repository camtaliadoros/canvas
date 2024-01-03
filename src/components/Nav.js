import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <AnchorLink to='#introduction'>Introduction</AnchorLink>
        </li>
        <li>
          <AnchorLink to='#about'>About</AnchorLink>
        </li>
        <li>
          <AnchorLink to='#expertise'>Expertise</AnchorLink>
        </li>
        <li>
          <AnchorLink to='#founder'>Founder</AnchorLink>
        </li>
        <li>
          <AnchorLink to='#faq'>FAQ</AnchorLink>
        </li>
      </ul>
    </nav>
  );
};
