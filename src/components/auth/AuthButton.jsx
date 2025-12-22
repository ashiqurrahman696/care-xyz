"use client";
import React from 'react';
import LoginButton from './LoginButton';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const AuthButton = () => {
    const session = useSession();
    return (
        <>
            {session?.status === "authenticated" ? <button className="btn btn-error" onClick={() => signOut()}>Logout</button> : <>
                <LoginButton />
                <Link href="/register" className="btn btn-accent">Register</Link>
            </>}
        </>
    );
};

export default AuthButton;