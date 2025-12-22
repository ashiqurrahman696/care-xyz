"use client";
import React from 'react';

const RegisterForm = () => {
    return (
        <div className="min-h-[calc(100vh-76px)] flex justify-center items-center p-6">
            <div className="card bg-base-200 w-full max-w-sm">
                <div className="card-body">
                    <h2 className="text-3xl text-center font-bold">Register</h2>
                    <form className="fieldset">
                        <label className="label">NID No</label>
                        <input type="text" className="input w-full" placeholder="NID No" />
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" placeholder="Name" />
                        <label className="label">Email</label>
                        <input type="email" className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input w-full" placeholder="Password" />
                        <button className="btn btn-info mt-4">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;