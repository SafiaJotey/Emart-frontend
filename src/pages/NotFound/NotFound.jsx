import React from 'react';
import nomatch from '../../images/404.png';
const NotFound = () => {
  return (
    <div className="flex justify-center align-middle">
      <img src={nomatch} alt="No match"></img>
    </div>
  );
};

export default NotFound;
