import React from 'react';
import { nextSlide, prevSlide, dotSlide } from '../../features/slices/sliderSlice';
import { useSelector, useDispatch } from 'react-redux';
import SliderCSS from "../Slider/SliderCSS.module.css";
import { sliderData } from "../../assets/data/dummyData";
import forwardarrow from "../../assets/images/forwardarrow.png"
import backarrow1 from "../../assets/images/backarrow1.png"

const Slider = () => {

    const slideIndex = useSelector((state) => state.slider.value);
    console.log("slideIndex", slideIndex);
    const dispatch = useDispatch();

    return (
        <div className={SliderCSS.slider}>
            <div>
                {sliderData.map((item) => {
                    return (
                        <div key={item.id} className={parseInt(item.id) === slideIndex
                            ? SliderCSS.opacity
                            : SliderCSS.lowopacity}>
                            <div>
                                {parseInt(item.id) === slideIndex && (
                                    <img className={SliderCSS.slideimg} src={item.img} alt='shoes'></img>
                                )}
                            </div>
                            <div className={SliderCSS.slide}>
                                <p className={SliderCSS.imgtext}>
                                {parseInt(item.id) === slideIndex && item.text}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={SliderCSS.btns}>
                {sliderData.map((dot, index) => {
                    return (
                        <div className={SliderCSS.inde} key={dot.id}>
                            <div   className={index === slideIndex ? SliderCSS.index1 : SliderCSS.index2
                            }
                                onClick={() => dispatch(dotSlide(index))}
                            ></div>
                        </div>
                    );
                })}
            </div>
            <div>
                <button className={SliderCSS.next}
                    onClick={() => dispatch(nextSlide(slideIndex + 1))}>
                    <img src={forwardarrow} className={SliderCSS.farrowimg}></img>
                </button>
                <button className={SliderCSS.prev} onClick={() => dispatch(prevSlide(slideIndex - 1))}>
                <img src={backarrow1} className={SliderCSS.barrowimg}></img>
                </button>

            </div>
        </div>
    )
}

export default Slider