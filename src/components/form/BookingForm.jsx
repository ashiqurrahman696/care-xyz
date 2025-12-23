"use client";
import { postBooking } from '@/actions/server/booking';
import districts from '@/data/district.json';
import { showAlert } from '@/utils/showAlert';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

const BookingForm = ({service}) => {
    const session = useSession();
    const [districtsData, setDistrictsData] = useState([]);
    const [durationVal, setDurationVal] = useState(0);
    const divisionsDuplicate = districts.map(district => district.region);
    const divisions = [...new Set(divisionsDuplicate)];

    const districtsByDivision = division => {
        const divisionDistricts = districts.filter(district => district.region === division);
        const data = divisionDistricts.map(d => d.district);
        setDistrictsData(data);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const formData = {
            name: session?.data?.user?.name,
            email: session?.data?.user?.email,
            division: form.division.value,
            district: form.district.value,
            address: form.address.value,
            service_id: service._id,
            service_name: service.service_name,
            duration: `${form.duration.value} ${service.pricing.unit}`,
            cost: `${service.pricing.currency} $${service.pricing.rate * durationVal}`,
            status: "pending",
            booked_at: new Date().toISOString(),
        };
        if (!form.division.value ||
            !form.district.value ||
            !form.address.value ||
            !form.duration.value
        ){
            return showAlert("Error", "Please fill up all fields", "error");
        }
        const result = await postBooking(formData);
        if(!result.success){
            return showAlert("Error", result.message, "error");
        }
        showAlert("Success", result.message, "success");
    }
    return (
        <div className="min-h-[calc(100vh-76px)] flex justify-center items-center p-6">
            <div className="card bg-base-200 w-full max-w-2xl">
                <div className="card-body">
                    <h2 className="text-3xl text-center font-bold">Book Service</h2>
                    <form onSubmit={handleSubmit} className="fieldset md:grid-cols-2 gap-4">
                        <div>
                            <label className="label mb-1">Duration ({service.pricing.unit})</label>
                            <input onChange={(e) => setDurationVal(Number(e.target.value))} type="number" name="duration" className="input w-full" placeholder="Duration" />
                        </div>
                        <div>
                            <label className="label mb-1">Division</label>
                            <select onChange={(e) => districtsByDivision(e.target.value)} className="select w-full" name="division">
                                <option value="">Select division</option>
                                {divisions.map((division, index) => 
                                    <option key={index} value={division}>{division}</option>
                                )}
                            </select>
                        </div>
                        <div>
                            <label className="label mb-1">District</label>
                            <select className="select w-full" name="district">
                                <option value="">Select district</option>
                                {districtsData.map((district, index) => 
                                    <option key={index} value={district}>{district}</option>
                                )}
                            </select>
                        </div>
                        <div>
                            <label className="label mb-1">Address</label>
                            <input type="text" name="address" className="input w-full" placeholder="Address" />
                        </div>
                        <div className="col-span-full text-center">
                            <p className="text-lg"><strong>Total Cost:</strong> {service.pricing.currency} ${service.pricing.rate * durationVal}</p>
                        </div>
                        <div className="col-span-full">
                            <button className="btn btn-info btn-block">Confirm Booking</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;