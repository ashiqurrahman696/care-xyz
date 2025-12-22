import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="relative">
            <Image src="/banner.jpg" alt="banner" width={1280} height={720} className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-black/50 p-6 flex justify-center items-center text-center">
                <h2 className="text-5xl font-bold leading-snug">To care for those who once cared for us is one of the highest honors.</h2>
            </div>
        </div>
    );
};

export default Banner;