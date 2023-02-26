import React, { useState } from 'react';
import "./Header.css";
import logoImage from "../images/logo.svg";
import CloseIcon from '@mui/icons-material/Close';

function Header() {
const [menus, setMenus] = useState(false);

const handeClick = (e) => {
 e.preventDefault();
 setMenus(true);
}

  return (
    <div className="header">
      <a href='/'>
         <img className="header__logo" src={logoImage} alt="" />
      </a>

    <div className="header__middle">
        <a href='/'> Model S</a>
        <a href='/'> Model 3</a>
        <a href='/'> Model X</a>
        <a href='/'> Model Y</a>
        <a href='/'> Solar Roof</a>
        <a href='/'> Solar Panels</a>
    </div>
     <div className="header__right">
        <a href='/'> Shop</a>
        <a href='/'> Account</a>
        <a href='/' onClick={handeClick}> Menu</a>
      </div>
      <div  className="header__menu" style={{display: menus ? "block" : "none"}}>
        <div className="header__icon">
            <CloseIcon onClick={() => setMenus(false)} />   
        </div>           
         <li> <a href='/'> Model S</a></li>
         <li><a href='/'> Model 3</a></li> 
         <li> <a href='/'> Model X</a></li>
         <li><a href='/'> Model Y</a></li>
         <li><a href='/'> Solar Roof</a></li>
         <li><a href='/'> Solar Panels</a></li>
         <li><a href='/'> Shop</a></li>
         <li><a href='/'> Account</a></li>
         <li><a href='/'> Exiting Inventory</a></li>
         <li><a href='/'> Used Inventory</a></li>
         <li><a href='/'> Developer Firdbet</a></li>
      </div>
 </div>
  )
}

export default Header;