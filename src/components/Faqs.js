import React from 'react';
import { FaqDropdown } from './FaqDropdown';

export const Faqs = () => {
  const faqContent = [
    {
      question: `I'd like to do something in the philanthropy space, but I don't know where to begin - how do you help?`,
      answer: [
        `Through our philanthropy and giving strategy, we help clients of all shapes and sizes work through what charitable action they'd like to take, those they'd like to impact and the format of support they'd like to offer.`,
        `It may be you're at the beginning of your journey, (for example you would like to establish a grant making organisation), but you are not sure of your giving motivations or the priority of need you might respond to. We support our clients realise the difference in the world they wish to make, be it specific issues they'd like to respond to (through grant making or service delivery) or values they'd like to uphold.`,
      ],
    },
    {
      question: `I'd like to set up a charity or a grant making foundation, can you advise on the steps involved? (charity establishment)`,
      answer: [
        `Absolutely, through our Charity establishment service, we will guide you and your trustees on all aspects of the process, from deciding on your charitable goals, to managing and submitting your charity application. Then, post status award, if you'd like us to, advise and manage steps relating to HMRC registration, fundraising platforms and gift aid.`,
        `Alexandra has established and run many charitable organisations (for families, individuals and companies) and as part of the process can guide and direct operational strategies, all related processes and establish best practice operational policies for the organisation.`,
        `We know how daunting the journey can seem and we're here to simplify things and guide you through each step so you and your trustees feel informed and empowered at each stage.`,
        `Please note 'Foundations' are legally charities, they are just typically grant-making organisations, whereas the term 'charity' is often given to a charitable organisation which delivers services or programmes to beneficiaries.`,
      ],
    },
    {
      question: `We're looking for someone to run our grant making foundation, is that a service you provide?`,
      answer: [
        `Alexandra has the privilege of leading a diverse range of grant making foundations across the United Kingdom. Please do reach out to us if you have a grant making foundation and would like to discuss further.`,
      ],
    },
    {
      question: `We want to create or review our charity's operational and governance policies, can you help?`,
      answer: [
        `You may already be operating as a registered charity but wish to review and update your operational and governance policies (including conflict of interest, risk and fraud management, due diligence and grant making) or you may be starting your charitable initiative and wish for some policy support.`,
        `We offer consultancy across all aspects of charity policies and ensure all policy frameworks are in line with the charity commission's best practice guidelines. As part of our service we discuss the most important points with your team and trustees to ensure everyone is knowledgeable of the policy and procedural requirements involved.`,
      ],
    },
    {
      question: `We are not a charity but a company looking to be more socially mindful and impactful, can you assist us?`,
      answer: [
        `We'd be delighted to! We consult companies across different industries of all sizes to optimise their social footprint. Please contact us to discuss your bespoke needs.`,
      ],
    },
  ];

  return (
    <section id='faq'>
      <h1>FAQ</h1>
      <h2>A Space to Learn</h2>
      {faqContent.map((content, answerIndex) => (
        <FaqDropdown content={content} key={answerIndex} />
      ))}
    </section>
  );
};
