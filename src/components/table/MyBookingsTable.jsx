"use client";
import Link from 'next/link';
import React from 'react';

const MyBookingsTable = ({myBookings}) => {
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table table-zebra">
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
                    {myBookings.map((booking, index) => <tr key={booking._id.toString()}>
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
    );
};

export default MyBookingsTable;