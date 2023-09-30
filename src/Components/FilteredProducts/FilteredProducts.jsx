import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FilteredProductcCSS from '../../Components/FilteredProducts/FilteredProductsCSS.module.css';
// import { filteredProducts } from '../../features/slices/productsSlice';
import ProductCard from './ProductCard';
import { storeData } from "../../assets/data/dummyData";
import { filteredProducts } from '../../features/slices/productsSlice';
import Error from "../Error/Error";
import {  
    filterGender, 
    sortByPrice,
     filterByColor,
     filterBySize
}  from "../../features/slices/productsSlice";

const FilteredProducts = () => {
    
    const Products = useSelector((state) => state.products.filteredProducts);
    const error = useSelector((state) => state.products.error);
    const { type } = useParams();
    console.log("params", type);
  
    console.log("sessionStorage.getItem('filterData') = " + sessionStorage.getItem('filterData'));
    console.log("sessionStorage.getItem('filterData') = " + JSON.stringify(sessionStorage.getItem('filterData')));
   
    let filteredProducts1 = [];
    storeData.map((data, index) => {
        if (data.type == type) {
            filteredProducts1.push(data);
        }
    })
    
    console.log("filteredProducts2 " + JSON.stringify(filteredProducts1));

    const genderButtons = ["male", "female"];
    const colorButtons = ["red", "green", "purple", "yellow", "orange", "blue", "black", "brown"]
    const sizeButtons = ["S", "M","L", "XL"];

    const dispatch = useDispatch();
    return (
        <div>
            <div className={FilteredProductcCSS.filter}>
                <div className={FilteredProductcCSS.filter1}>
                    <h1 className={FilteredProductcCSS.type}>{type}</h1>
                    <div className={FilteredProductcCSS.producttype}>
                        <div className={FilteredProductcCSS.producttype2}>
                            {genderButtons.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <button className={FilteredProductcCSS.btnmap}
                                         onClick={() => dispatch(filterGender(item))}>
                                            {item}
                                        </button>
                                    </div>
                                );
                            })}
                            <button className={FilteredProductcCSS.btnmap1}
                            onClick={() => dispatch(sortByPrice())}>
                                High Price
                            </button>
                            
                            <select name="color" className={FilteredProductcCSS.colorid} id="color">{colorButtons.map((item, index) => {
                                return (
                                <option value="color" style={{ color: item }} key={index}
                                onClick={() => dispatch(filterByColor(item))}>
                                    {item}
                                </option>
                                );
                            })}
                            </select>

                            <select disabled={type === "Bags" || type === "Shoes"} name="size" className={FilteredProductcCSS.colorid} 
                            id="color">{sizeButtons.map((item, index) => {
                                return (
                                <option value="size" key={index} 
                                onClick={() => dispatch(filterBySize(item))}>
                                    {item}
                                </option>
                                );
                            })}
                            </select>
                        </div>

                        <div className={FilteredProductcCSS.clearfilter}>
                            <button className={FilteredProductcCSS.btnmap1}
                            onClick={() => dispatch(filteredProducts(type))}>
                                Clear Filter
                            </button>
                        </div>
                    </div>
                </div>
                {error ? <Error></Error> : 
                 <div className={FilteredProductcCSS.card}>
                 {/* {products.filter((product) => product.type === type) */}
                 {filteredProducts1.map((product, index) => (
                     <div key={index}>

                         <ProductCard
                             id={product.id}
                             name={product.name}
                             text={product.text}
                             img={product.img}
                             price={product.price}
                             color={product.color}
                         ></ProductCard>
                     </div>
                 ))
                 }
             </div>
                }
               
            </div>
        </div>
    )
}

export default FilteredProducts;