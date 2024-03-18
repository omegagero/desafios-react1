import React from 'react';

const SocialIcons = ({ type }) => {
  return (
    <div>
     
    <button><i className={`fab fa-${type} fa-2xl`}></i></button>

        </div>
  );
};

export default SocialIcons;


