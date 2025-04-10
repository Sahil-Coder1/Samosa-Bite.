import React from 'react';
import eco from '/assets/eco.jpg';
import packed from '/assets/packed.jpg';
import hot from '/assets/hot.jpg';

const Serve = () => {
    return (
        <div>
            <div className="absolute">
                <svg height="600" width="600" xmlns="http://www.w3.org/2000/svg">
                    <circle r="60" cx="480" cy="120" fill="red" opacity="0.1" />
                    Sorry, your browser does not support inline SVG.
                </svg>
            </div>
            <div className="absolute">
                <svg height="600" width="1200" xmlns="http://www.w3.org/2000/svg">
                    <circle r="60" cx="880" cy="580" fill="red" opacity="0.2" />
                    Sorry, your browser does not support inline SVG.
                </svg>
            </div>
            <h1 className='w-full text-center p-8 pt-20 text-5xl font-bold text-red-600'>How We Serve You</h1>
            <div className='flex justify-around gap-5 my-4 ml-20'>
                <div className=' p-8 text-center'>
                    <img src={eco} className='h-72 w-72 rounded-full' />
                    <h1 className='text-2xl'>Eco-Chic Packaging <span className='text-5xl text-red-600'>.</span></h1>
                </div>
                <div className=' p-8 text-center'>
                    <img src={packed} className='h-72 w-72 rounded-full p-4' />
                    <h1 className='text-2xl'>Packed with Love <span className='text-5xl text-red-600'>.</span></h1>
                </div>
                <div className=' p-8 text-center'>
                    <img src={hot} className='h-72 w-72 rounded-full p-4' />
                    <h1 className='text-2xl'>Served Hot <span className='text-5xl text-red-600'>.</span></h1>
                </div>
            </div>

        </div>
    );
};

export default Serve;