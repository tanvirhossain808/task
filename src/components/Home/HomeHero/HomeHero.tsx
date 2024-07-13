import Image from 'next/image';
import React from 'react';

const HomeHero = () => {
    return (
        <div className='h-[200px] xs:h-[300px] lg:h-[400px] w-full relative m-0'>
            <Image src={"/images/mobile-images/hero/background/mobile-bg.png"} className='absolute sm:hidden h-auto' style={{ objectFit: "cover" }} fill priority alt='hero section image' sizes="(max-width: 600px) 70vw, 100vw"
            />
            <Image src={"/images/big-screen/hero/background/Profile Background (1).png"} className='absolute cover hidden sm:block' priority fill style={{ objectFit: "cover" }} alt='hero section image' sizes="(max-width: 600px) 100vw, 100vw"
            />
        </div>
    );
};

export default HomeHero;