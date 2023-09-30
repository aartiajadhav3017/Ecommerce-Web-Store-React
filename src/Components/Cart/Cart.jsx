import React, { useState } from 'react'
import CartCSS from '../../Components/Cart/CartCSS.module.css';

const Cart = () => {
    const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
    return (
        <div>
            {modal && (
             <div className={CartCSS.modal}>
             <div onClick={toggleModal} className={CartCSS.overlay}></div>
             <div className={CartCSS.content}>
               <h2>Hello Modal</h2>
               <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                 perferendis suscipit officia recusandae, eveniet quaerat assumenda
                 id fugit, dignissimos maxime non natus placeat illo iusto!
                 Sapiente dolorum id maiores dolores? Illum pariatur possimus
                 quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                 placeat tempora vitae enim incidunt porro fuga ea.
               </p>
               <button className={CartCSS.close-modal} onClick={toggleModal}>
                 CLOSE
               </button>
             </div>
           </div>
            )}
           
        </div>
    )
}

export default Cart