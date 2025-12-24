import { getServices } from '@/actions/server/service';
import ServiceCard from '@/components/cards/ServiceCard';
import React from 'react';

export const metadata = {
    title: "All Service",
};

const ServicesPage = async() => {
    const services = await getServices();
    return (
        <div className="max-w-7xl mx-auto space-y-4 p-6">
            <h2 className="text-5xl font-bold text-center">All Services</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {services.map(service => 
                    <ServiceCard key={service._id} service={service} />
                )}
            </div>
        </div>
    );
};

export default ServicesPage;