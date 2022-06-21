import React from 'react';
import oppo from '../../assets/image/logo/Oppo.png';
import vivo from '../../assets/image/logo/Vivo.png';
import redmi from '../../assets/image/logo/Redmi.png';
import realme from '../../assets/image/logo/Realme.png';
import samsung from '../../assets/image/logo/Samsung.png';
import hauwei from '../../assets/image/logo/Huawei.png';
import infinix from '../../assets/image/logo/Infinixpng.png';
import iphone from '../../assets/image/logo/IPhone.png'
import nokia from '../../assets/image/logo/Nokia.png';


const Company = () => {
    return (
        <div className='mt-10 bg-base-200 py-10 '>
            <h1 className='text-center text-3xl mb-5'>Available Company Phone</h1>
            <div className='grid grid-cols-2 md:grid-cols-8 lg:grid-cols-9 ml-5 gap-2'>
                <img className=' h-12 w-20' src={oppo} alt="" />
                <img className=' h-12 w-20' src={vivo} alt="" />
                <img className=' h-12 w-20' src={redmi} alt="" />
                <img className=' h-12 w-24' src={realme} alt="" />
                <img className=' h-12 w-20' src={samsung} alt="" />
                <img className=' h-12 w-20' src={hauwei} alt="" />
                <img className=' h-12 w-20' src={infinix} alt="" />
                <img className=' h-12 w-20' src={iphone} alt="" />
                <img className=' h-12 w-20' src={nokia} alt="" />
            </div>
        </div>
    );
};

export default Company;