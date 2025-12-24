"use client";
import { postUser } from '@/actions/server/auth';
import { showAlert } from '@/utils/showAlert';
import React, { Suspense } from 'react';
import { SocialButton } from './SocialButton';

const RegisterForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = {
            nid: form.nid.value,
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
        };
        if (!formData.nid ||
            !formData.name ||
            !formData.email ||
            !formData.password
        ) {
            return showAlert("Error", "Please fill up all fields", "error");
        }
        else if (!emailPattern.test(formData.email)) {
            return showAlert("Error", "Invalid email", "error");
        }
        else if (formData.password.length < 6) {
            return showAlert("Error", "Password must be at least 6 characters", "error");
        }
        else if (!casePattern.test(formData.password)) {
            return showAlert("Error", "Password must contain at least one uppercase and one lowercase letter", "error");
        }
        const result = await postUser(formData);
        if (!result.success) {
            return showAlert("Error", result.message, "error");
        }
        showAlert("Success", result.message, "success");
    };
    return (
        <div className="min-h-[calc(100vh-76px)] flex justify-center items-center p-6">
            <div className="card bg-base-200 w-full max-w-sm">
                <div className="card-body">
                    <h2 className="text-3xl text-center font-bold">Register</h2>
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="label">NID No</label>
                        <input type="text" name="nid" className="input w-full" placeholder="NID No" />
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input w-full" placeholder="Name" />
                        <label className="label">Email</label>
                        <input type="text" name="email" className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input w-full" placeholder="Password" />
                        <button className="btn btn-info mt-4">Register</button>
                    </form>
                    <Suspense fallback={<div>Loading...</div>}>
                        <SocialButton/>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;