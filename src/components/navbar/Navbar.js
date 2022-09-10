import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import mic from '../../images/mic-svgrepo-com.svg';
import set from '../../images/settings-svgrepo-com.svg';
import './Navbar.css';

function Navbar() {
  const place = useLocation();
  const back = <TiArrowBackOutline className="back" />;
  const goBack = place.pathname.includes('company') ? back : '';
  return (
    <nav className="navbar">
      <div>
        <NavLink id="navArrow" exact="true" to={{ pathname: '/' }}>
          {goBack}
        </NavLink>
      </div>
      <h2 className="c-data">Active Companies</h2>
      <div className="top-right">

        <div className="top-right">
          <img src={mic} className="mic" alt="" />
        </div>
        <div className="top-right">
          <img className="set" src={set} alt="#" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
