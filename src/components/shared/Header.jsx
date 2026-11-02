
import logo from '@/assets/logo.png'
import Image from 'next/image';

import { Suspense } from 'react';
const Header = () => {
    return (
        <div className='text-center py-8 space-y-4'>
            <Image src={logo} width={300} height={200} alt='logo' className='mx-auto'></Image>
            <p>Journalism Without Fear And Favour</p>
            {/* <Suspense fallback={<div>Loading....</div>}>

            </Suspense> */}
            
            
        </div>
    );
};

export default Header;