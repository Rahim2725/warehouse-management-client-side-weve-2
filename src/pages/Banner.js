// import React from "react";
// import Slider from "react-slick";

// const Banner = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };

//     return (
//         <div>
//             <Slider {...settings}>
//                 <div className="bg-primary h-[60vh]">
//                     <h3 className="text-5xl text-center text-white">1</h3>
//                     <h3 className="text-5xl text-center text-white">1</h3>
//                     <h3 className="text-5xl text-center text-white">1</h3>
//                     <h3 className="text-5xl text-center text-white">1</h3>
//                     <h3 className="text-5xl text-center text-white">1</h3>
//                 </div>
//                 <div className="bg-primary h-[60vh]">
//                     <h3 className="text-5xl text-center text-white">2</h3>
//                     <h3 className="text-5xl text-center text-white">2</h3>
//                     <h3 className="text-5xl text-center text-white">2</h3>
//                     <h3 className="text-5xl text-center text-white">2</h3>
//                 </div>
//                 <div className="bg-secondary h-[60vh]">
//                     <h3 className="text-5xl text-center text-white">3</h3>
//                     <h3 className="text-5xl text-center text-white">3</h3>
//                     <h3 className="text-5xl text-center text-white">3</h3>
//                     <h3 className="text-5xl text-center text-white">3</h3>
//                 </div>
//             </Slider>
//         </div>
//     );
// }


// export default Banner;

import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="bg-primary  h-[60vh]">
                        <div className="flex flex-row">
                            <div>ajfdsfk a fjkj </div>
                            <div>ajfdsfk a fjkj </div>
                            <div>ajfdsfk a fjkj </div>
                        </div>

                    </div>
                    <div className="bg-secondary h-[60vh]">
                        <div className="flex flex-row">
                            <div>ajfdsfk a fjkj </div>
                            <div>ajfdsfk a fjkj </div>
                            <div>ajfdsfk a fjkj </div>
                        </div>
                    </div>
                    <div className="bg-primary h-[60vh]">
                        <div className="flex flex-row">
                            <div>ajfdsfk a fjkj </div>
                            <div>ajfdsfk a fjkj </div>
                            <div>ajfdsfk a fjkj </div>
                        </div>
                    </div>
                    <div className="bg-secondary h-[60vh]">
                        <div className="flex flex-row">
                            <div>ajfdsfk a fjkj </div>
                            <div>ajfdsfk a fjkj </div>
                            <div>ajfdsfk a fjkj </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}