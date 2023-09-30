import React, { useState } from 'react';
import NavbarCSS from './Navbar.module.css';
import logo from '../../assets/images/logo.png';
import heart from '../../assets/images/heart.png';
import shopingbagicon from '../../assets/images/shopingbagicon.png'
import Cart from '../Cart/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/slices/cartSlice';
import { logout } from '../../features/slices/authSlice';
import logoutbtn from "../../assets/images/logoutbtn.png";

const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [modal, setModal] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const user = useSelector((state) => state.user.user);
  const {name, image} = user;

  const dispatch =useDispatch();

  const toggleModal = () => {
    setModal(!modal);
  };


  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

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

            <div onClick={toggleModal} className={NavbarCSS.shoppingicon}>
              {totalAmount > 0 ? (
                <span className={NavbarCSS.totalAmt}>{totalAmount}</span>
              ) : (<img className={NavbarCSS.img3} src={shopingbagicon}></img>)}


              <p className={NavbarCSS.p}>Shopping bag</p>
            </div>
            <div style={{display:'flex'}}>
                <img className={NavbarCSS.proimg} src={image}>
                </img>
                <div onClick={() => dispatch(logout())}>
                  <p className={NavbarCSS.logbtntext}>
                    Hi {name.charAt(0).toUpperCase() + name.slice(1)}
                  </p>
                </div>

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


      {cart.length > 0 ? (modal && (
        <div className={NavbarCSS.modal}>

          <div onClick={toggleModal} className={NavbarCSS.overlay}></div>
          <div className={NavbarCSS.content}>
            <p className={NavbarCSS.shpgbag}>Shopping Bag</p>
            <hr className={NavbarCSS.hr2}></hr>
            <div className={NavbarCSS.bagshopping}>
              {cart.map((item, index) => {
                return (
                  <div key={index}>
                    <div className={NavbarCSS.shopbag}>
                      <div>
                        <img className={NavbarCSS.shopimg} src={item.img} alt={item.name}></img>
                        <div className={NavbarCSS.shopcart}>
                          <h2 className={NavbarCSS.cartname}>{item.name}</h2>
                        </div>
                        <div className={NavbarCSS.cartparr}>
                          <p className={NavbarCSS.cartname}>{item.text}</p>
                        </div>
                      </div>
                      <div >
                        <p className={NavbarCSS.cartname}>
                          <b>Selected size:</b> {" "}
                          <span className={NavbarCSS.itemsize}>{item.size}</span>
                        </p>
                        <p className={NavbarCSS.cartname}>
                          <b>Selected color:</b> {" "}
                          <span className={NavbarCSS.itemcolor} style={{ backgroundColor: item.color }}>{item.color}</span>
                        </p>
                        <p className={NavbarCSS.cartname}>
                         <b> Amount:</b>
                          <span className={NavbarCSS.itemsize}>{item.amount}</span>
                        </p>
                        <p className={NavbarCSS.cartname}>
                          <b>Single Item Price:</b>{" "}
                          <span className={NavbarCSS.itemsize}>{item.price}$</span>
                        </p>
                        
                        <p className={NavbarCSS.cartname}>
                          <b>Total Item Prices:</b> {" "}
                          <span className={NavbarCSS.itemsize}>{item.totalPrice}$</span>
                        </p>
                        
                        <div className={NavbarCSS.remove}>
                          <button onClick={() => dispatch(removeFromCart(item))} className={NavbarCSS.removebtn}>Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr className={NavbarCSS.hr1}></hr>
            <div className={NavbarCSS.footer}>
                <p className={NavbarCSS.cartname}> 
                <b>Total price of all products :</b>{" "} 
                <span className={NavbarCSS.totaprice}>{totalPrice}</span>
                </p>
            </div>
            <button className={NavbarCSS.close - modal} onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )) :
        (modal && (
          <div className={NavbarCSS.modal}>

            <div onClick={toggleModal} className={NavbarCSS.overlay}></div>
            <div className={NavbarCSS.content}>
              <p className={NavbarCSS.shpgbag}>Shopping Bag</p>
              <hr className={NavbarCSS.hr2}></hr>
              <h1 className={NavbarCSS.bag}> Your bag is empty</h1>
              <p className={NavbarCSS.bagp}>Add Some Products</p>
              <button className={NavbarCSS.close - modal} onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        ))
      }


    </>

  );
};

export default Navbar