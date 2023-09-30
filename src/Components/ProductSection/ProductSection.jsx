import React from 'react'
import { storeData } from "../../assets/data/dummyData";
import ProductSectionCSS from "../ProductSection/ProductSectionCSS.module.css";
import ProductSectionItem from './ProductSectionItem';

const ProductSection = () => {
    return (
        <div>
            <div className={ProductSectionCSS.main}>
                <h2 className={ProductSectionCSS.h2}>
                    SUMMER T-Shirt SALE 30%
                </h2>
            </div>
            <div className={ProductSectionCSS.container}>
                {storeData.slice(0, 6).map((product, index) => {
                    return (
                        <div key={index}>
                            <ProductSectionItem 
                            id={product.id} 
                            name={product.name}
                            img={product.img} 
                            text={product.text}
                            price={product.price}
                            totalPrice={product.totalPrice}
                            color={product.color}
                            size={product.size}
                            ></ProductSectionItem>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default ProductSection