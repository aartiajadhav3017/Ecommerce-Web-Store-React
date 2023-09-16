import { createSlice } from "@reduxjs/toolkit";
import {storeData} from "../../assets/data/dummyData";
 
export const productsSlice = createSlice({
    name: "products",
    initialState: {
        // filteredProducts: JSON.parse(sessionStorage.getItem('filterData')) || storeData,
        filteredProducts:storeData,
        singleProduct: JSON.parse(sessionStorage.getItem("oneProduct"))  || storeData,
    },
    reducers: {
        filteredProducts(state, action) {
            try {
                 let filter = storeData.filter(
                    (product) => product.type === action.payload
                 );
                 state.filteredProducts = filter;
                 console.log('filter', JSON.stringify(filter));
                 const saveState = JSON.stringify(filter);
                //  sessionStorage.setItem("filterData", saveState);
                 sessionStorage.setItem("filterData", filter);
            } catch (err) {
                return err;
            }
        },
        singleProduct(state, action) {
            try{
                const oneProduct = storeData.filter(
                    (product)=> product.id === action.payload
                );
                state.singleProduct = oneProduct;
                const saveState = JSON.stringify(oneProduct);
                sessionStorage.setItem("oneProduct", saveState);
                console.log('oneProduct', oneProduct);

            }catch(err){
                return err;
            }
        },
    },
});

export const { filteredProducts, singleProduct } = productsSlice.actions;
export default productsSlice.reducer;