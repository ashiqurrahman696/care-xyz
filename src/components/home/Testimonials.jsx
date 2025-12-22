import React from 'react';
import TestimonialCard from '../cards/TestimonialCard';

const Testimonials = () => {
    const testimonialData = [
        {
            id: 1,
            name: "Nuwaira Rayan Rashid",
            review: "As a busy professional, I was constantly worried about my sick mother's health—whether she had eaten, taken her medicine, or if her blood pressure and diabetes were being monitored. care.xyz removed all those worries by providing constant care and medical supervision. I highly recommend them for anyone needing caregivers or nurses at home."
        },
        {
            id: 2,
            name: "Verified Client",
            review: "We needed a caregiver for our elderly mother. Due to our busy work schedule, we couldn't give her the time or specialized medical attention she required. ParentsCare provided an excellent, compassionate professional who managed her medicines and medical conditions perfectly, giving our family immense relief."
        },
        {
            id: 3,
            name: "Shahana Rahman",
            review: "The service was fantastic. I am amazed by the skilled nurses' compassionate care, which ensured both comfort and dignity for my loved one. Their professionalism in providing quality healthcare at home is truly commendable."
        },
        {
            id: 4,
            name: "Rokeya Sultana",
            review: "I am a working woman and often too busy to take proper care of my sick mother. I am highly satisfied with the home nursing service provided. The attentive nurses exceeded my expectations with their comprehensive care."
        },
    ];
    return (
        <div className="max-w-7xl mx-auto space-y-4 px-6">
            <h2 className="text-5xl font-bold text-center">Testimonials</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {testimonialData.map(testimonial =>
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                )}
            </div>
        </div>
    );
};

export default Testimonials;