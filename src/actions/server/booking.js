"use server";

import { authOptions } from "@/lib/authOptions";
import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { cache } from "react";

export const getMyBookings = async() => {
    const {user} = (await getServerSession(authOptions)) || {};
    if (!user) return {success: false};
    const query = {email: user?.email};
    const result = await dbConnect("bookings").find(query).toArray();
    return result;
}

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

export const updateBookingStatus = cache(async(id, status) => {
    const {user} = (await getServerSession(authOptions)) || {};
    if (!user) return {success: false};

    const query = {_id: new ObjectId(id)};
    const updatedDoc = {
        $set: {
            status: status
        }
    };
    const result = await dbConnect("bookings").updateOne(query, updatedDoc);
    if(result.modifiedCount){
        revalidatePath("/my-bookings");
        return{
            success: true,
            message: `Booking cancelled.`
        };
    }
    else{
        return{
            success: false,
            message: "Something went wrong. Try again."
        };
    }
})