import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FilteredProductcCSS from '../../Components/FilteredProducts/FilteredProductsCSS.module.css';
// import { filteredProducts } from '../../features/slices/productsSlice';
import ProductCard from './ProductCard';
import {storeData} from "../../assets/data/dummyData";

const FilteredProducts = () => {
    // console.log("state.products.FilteredProducts = "+state.products.FilteredProducts);
    // const products = useSelector((state) => state.products.FilteredProducts);
    // console.log("products"+JSON.stringify(products));
    const { type } = useParams();
    console.log("params", type);
    // console.log("storeData = "+JSON.stringify(storeData));
    // console.log("sessionStorage.getItem('filterData') = "+JSON.parse(sessionStorage.getItem('filterData')));
    console.log("sessionStorage.getItem('filterData') = "+sessionStorage.getItem('filterData'));
    console.log("sessionStorage.getItem('filterData') = "+JSON.stringify(sessionStorage.getItem('filterData')));
    // console.log("filteredProducts = "+filteredProducts);
     // Error handling: Check if products is not an array or is undefined
    //  if (!Array.isArray(products)) {
    //     return <div>No products available</div>;
    // }
    // const filteredProducts = products.filter((product) => product.type === type);
    let filteredProducts1=[];
    storeData.map((data,index) =>{
        if(data.type==type){
            filteredProducts1.push(data);
        }
    })
    // filteredProducts1=sessionStorage.getItem('filterData');
    // console.log("filteredProducts1 "+filteredProducts1.length);
    // console.log("filteredProducts1 "+filteredProducts1);
    console.log("filteredProducts2 "+JSON.stringify(filteredProducts1));
    // console.log("filteredProducts3 "+JSON.stringify(JSON.parse(filteredProducts1)));
    return (
        <div>
            <div className={FilteredProductcCSS.filter}>
                <div className={FilteredProductcCSS.filter1}>
                    <h1 className={FilteredProductcCSS.type}>{type}</h1>
                </div>
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
                    )
                       
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default FilteredProducts;