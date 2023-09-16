import React from 'react'
import NavigateButtonsCSS from "../NavigateButtons/NavigateButtonsCSS.module.css"
import clothes from "../../assets/images/clothes.jpg"
import { filteredProducts } from '../../features/slices/productsSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
const NavigateButtons = () => {
    const buttons = [
        'Hoodies',
        'Dresses',
        'Suits',
        'Shoes',
        'T-shirts',
        'Jeans',
        'Jackets',
        'Bags',
    ];

    const dispatch = useDispatch();
    return (
        <div>
            <div className={NavigateButtonsCSS.buttons}>
                {buttons.map((button, index) => {
                    return (
                        <div key={index} className={NavigateButtonsCSS.btns} >
                            <Link to={"/filteredProducts/" + button}>
                                <button className={NavigateButtonsCSS.btn1}
                                    onClick={() => dispatch(filteredProducts(button))}
                                >{button}</button>
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className={NavigateButtonsCSS.text}>
                <h3 className={NavigateButtonsCSS.text1}>
                    SALES UP TO 50%
                </h3>
            </div>
            <div className={NavigateButtonsCSS.img2}>
                <img className={NavigateButtonsCSS.clothes} src={clothes} alt='clothes'></img>
            </div>
        </div>
    )
}

export default NavigateButtons