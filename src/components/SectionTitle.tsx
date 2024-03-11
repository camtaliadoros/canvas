import React from 'react';

export const SectionTitle = ({ sectionContent }) => {
  const { name, title, heading } = sectionContent;

  const description =
    sectionContent.childContentfulSectionDescriptionTextNode?.description;
  const body = sectionContent.childContentfulSectionBodyTextNode?.body;

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
      {body && <p className='dark'>{body}</p>}
    </>
  );
};
