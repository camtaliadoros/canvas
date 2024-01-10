import React, { useEffect } from 'react';
import { TestimonialCard } from './TestimonialCard';
import * as styles from '../styles/testimonials.module.css';

export const Testimonials = () => {
  const testimonialContents = [
    {
      logoPath: 'logo',
      blurb: `“We had the pleasure of working with Alex of Canvas who expertly guided us through the process of setting up our Foundation to charity status. Alex has in-depth  knowledge of the process and gave much needed direction in an area of which we had no prior knowledge. Alex is friendly, approachable in her manner, open and she made it clear that we could never ask too many questions. At all times we were made to feel that she was on-side and that she understood our needs and what we wanted to achieve. Alex also helped to develop our forward thinking processes around what would need to happen after the initial set up. We are extremely grateful for all her help and would definitely recommend working with her and her company!.”`,
      title: 'Elaine Simpson, Founding Trustee',
      company: 'The Kingdom Choir',
    },
    {
      logoPath: 'logo',
      blurb: `“From the beginning, Alex assisted us to establish the foundation, create our operational policies in line with charity commission best practice and develop our grant programme Knowing that we are making a tangible difference to young people in the UK motivates the entire agency who are proud of the work the7stars foundation is doing. The foundation would not have been as successful if it weren't for Canvas and Alex.”`,
      title: 'Founding trustee',
      company: 'The7stars foundation',
    },
    {
      logoPath: 'logo',
      blurb: `"Without Canvas we wouldn't have known where to begin. I would recommend you to anyone, or actually perhaps not, as we'd like to keep your expertise all to ourselves.”`,
      title: 'Sian Workman',
      company: 'The Building Lives Foundation',
    },
    {
      logoPath: 'logo',
      blurb: `“You do a fantastic job for us and we are lucky to have you. I can't even imagine doing this without all your hard work and commitment - you are the best thing that ever happened to us! We don't say it enough. Thank you, thank you, thank you!”`,
      title: 'Trustee',
      company: 'the7stars foundation',
    },
    {
      logoPath: 'logo',
      blurb: `"I can't speak highly enough about the quality of your work. Well done."`,
      title: 'Bob Holt OBE',
      company: 'The Footprints Foundation',
    },
    {
      logoPath: 'logo',
      blurb: `"Canvas worked with us to understand our needs and gave us clear advice and drafted policies and procedures that ensured our compliance. Our timescale was tight but they delivered what we needed fully and comfortably within the target timescale. I have been delighted with the outcome."`,
      title: 'Kathy Moran, CEO',
      company: 'Housing Justice',
    },
    {
      logoPath: 'logo',
      blurb: `"Thank you to Alex and her team at Canvas who have all worked extremely hard to bring our charity strategy to life, and to secure relationships with partners. Out of the way, C3 coming through!"`,
      title: 'Rob Denham, Founder',
      company: 'C3 Post Trade',
    },
    {
      logoPath: 'logo',
      blurb: `"Alexandra has been key in assisting both myself and the Board of Trustees in setting the strategic direction of the Sure Serve Foundation and ensuring successful day-to-day operational delivery. Her consultancy support has included the drafting and implementation of all key policies, covering legal responsibility, compliance and risk management, and support in developing a comprehensive fundraising strategy and foundation website. She is a pleasure to work with and we are delighted to have her on board."`,
      title: 'Alex Spragg, Group Responsible Business Lead',
      company: 'Sureserve Group',
    },
    {
      logoPath: 'logo',
      blurb: `"My philanthropic journey began when A Girl Called Alex stepped into my office and my life 10 years ago. Until Alex, I'd given freely and widely to any number of random and disconnected causes. My giving had no stated goal, aim or direction. Until Alex, I didn't know the difference between a foundation and a charity. A ragged trousered philanthropist I may not have been, but until Alex, I didn't know my Association of Charitable Foundations from my elbow. My journey was a journey of discovery and it was Alex who made me realise that. Together, we planned to build something very special in honour of my Mum and Dad. Something which would reflect the values of Jack and Ada, and use them to help others. This felt like nothing short of bringing my parents back to life before my eyes. It was an incredibly moving experience. Alex never met my parents, but I feel she knows them very well."`,
      title: 'Trevor Beattie, Founder',
      company: 'The Jack and Ada Beattie Foundation',
    },
    {
      logoPath: 'logo',
      blurb: `"We want to ensure the causes we support as well as the fund itself, are sustainable. We wish to create a lasting charitable trust, which will continue beyond our lifetimes. The last piece of the puzzle fell into place through our work with Alex. Her passion for supporting small charities, whilst maximising the impact of financial contributions meant a strong alignment with our objectives, so we asked her to work alongside us to achieve our vision and values."`,
      title: 'The Walker Family, Founders',
      company: 'The Just Living Foundation',
    },
    {
      logoPath: 'logo',
      blurb: `"At TBS, our mission is to creatively solve our clients' problems with solutions that are not only innovative but also positively impact the world and bring joy without causing harm. Recognising the importance of living up to our high standards, we knew we needed someone exceptional to lead our social impact initiatives. That's why we were thrilled to welcome Alex as our Social Impact Director. Alex has proven to be a remarkable addition, embodying firmness, fairness, and inspiration in her approach. Under her guidance, we've made significant strides in our environmental, social, and governance commitments, setting a new standard for excellence in our industry. With Alex at the helm of our social impact efforts, we are confidently moving towards a future where our actions and commitments are in perfect alignment with our vision of a better world."`,
      title: 'Dino Myers-Lamptey, Founder',
      company: 'The Barber Shop',
    },
    {
      logoPath: 'logo',
      blurb: `"Alex led our charitable status application and created our policy documentation covering due diligence, risk and fraud management, conflict of interest and safeguarding in 2023. We would highly recommend Alex in all aspects of charity establishment. She guided us through the journey and made the process really straightforward and simple, explaining both the processes attached to charitable status, but also the requirements for the organisation to meet best practice as set by the charity commission"`,
      title: 'Nadine Farrar-Hockley ',
      company: 'The Finishing School Foundation',
    },
  ];

  const featuredTestimonials = [];

  for (let n = 0; n < 3; n++) {
    const i = Math.floor(Math.random() * testimonialContents.length);

    featuredTestimonials.push(testimonialContents[i]);
    testimonialContents.splice(i, 1);
  }

  return (
    <section className={styles.container} id='testimonials'>
      {featuredTestimonials.map((content, i) => (
        <TestimonialCard content={content} key={i} />
      ))}
    </section>
  );
};
