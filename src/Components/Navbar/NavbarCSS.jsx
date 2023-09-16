import React from 'react';
import NavbarCSS from './Navbar.module.css';
import logo from '../../assets/images/logo.png';
import heart from '../../assets/images/heart.png';
import shopingbagicon from '../../assets/images/shopingbagicon.png'
const Navbar = () => {
  return (
    <>
      <div>
        <div className={NavbarCSS.main}>
          <h3 className={NavbarCSS.text}>Welcome ALL</h3>
        </div>
        <div className={NavbarCSS.nav}>
          <div>
            <img className={NavbarCSS.img} src={logo} alt='store'></img>
          </div>
          <div className={NavbarCSS.Logbtn}>
            <button className={NavbarCSS.Logoutbtn}>
              Logout
            </button>
            <div className={NavbarCSS.img2}>
              <img className={NavbarCSS.heart} src={heart}></img>
              <p className={NavbarCSS.p}>Whish Lists</p>
            </div>
            <div className={NavbarCSS.shoppingicon}>
            <img className={NavbarCSS.img3} src={shopingbagicon}></img>
            <p className={NavbarCSS.p}>Shopping bag</p>

            </div>
          </div>
        </div>
      </div>
      <div className={NavbarCSS.Offer}>
          <div className={NavbarCSS.off}>
            50% OFF
          </div>
          <div className={NavbarCSS.off}>
            Free shipping and returns
          </div>
          <div className={NavbarCSS.off}>
            Different Payment Methods
          </div>
      </div>
    </>

  );
};

export default Navbar