import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import FilterProductCSS from "../FilteredProducts/FilteredProductsCSS.module.css";
import { filteredProducts } from '../../features/slices/productsSlice';
import { addToCart } from '../../features/slices/cartSlice';
import { useDispatch } from 'react-redux';

const SingleProduct = () => {
    const product = useSelector((state) => state.products.singleProduct);
    const productSize = product[0].size ? product[0].size[0] : "";
    const productColor = product[0].color[0];
    const [size, setSize] = useState(productSize);
    const [color, setColor] = useState();

    const { id } = useParams();
    const dispatch = useDispatch();

    return (

        <div>
            {product.filter((product) => product.id === id)
                .map((item, index) => {
                    return (
                        <div key={index} className={FilterProductCSS.id}>
                            <div className={FilterProductCSS.imgpro}>
                                <img src={item.img} alt={item.name}></img>
                            </div>
                            <div className={FilterProductCSS.itname}>
                                <div className={FilterProductCSS.itemname}>
                                    <h5>{item.name}</h5>
                                    <p className={FilterProductCSS.OFFP}>15% OFF</p>
                                    <p className={FilterProductCSS.itemtext}>{item.text}</p>
                                    <div className={FilterProductCSS.select}>
                                        {item.size ? (
                                            <div>
                                                <label htmlFor="size" className={FilterProductCSS.label}>
                                                    Pick a Size
                                                </label>
                                                <select id='size' name='size'
                                                    value={size}
                                                    onChange={(e) => setSize(e.target.value)}
                                                    className={FilterProductCSS.selectdp}>
                                                    {item.size.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item}>{item}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        ) : (
                                            <div>
                                                <label htmlFor="size" className={FilterProductCSS.label}>
                                                    Pick a Size
                                                </label>
                                                <select id='size'
                                                    disabled={true}
                                                    name='size'
                                                    value={size}
                                                    onChange={(e) => setSize(e.target.value)}
                                                    className={FilterProductCSS.selectdp}>
                                                    {item?.size?.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item}>{item}</option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        )
                                        }

                                    </div>

                                    <div>
                                        <label htmlFor="color" className={FilterProductCSS.label}>
                                            Pick a color
                                        </label>
                                        <select
                                            id='color'
                                            name='color'
                                            value={color}
                                            onChange={(e) => setColor(e.target.value)}
                                            className={FilterProductCSS.selectdp}>
                                            {item.color.map((color, index) => {
                                                return (
                                                    <option key={index} value={color}>
                                                        {color}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <button className={FilterProductCSS.addbutton} onClick={() => dispatch(addToCart({
                                        id: item.id,
                                        name: item.name,
                                        size: size,
                                        img: item.img,
                                        text:item.text,
                                        color: color,
                                        price: item.price,
                                        amount: 1,
                                        totalPrice: item.price,
                            
                                    }
                                    ))}>
                                        Add to Cart
                                    </button>

                                    <text className={FilterProductCSS.addtotext}>Add to Cart</text>



                                </div>
                            </div>
                        </div>
                    );
                }
                )}
        </div>
    )
}

export default SingleProduct