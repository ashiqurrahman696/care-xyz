import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className="flex gap-4 items-center max-lg:flex-col max-w-7xl mx-auto px-6">
            <div className="flex-1">
                <Image src="/about.jpg" alt="About" width={900} height={600} className="w-full" />
            </div>
            <div className="flex-1 space-y-4">
                <h2 className="font-bold text-5xl">About Care.xyz</h2>
                <p>The mission of care.xyz is to provide a reliable and compassionate digital platform that connects families with professional home-based care for the elderly, children, and those with medical needs. By prioritizing safety, trust, and dignity, the platform aims to enhance the quality of life for seniors through personalized nursing and companionship while offering peace of mind to their loved ones. Ultimately, its mission is to bridge the care gap in Bangladesh by combining background-verified expertise with transparent communication technology to ensure every family member receives the specialized support they deserve.</p>
            </div>
        </div>
    );
};

export default About;