import React from 'react';
import LoginNavbar from './LoginNavbar';

function LoginLayout(props) {
  const {children} = props;

  return (
    <div>
      <LoginNavbar />
      <div>{children}</div>
    </div>
  );
}

export default LoginLayout;
