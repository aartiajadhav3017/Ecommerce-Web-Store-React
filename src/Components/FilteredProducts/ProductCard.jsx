import React from 'react'
import FilteredproductsCSS from "../../Components/FilteredProducts/FilteredProductsCSS.module.css"
import clothes from "../../assets/images/clothes.jpg"
// import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { singleProduct } from '../../features/slices/productsSlice'
// import { Link, useParams } from 'react-router-dom'
const ProductCard = ({ id, name, img, text, price, colors }) => {
    const dispatch = useDispatch();
    const { type } = useParams();

    return (
        <div>

            <div className={FilteredproductsCSS.Main}>
                <div className={FilteredproductsCSS.card1} onClick={() => dispatch(singleProduct(id))}>
                    <Link to={`/filteredProducts/${type}/` + id}>

                        <a href=""><img className={FilteredproductsCSS.cardimg} src={img}></img></a>
                        <h3 className={FilteredproductsCSS.name}>{name}</h3>
                        <div className={FilteredproductsCSS.div}>
                            <text className={FilteredproductsCSS.text}>{text}</text>
                        </div>

                        <hr className={FilteredproductsCSS.hr}></hr>
                        <text className={FilteredproductsCSS.price}>{price}$</text>
                        <text className={FilteredproductsCSS.color}>
                            {colors?.map((color, index) => {
                                return (
                                    // <i className={FilteredproductsCSS.color1}
                                    //     key={index}
                                    //     style={{ backgroundColor: color }}
                                    // ></i>

                                    <img className={FilteredproductsCSS.color1} src=''> </img>
                                );
                            })}
                        </text>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ProductCard;