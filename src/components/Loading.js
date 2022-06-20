import React from 'react';
import loadLoading from '../assets/image/Loading.gif'

const Loading = () => {
    return <div className='flex  justify-center items-center h-[60vh]'>
        <img className='w-30 ' src={loadLoading} alt="" />
    </div>
};

export default Loading;
