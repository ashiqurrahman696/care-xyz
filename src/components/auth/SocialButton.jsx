"use client";
import { signIn } from "next-auth/react";
import { useParams, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export const SocialButton = () => {
    const params = useSearchParams();

    const handleSignIn = async () => {
        const result = await signIn("google", {
            // redirect: "false",
            callbackUrl: params.get("callbackUrl") || "/",
        });
    };

    return (
        <div className="w-full">
            <button
                onClick={handleSignIn}
                className="btn btn-block text-black bg-white"
            >
                <FcGoogle className="text-lg" />
                Login with Google
            </button>
        </div>
    );
};