import React from 'react';
import paneer from '/assets/samosa/paneer.jpg';
import mushroom from '/assets/samosa/mushroom.jpg';
import corn from '/assets/samosa/corn.jpg';
import dal from '/assets/samosa/dal.jpg';
import onion from '/assets/samosa/onion.jpg';
import cheese from '/assets/samosa/cheese.jpg';

const MDelivered = () => {
    return (
        <div>
            <div className="w-5/6 mt-16 ml-16">
                <div className="absolute right-0">
                    <svg height="500" width='150' xmlns="http://www.w3.org/2000/svg">
                        <circle r="80" cx="150" cy="80" fill="orange" opacity="0.2" />
                        Sorry, your browser does not support inline SVG.
                    </svg>
                </div>
                <div className='flex justify-around'>
                    <h1 className='font-bold text-5xl ml-20'>Our <span className='text-red-600'>Best Delivered</span><br /> Categories</h1>
                    <p className='content-center font-semibold text-gray-800'>It's not just about bringing you good food , <br /> We deliver you experience</p>
                </div>
                <div className='flex justify-around gap-5 mt-4 ml-20'>
                    <div className="absolute">
                        <svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
                            <circle r="80" cx="150" cy="80" fill="red" opacity="0.1" />
                            Sorry, your browser does not support inline SVG.
                        </svg>
                    </div>
                    <div className="absolute">
                        <svg height="1000" width="1200" xmlns="http://www.w3.org/2000/svg">
                            <circle r="60" cx="1100" cy="380" fill="red" opacity="0.1" />
                            Sorry, your browser does not support inline SVG.
                        </svg>
                    </div>
                    <div className="w-full px-10 pt-10 text-center">
                        <img
                            src={paneer}
                            alt="burger"
                            className=' rounded-full  bg-red-600  hover:bg-red-600 hover:p-3 hover:shadow-lg  hover:shadow-red-600 duration-300 ease-in-out transition-all border-1 border-red-600 transform ' />
                        <h2 className='text-2xl p-4 '>Paneer Samosa<span className='text-red-600 text-4xl font-bold'>.</span></h2>
                    </div>
                    <div className="w-full px-10 pt-10 text-center">
                        <img src={mushroom} alt="mushroom"
                            className=' rounded-full  bg-red-600  hover:bg-red-600 hover:p-3 hover:shadow-lg  hover:shadow-red-600 duration-300 ease-in-out transition-all border-1 border-red-600 transform ' />
                        <h2 className='text-2xl p-4 '>Mushroom Samosa<span className='text-red-600 text-4xl font-bold'>.</span></h2>
                    </div>

                    <div className="w-full px-10 pt-10 text-center">
                        <img src={corn} alt="noodle"
                            className=' rounded-full  bg-red-600  hover:bg-red-600 hover:p-3 hover:shadow-lg  hover:shadow-red-600 duration-300 ease-in-out transition-all border-1 border-red-600 transform ' />
                        <h2 className='text-2xl p-4 '>Corn Samosa<span className='text-red-600 text-4xl font-bold'>.</span></h2>
                    </div>

                </div>
                <div className='flex justify-around gap-5 mt-4 ml-20'>
                    <div className="w-full  px-10 text-center">
                        <img src={onion} alt="noodle"
                            className=' rounded-full  bg-red-600  hover:bg-red-600 hover:p-3 hover:shadow-lg  hover:shadow-red-600 duration-300 ease-in-out transition-all border-1 border-red-600 transform ' />
                        <h2 className='text-2xl p-4 '>Onion Samosa<span className='text-red-600 text-4xl font-bold'>.</span></h2>
                    </div>
                    <div className="w-full px-10 text-center">
                        <img src={dal} alt="noodle"
                            className=' rounded-full  bg-red-600  hover:bg-red-600 hover:p-3 hover:shadow-lg  hover:shadow-red-600 duration-300 ease-in-out transition-all border-1 border-red-600 transform ' />
                        <h2 className='text-2xl p-4 '>Dal Samosa<span className='text-red-600 text-4xl font-bold'>.</span></h2>
                    </div>
                    <div className="w-full px-10  text-center">
                        <img src={cheese} alt="noodle"
                            className=' rounded-full  bg-red-600  hover:bg-red-600 hover:p-3 hover:shadow-lg  hover:shadow-red-600 duration-300 ease-in-out transition-all border-1 border-red-600 transform ' />
                        <h2 className='text-2xl p-4 '>Corn Samosa<span className='text-red-600 text-4xl font-bold'>.</span></h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MDelivered;