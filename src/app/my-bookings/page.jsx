import { getMyBookings } from '@/actions/server/booking';
import MyBookingsTable from '@/components/table/MyBookingsTable';
import React from 'react';

const MyBookingPage = async() => {
    const myBookings = await getMyBookings();
    return (
        <div className="max-w-7xl mx-auto space-y-4 p-6">
            <h2 className="text-5xl font-bold text-center">My Bookings</h2>
            <MyBookingsTable myBookings={myBookings} />
        </div>
    );
};

export default MyBookingPage;