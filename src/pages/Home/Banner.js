import React, { Component } from "react";
import Slider from "react-slick";
import oppo from '../../assets/image/oppo.png'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 3000,
        };
        return (
            <div className="mt-6">
                <Slider {...settings}>
                    <div className="bg-primary h-[60vh]">
                        <div className="flex items-center justify-around">
                            <div>
                                <h1 className="text-8xl font-bold text-white mb-5">Oppo</h1>
                                <h2 className="text-4xl mb-2 text-white">Reno Z Purple</h2>
                                <p className="uppercase mb-2 text-white">b o o k i n g s t a r t n o w</p>
                                <div className="flex mb-2">
                                    <div className=" border px-5 py-1">
                                        <p className="text-center text-white">6 & 128</p>
                                        <p className="text-white text-xl">BDT.18999</p>
                                        <p className="uppercase text-center text-white">indian</p>
                                    </div>
                                    <div className="ml-5  border px-5 py-1">
                                        <p className="text-center text-white">6 & 128</p>
                                        <p className="text-white text-xl">BDT.18999</p>
                                        <p className="uppercase text-center text-white">INTERNATIONAL
                                        </p>
                                    </div>
                                </div>
                                <button className="btn btn-primary">Book now</button>
                            </div>
                            <div>
                                <img className="h-[50vh]" src={oppo} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="bg-neutral h-[60vh]">
                        <div className="flex items-center justify-around">
                            <div>
                                <h1 className="text-8xl font-bold text-white mb-5">Oppo</h1>
                                <h2 className="text-4xl mb-2 text-white">Reno Z Purple</h2>
                                <p className="uppercase mb-2 text-white">b o o k i n g s t a r t n o w</p>
                                <div className="flex mb-2">
                                    <div className=" border px-5 py-1">
                                        <p className="text-center text-white">6 & 128</p>
                                        <p className="text-white text-xl">BDT.18999</p>
                                        <p className="uppercase text-center text-white">indian</p>
                                    </div>
                                    <div className="ml-5 border px-5 py-1">
                                        <p className="text-center text-white">6 & 128</p>
                                        <p className="text-white text-xl">BDT.18999</p>
                                        <p className="uppercase text-center text-white">INTERNATIONAL
                                        </p>
                                    </div>
                                </div>
                                <button className="btn btn-primary">Book now</button>
                            </div>
                            <div>
                                <img className="h-[50vh]" src={oppo} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="bg-primary h-[60vh]">
                        <div className="flex items-center justify-around">
                            <div>
                                <h1 className="text-8xl font-bold text-white mb-5">Oppo</h1>
                                <h2 className="text-4xl mb-2 text-white">Reno Z Purple</h2>
                                <p className="uppercase mb-2 text-white">b o o k i n g s t a r t n o w</p>
                                <div className="flex mb-2">
                                    <div className="border px-5 py-1">
                                        <p className="text-center text-white">6 & 128</p>
                                        <p className="text-white text-xl">BDT.18999</p>
                                        <p className="uppercase text-center text-white">indian</p>
                                    </div>
                                    <div className="ml-5 border px-5 py-1">
                                        <p className="text-center text-white">6 & 128</p>
                                        <p className="text-white text-xl">BDT.18999</p>
                                        <p className="uppercase text-center text-white">INTERNATIONAL
                                        </p>
                                    </div>
                                </div>
                                <button className="btn">Book now</button>
                            </div>
                            <div>
                                <img className="h-[50vh]" src={oppo} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="bg-neutral h-[60vh]">
                        <div className="flex items-center justify-around">
                            <div>
                                <h1 className="text-8xl font-bold text-white mb-5">Oppo</h1>
                                <h2 className="text-4xl mb-2 text-white">Reno Z Purple</h2>
                                <p className="uppercase mb-2 text-white">b o o k i n g s t a r t n o w</p>
                                <div className="flex mb-2">
                                    <div className="border px-5 py-1">
                                        <p className="text-center text-white">6 & 128</p>
                                        <p className="text-white text-xl">BDT.18999</p>
                                        <p className="uppercase text-center text-white">indian</p>
                                    </div>
                                    <div className="ml-5 border px-5 py-1">
                                        <p className="text-center text-white">6 & 128</p>
                                        <p className="text-white text-xl">BDT.18999</p>
                                        <p className="uppercase text-center text-white">INTERNATIONAL
                                        </p>
                                    </div>
                                </div>
                                <button className="btn btn-primary">Book now</button>
                            </div>
                            <div>
                                <img className="h-[50vh]" src={oppo} alt="" />
                            </div>
                        </div>

                    </div>
                </Slider>
            </div>
        );
    }
}