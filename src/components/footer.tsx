import React from 'react';
import Image from "next/image";

//import HeaderButton from './headerButton';

const Footer = ({  }) => {
    return (
        <div className='relative w-full h-20 flex items-center justify-center pl-10 pr-10'>
        
            <Image
                src="/img/intergarlic2.png"
                alt=""
                width="60"
                height="60"
                className="absolute object-contain h-full bottom-20"
                    />
            
            <div className="absolute w-full h-1 bg-blue blur-[2px] brightness-50 bottom-20"></div>

            <div className="absolute bottom-10 text-txtDark">
                <h1>© 2024 Intergarlic, Zak Ottewell and Emma Scott, All rights reserved.</h1>
            </div>
            
            

        </div>
    )
}

export default Footer