import React from 'react';

import { NavLink } from 'react-router-dom';
import logo from '../Avatar/logos.png';
export const Headerlogo = () => {
  return (
    <div style={{ background: '#272222' }}>
      <NavLink to="/">
        <img width="120px" src={logo} alt="" />
      </NavLink>
    </div>
  );
};
