import React from 'react';
import headerPages from '@/util/headerPages'
import Image from "next/image";

import HeaderButton from './headerButton';

const Header = ({  }) => {
    return (
        <div className='w-full h-20 flex'>

        <Image
            src="/img/intergarlic2.png"
            alt=""
            width="100"
            height="100"
            className="object-contain h-full"
                />
            {headerPages.map((page, index) => <HeaderButton key={index} name={page.name} path={page.path}></HeaderButton>)}
        
            

        </div>
    )
}

export default Header