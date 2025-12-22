import React from 'react';

const ServiceDetailSkeleton = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 flex items-center max-lg:flex-col gap-4">
            <div className="flex-1">
                <div className="skeleton w-full aspect-video"></div>
            </div>
            <div className="flex-1 space-y-4">
                <div className="skeleton w-full h-12"></div>
                <div className="skeleton w-full h-16"></div>
                <div className="skeleton w-full max-w-52 h-6"></div>
                <div className="skeleton w-full max-w-36 h-16"></div>
            </div>
        </div>
    );
};

export default ServiceDetailSkeleton;