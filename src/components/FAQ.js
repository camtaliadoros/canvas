import React from 'react';
import { FaqDropdown } from './FaqDropdown';

export const Faq = () => {
  const faqContent = [
    {
      question: `I'd like to do something in the philanthropy space, but I don't know where to begin - how do you help?`,
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Ac turpis egestas sed tempus. Dignissim convallis aenean et tortor. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Commodo nulla facilisi nullam vehicula ipsum a arcu. Eleifend donec pretium vulputate sapien nec. Sed arcu non odio euismod. Urna et pharetra pharetra massa massa ultricies mi quis. At volutpat diam ut venenatis. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Lectus magna fringilla urna porttitor rhoncus dolor purus. Feugiat nisl pretium fusce id velit ut tortor pretium. Orci phasellus egestas tellus rutrum tellus pellentesque. Nec nam aliquam sem et tortor. A iaculis at erat pellentesque adipiscing. Pellentesque sit amet porttitor eget dolor. Scelerisque varius morbi enim nunc faucibus. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Risus sed vulputate odio ut enim blandit volutpat maecenas. Sed tempus urna et pharetra pharetra massa. Quis commodo odio aenean sed. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Congue eu consequat ac felis donec. Sit amet purus gravida quis blandit turpis. Fringilla phasellus faucibus scelerisque eleifend. Nulla pharetra diam sit amet.',
    },
    {
      question: `I'd like to do something in the philanthropy space, but I don't know where to begin - how do you help?`,
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Ac turpis egestas sed tempus. Dignissim convallis aenean et tortor. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Commodo nulla facilisi nullam vehicula ipsum a arcu. Eleifend donec pretium vulputate sapien nec. Sed arcu non odio euismod. Urna et pharetra pharetra massa massa ultricies mi quis. At volutpat diam ut venenatis. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Lectus magna fringilla urna porttitor rhoncus dolor purus. Feugiat nisl pretium fusce id velit ut tortor pretium. Orci phasellus egestas tellus rutrum tellus pellentesque. Nec nam aliquam sem et tortor. A iaculis at erat pellentesque adipiscing. Pellentesque sit amet porttitor eget dolor. Scelerisque varius morbi enim nunc faucibus. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Risus sed vulputate odio ut enim blandit volutpat maecenas. Sed tempus urna et pharetra pharetra massa. Quis commodo odio aenean sed. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Congue eu consequat ac felis donec. Sit amet purus gravida quis blandit turpis. Fringilla phasellus faucibus scelerisque eleifend. Nulla pharetra diam sit amet.',
    },
    {
      question: `I'd like to do something in the philanthropy space, but I don't know where to begin - how do you help?`,
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Ac turpis egestas sed tempus. Dignissim convallis aenean et tortor. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Commodo nulla facilisi nullam vehicula ipsum a arcu. Eleifend donec pretium vulputate sapien nec. Sed arcu non odio euismod. Urna et pharetra pharetra massa massa ultricies mi quis. At volutpat diam ut venenatis. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Lectus magna fringilla urna porttitor rhoncus dolor purus. Feugiat nisl pretium fusce id velit ut tortor pretium. Orci phasellus egestas tellus rutrum tellus pellentesque. Nec nam aliquam sem et tortor. A iaculis at erat pellentesque adipiscing. Pellentesque sit amet porttitor eget dolor. Scelerisque varius morbi enim nunc faucibus. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Risus sed vulputate odio ut enim blandit volutpat maecenas. Sed tempus urna et pharetra pharetra massa. Quis commodo odio aenean sed. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Congue eu consequat ac felis donec. Sit amet purus gravida quis blandit turpis. Fringilla phasellus faucibus scelerisque eleifend. Nulla pharetra diam sit amet.',
    },
    {
      question: `I'd like to do something in the philanthropy space, but I don't know where to begin - how do you help?`,
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Ac turpis egestas sed tempus. Dignissim convallis aenean et tortor. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Commodo nulla facilisi nullam vehicula ipsum a arcu. Eleifend donec pretium vulputate sapien nec. Sed arcu non odio euismod. Urna et pharetra pharetra massa massa ultricies mi quis. At volutpat diam ut venenatis. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Lectus magna fringilla urna porttitor rhoncus dolor purus. Feugiat nisl pretium fusce id velit ut tortor pretium. Orci phasellus egestas tellus rutrum tellus pellentesque. Nec nam aliquam sem et tortor. A iaculis at erat pellentesque adipiscing. Pellentesque sit amet porttitor eget dolor. Scelerisque varius morbi enim nunc faucibus. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Risus sed vulputate odio ut enim blandit volutpat maecenas. Sed tempus urna et pharetra pharetra massa. Quis commodo odio aenean sed. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Congue eu consequat ac felis donec. Sit amet purus gravida quis blandit turpis. Fringilla phasellus faucibus scelerisque eleifend. Nulla pharetra diam sit amet.',
    },
  ];

  return (
    <section id='faq'>
      <h1>FAQ</h1>
      <h2>A Space to Learn</h2>
      {faqContent.map((content) => (
        <FaqDropdown content={content} />
      ))}
    </section>
  );
};
