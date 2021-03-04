import React from 'react';
import { Redirect } from 'react-router-dom';

function DefaultRout() {
  return (
    <div>
      <Redirect to = "/" />
    </div>
  );
}

export default DefaultRout;
