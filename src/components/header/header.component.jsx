import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './header.styles.scss';
import { auth } from "../../firebase/firebase.utils";


function Header({user}) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      
      </Link>
      
      <div className="options">
          <Link className="option" to="/shop">SHOP</Link>
          <Link className="option" to="/shop" >CONTACT</Link>
          {
            user?<Link className="option" onClick={()=>{
              auth.signOut()
            }} >SIGN OUT</Link> :  <Link className="option" to="/login">SIGN IN</Link>
          }
      </div>
    </div>
  );
}

export default Header;
