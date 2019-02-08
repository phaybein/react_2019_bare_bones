import React from 'react';

// STYLES
import './header.scss';
import logo from '../../assets/img/react.png';

function Header() {
  return (
    <header className="header">
      <div className="header__center">
        <img src={logo} alt="" className="header__center__img" />
        <h1 className="header__center__title">React Bare-bones With SASS!</h1>
      </div>
    </header>
  );
}

export default Header;
