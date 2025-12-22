import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className="card bg-base-300 shadow-sm">
            <figure>
                <Image
                    src={service.image}
                    alt={service.service_name}
                    className="h-50 object-cover w-full"
                    width={300}
                    height={200}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{service.service_name}</h2>
                <p className="line-clamp-3">{service.description}</p>
                <div className="card-actions justify-end">
                    <Link href={`/services/${service._id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;