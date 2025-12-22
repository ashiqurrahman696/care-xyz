"use server";

import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const postUser = async(payload) => {
    console.log(payload);
    // 1. Check user exist or not
    const isExist = await dbConnect("users").findOne({email: payload.email});
    if(isExist){
        return{
            success: false,
            message: "User already exists"
        };
    }
    const hashPassword = await bcrypt.hash(payload.password, 10);
    console.log(hashPassword);

    // 2. Create new user
    const newUser = {
        ...payload,
        createdAt: new Date().toISOString(),
        password: hashPassword
    }

    // 3. Send user to database
    const result = await dbConnect("users").insertOne(newUser);
    if(result.acknowledged){
        return{
            success: true,
            message: `Registered successfully.`
        };
    }
    else{
        return{
            success: false,
            message: "Something went wrong. Try again."
        };
    }
};