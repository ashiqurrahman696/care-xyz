import ServiceSkeleton from '@/components/skeleton/ServiceSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 p-6">
            {[...Array(8)].map((_, index) => (
                <ServiceSkeleton key={index} />
            ))}
        </div>
    );
};

export default loading;