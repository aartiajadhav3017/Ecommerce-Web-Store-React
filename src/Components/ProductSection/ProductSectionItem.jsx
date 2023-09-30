import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from "../../features/slices/cartSlice";
import ProductSectionCSS from "../../Components/ProductSection/ProductSectionCSS.module.css";

const ProductSectionItem = ({ id, img, name, text, size, price, color, totalPrice }) => {
  const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <div>
      <div className={ProductSectionCSS.card}>
        <h3 className={ProductSectionCSS.sale}>SALE%</h3>
        <div floated={false} className={ProductSectionCSS.header}>
          <img className={ProductSectionCSS.headimg} src={img} alt={name} />
        </div>
        <div className={ProductSectionCSS.text}>
          <h4 className={ProductSectionCSS.h4}>
            {name}
          </h4>
          <h4 className={ProductSectionCSS.text2}>
            {text}
          </h4>
          <div className={ProductSectionCSS.clas}>
            <h4 className={ProductSectionCSS.text3}>
              Size left:  {defaultSize}
            </h4>
            <h4 className={ProductSectionCSS.text2}>
              Color : <span className={ProductSectionCSS.colorbg}
                style={{ backgroundColor:  defaultColor }}></span>
            </h4>
          </div>
        </div>
        <div className={ProductSectionCSS.footer}>
          <button onClick={() => dispatch(addToCart({
            id:id,
            img:img,
            text:text,
            amount:1,
            price: price,
            totalPrice: totalPrice,
            name: name,
            size: defaultSize,
            color:defaultColor
          }))} className={ProductSectionCSS.btncart}>Add to Cart</button>
        </div>
      </div>


    </div>
  )
};

export default ProductSectionItem