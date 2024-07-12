import Image from 'next/image';
import React from 'react';
import ProfileSection from './ProfileSection';

const HomeHero = () => {
    return (
        <div>
            <div className='min-h-[200px] sm:min-h-[400px] w-full relative'>
                <Image src={"/images/big-screen/hero/background/Profile Background (1).png"} className='absolute block' fill priority objectFit='cover' alt='hero section image' sizes="(max-width: 600px) 70vw, 100vw"
                />
            </div>
            <div className='mx-6 bg-[#F6F6F6]'>
                <ProfileSection />
            </div>
        </div>
    );
};

export default HomeHero;