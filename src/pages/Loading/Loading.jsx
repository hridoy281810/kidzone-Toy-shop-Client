import React from 'react';
import loading from '../../assets/lotti/loading (2).json'
import Lottie from "lottie-react";

const Loading = () => {
    return (
        <div>
             <div className='flex justify-center items-center h-[calc(100vh-473px)]' >
            <div>
                <h1 className='text-4xl font-semibold text-orange-600'>LOADING......</h1>
            <Lottie className='w-44 ' animationData={loading} loop={true} />
            </div>
        </div>
        </div>
    );
};

export default Loading;