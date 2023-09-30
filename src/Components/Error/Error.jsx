import React from 'react'
import ErrorCSS from "../../Components/Error/ErrorCSS.module.css";

const Error = () => {
    return (
        <div className={ErrorCSS.error}>
            

            <div className={ErrorCSS.alert}>
                <span className={ErrorCSS.closebtn} onclick="this.parentElement.style.display='none';">&times;</span>
                 Sorry No Products match your filter search ... Clear the filter and try again 😊"
            </div>
        </div>
    )
}

export default Error