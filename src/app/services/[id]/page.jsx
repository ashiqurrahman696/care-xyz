import { getSingleService } from '@/actions/server/service';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceDetailsPage = async({params}) => {
    const { id } = await params;
    const service = await getSingleService(id);
    return (
        <div className="max-w-7xl mx-auto p-6 flex items-center max-lg:flex-col gap-4">
            <div className="flex-1">
                <Image src={service.image} alt={service.service_name} className="w-full" width={900} height={600} />
            </div>
            <div className="flex-1 space-y-4">
                <h2 className="text-5xl font-bold">{service.service_name}</h2>
                <p>{service.description}</p>
                <p><strong>Service Charge:</strong> {service.pricing.currency} ${service.pricing.rate}/{service.pricing.unit}</p>
                <Link href={`/booking/${id}`} className="btn btn-accent">Book Service</Link>
            </div>
        </div>
    );
};

export default ServiceDetailsPage;