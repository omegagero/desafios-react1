import React, { useState, useEffect } from 'react';

const Alert = ({ type, message }) => {
  
  return (
    <div style={{textAlign: 'center'}} className={`alert alert-${type}`} role='alert'>
      {message}
    </div>
  );
};

export default Alert;
