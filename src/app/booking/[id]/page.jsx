import { getSingleService } from '@/actions/server/service';
import BookingForm from '@/components/form/BookingForm';
import React from 'react';

export const metadata = {
    title: "Book Service",
};

const BookingPage = async({params}) => {
    const { id } = await params;
    const service = await getSingleService(id);
    return (
        <div>
            <BookingForm service={service} />
        </div>
    );
};

export default BookingPage;