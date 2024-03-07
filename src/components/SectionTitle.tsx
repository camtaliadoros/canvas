import React from 'react';

export const SectionTitle = ({ content }) => {
  const { name, title, heading } = content;

  const description =
    content.childContentfulSectionDescriptionTextNode?.description;

  const text = content.childContentfulSectionTextTextNode?.text;

  return (
    <>
      <h1>{name}</h1>
      <h2>{title}</h2>
      {description && (
        <div className='section-description'>
          <p className='large'>{description}</p>
        </div>
      )}

      {heading && <h4 className='dark'>{heading}</h4>}
      {text && <p className='dark'>{text}</p>}
    </>
  );
};
