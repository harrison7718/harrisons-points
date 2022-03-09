import React from 'react';
import PropTypes from 'prop-types';

// this is the component that goes into the map... not the full screen one
const TemplateBox = (template) => {

  const { title, description, points } = template.template

  return (
    <div className='template-box'>
      <h3>{title}</h3>
      <p>{description}</p>
      <h5>{points} Points</h5>
    </div>
  );
}

TemplateBox.propTypes = {
  template: PropTypes.object.isRequired
}

export default TemplateBox;