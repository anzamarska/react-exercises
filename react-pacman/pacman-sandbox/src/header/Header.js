import React from 'react';
import roothd from "../img/roothd.jpg";
import cat from "./cat.svg";
import './style.css';

function Header({ score }) {
  return (
    <div className="header">
        <span className="left title">
          <img className="img" src={roothd}/>
        </span>
				<span className="right score">
        <img className="img2" src={cat} alt='cat'/>marquise de cat score: <span className="points">{score}</span></span>
    </div>
  );
}

Header.defaultProps = {
  score: 0
}

export default Header;