import React from 'react'
import logo from "../../assets/images/logo.png";
import FooterCSS from "../../Components/Footer/FooterCSS.module.css";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div>
        <div className={FooterCSS.footer}>
            <hr className={FooterCSS.hr}/>
        </div>
        <div className={FooterCSS.footerdiv}>
            <div>
                <img className={FooterCSS.img} src={logo} alt='logo'></img>
            </div>
            <div>
                <p className={FooterCSS.p}>
                    Copyright {year} page by Marco Web
                </p>
            </div>
        </div>
    </div>
  );
};

export default Footer