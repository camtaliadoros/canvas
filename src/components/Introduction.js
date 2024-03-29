import React, { useEffect, useState } from 'react';
import Sphere from '../assets/Ball-with-Feather.webm';
import SphereMp4 from '../assets/sphere.mp4';
import * as styles from '../styles/introduction.module.scss';
import { Testimonials } from './Testimonials';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionTitle } from './SectionTitle';

export const Introduction = () => {
  const [videoSrc, setVideoSrc] = useState();

  const data = useStaticQuery(graphql`
    query IntroductionContent {
      allContentfulSection(
        filter: { id: { eq: "0793415f-fe9d-5f00-a047-027426664f84" } }
      ) {
        nodes {
          title
          name
          heading
          id
          childContentfulSectionDescriptionTextNode {
            description
          }
          childContentfulSectionBodyTextNode {
            body
          }
        }
      }
    }
  `);

  const content = data.allContentfulSection.nodes[0];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent
      );

      if (isSafari) {
        setVideoSrc(<source src={SphereMp4} type='video/mp4' />);
      } else {
        setVideoSrc(<source src={Sphere} type='video/webm' />);
      }
    }
  }, []);

  return (
    <section className={styles.container} id='introduction'>
      <SectionTitle sectionContent={content} />
      <div className={styles.videoContainer}>
        <video
          autoPlay
          playsInline
          loop
          muted
          disableRemotePlayback
          className={styles.video}
        >
          {videoSrc}
        </video>
      </div>
      <Testimonials />
    </section>
  );
};
