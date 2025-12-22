import React from 'react';

const TestimonialCard = ({testimonial}) => {
    return (
        <div className="card bg-base-300 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{testimonial.name}</h2>
                <p>{testimonial.review}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;