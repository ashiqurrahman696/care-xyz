import RegisterForm from '@/components/auth/RegisterForm';
import React from 'react';

export const metadata = {
    title: "Register",
};

const RegisterPage = () => {
    return (
        <div>
            <RegisterForm/>
        </div>
    );
};

export default RegisterPage;