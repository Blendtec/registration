import React from 'react';

const country = (props) => {
  return (
      <li className={props.classes} onClick={props.setLanguage}>
        <img src={props.imageSrc} />
      </li>
  );
};

export default country;
