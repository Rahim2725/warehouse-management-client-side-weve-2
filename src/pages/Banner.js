import React from "react";
import Slider from "react-slick";



const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
        


    };
    return (
        <div className="min-h-screen ">
            <h2 className="text-center"> Lazy Load</h2>
            <Slider {...settings}>

                <div className="bg-red-500 flex">
                    <img className="mx-auto" src='https://i.ibb.co/0tDvx7Y/bigstock-Commercial-cleaning-crew-ladie-224186584.jpg' alt="" />
                    hjhjgghhhghhj
                </div>
                <div>
                    <img className="mx-auto" src='https://i.ibb.co/0tDvx7Y/bigstock-Commercial-cleaning-crew-ladie-224186584.jpg' alt="" />
                </div>
                <div>
                    <img className="mx-auto" src='https://i.ibb.co/0tDvx7Y/bigstock-Commercial-cleaning-crew-ladie-224186584.jpg' alt="" />
                </div>
                <div>
                    <img className="mx-auto" src='https://i.ibb.co/0tDvx7Y/bigstock-Commercial-cleaning-crew-ladie-224186584.jpg' alt="" />
                </div>
            </Slider>
        </div>
    );
}


export default Banner;