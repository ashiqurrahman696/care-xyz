"use server";

import { dbConnect } from "@/lib/dbConnect";

export const postBooking = async(payload) => {
    const newBooking = {...payload};
    const result = await dbConnect("bookings").insertOne(newBooking);
    if(result.acknowledged){
        return{
            success: true,
            message: `Booking confirmed.`
        };
    }
    else{
        return{
            success: false,
            message: "Something went wrong. Try again."
        };
    }
}