import ServiceDetailSkeleton from '@/components/skeleton/ServiceDetailSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div>
            <ServiceDetailSkeleton/>
        </div>
    );
};

export default loading;