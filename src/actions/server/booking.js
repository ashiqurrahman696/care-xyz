"use server";

import { authOptions } from "@/lib/authOptions";
import { dbConnect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";

export const postBooking = async(payload) => {
    const {user} = (await getServerSession(authOptions)) || {};
    if (!user) return {success: false};
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