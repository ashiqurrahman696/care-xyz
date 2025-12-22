import Image from 'next/image';
import React from 'react';

const Overview = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-4 px-6">
            <h2 className="text-5xl font-bold text-center">Service Overview</h2>
            <div className="flex gap-4 items-center max-lg:flex-col">
                <div className="flex-1">
                    <Image src="/baby-care.jpg" alt="About" width={900} height={600} className="w-full" />
                </div>
                <div className="flex-1 space-y-4">
                    <h3 className="font-bold text-3xl">Baby Care Services</h3>
                    <p>Baby care services focus on the well-being, safety, and development of infants and toddlers, offering support to parents, often in the family&apos;s home.</p>
                    <ul className="px-5 list-disc space-y-2">
                        <li><strong>Daily Care:</strong> Includes feeding, diaper changing, bathing, and dressing.</li>
                        <li><strong>Health and Hygiene:</strong> Involves monitoring health, ensuring cleanliness, and performing tasks like umbilical cord care or taking temperature.</li>
                        <li><strong>Developmental Support:</strong> Caregivers engage children in play, reading, and educational activities to foster social and cognitive development.</li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-4 items-center max-lg:flex-col-reverse">
                <div className="flex-1 space-y-4">
                    <h3 className="font-bold text-3xl">Elderly Services</h3>
                    <p>Elderly care provides support to older adults who need assistance with daily living activities due to age-related challenges or chronic conditions, aiming to maintain independence and quality of life.</p>
                    <ul className="px-5 list-disc space-y-2">
                        <li><strong>Personal Care:</strong> Assistance with bathing, dressing, grooming, and toileting.</li>
                        <li><strong>Medical & Health Support:</strong> Includes medication management, health monitoring (e.g., vital signs), coordination with healthcare professionals, and specialized care for conditions like dementia or Alzheimer&apos;s disease.</li>
                        <li><strong>Companionship & Social Engagement:</strong> Providing emotional support, engaging in conversations and hobbies, and facilitating social interactions to combat loneliness.</li>
                    </ul>
                </div>
                <div className="flex-1">
                    <Image src="/elderly.jpg" alt="About" width={900} height={600} className="w-full" />
                </div>
            </div>
            <div className="flex gap-4 items-center max-lg:flex-col">
                <div className="flex-1">
                    <Image src="/sick-people.jpg" alt="About" width={900} height={600} className="w-full" />
                </div>
                <div className="flex-1 space-y-4">
                    <h3 className="font-bold text-3xl">Sick People Services</h3>
                    <p>Services for sick people, often termed healthcare or patient care, encompass a broad spectrum of medical and supportive services for individuals of all ages managing illness, injury, or disability.</p>
                    <ul className="px-5 list-disc space-y-2">
                        <li><strong>Medical Diagnosis & Treatment:</strong> Services provided by doctors, nurses, and specialists in clinics or hospitals for diagnosing illnesses, managing chronic conditions, and providing acute treatment.</li>
                        <li><strong>Skilled Nursing:</strong> Professional nursing care including wound dressing, injections, IV therapy, and monitoring of complex health conditions.</li>
                        <li><strong>Therapeutic Services:</strong> Includes physical therapy to restore strength and mobility, occupational therapy to improve daily functioning, and speech therapy for communication or swallowing difficulties.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Overview;