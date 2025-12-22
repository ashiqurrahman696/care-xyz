"use server";

import { dbConnect } from "@/lib/dbConnect";

export const getServices = async () => {
    const services = await dbConnect("services").find().toArray();
    return services;
};
