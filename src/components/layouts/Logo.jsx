import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.png" alt="Logo" width={60} height={60} />
                <h2 className="font-bold text-2xl max-sm:hidden"><span className="text-red-400">Care</span>.XYZ</h2>
            </Link>
        </div>
    );
};

export default Logo;