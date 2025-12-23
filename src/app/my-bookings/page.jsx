import { getMyBookings } from '@/actions/server/booking';
import Link from 'next/link';
import React from 'react';

const MyBookingPage = async() => {
    const myBookings = await getMyBookings();
    return (
        <div className="max-w-7xl mx-auto space-y-4 p-6">
            <h2 className="text-5xl font-bold text-center">My Bookings</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="bg-base-200">
                        <tr>
                            <th>SL</th>
                            <th>Service Name</th>
                            <th>Duration</th>
                            <th>Location</th>
                            <th>Total Cost</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myBookings.map((booking, index) => <tr key={booking._id}>
                            <th>{index + 1}</th>
                            <td>{booking.service_name}</td>
                            <td>{booking.duration}</td>
                            <td>{booking.address}</td>
                            <td>{booking.cost}</td>
                            <td>{booking.status}</td>
                            <td>
                                <div className="flex gap-2">
                                    <Link href={`/services/${booking.service_id}`} className="btn btn-info">View Details</Link>
                                    <button className="btn btn-error">Cancel Booking</button>
                                </div>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookingPage;