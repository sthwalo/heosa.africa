import { CheckCircle } from 'lucide-react'; 
import { useEffect, useState } from 'react';

function TermsAndConditions() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Fade in effect when the component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000); // Delay for fade-in effect
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-[#2B2A29] text-white py-24">
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="/images/events/File 12.png" 
                        alt="Hero background"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-center">Terms and Conditions</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <ol className="list-decimal space-y-6">
                    {[
                        { title: "Nomination Process", description: "Individuals may nominate their healthcare professional or institution under a specific category." },
                        { title: "Acceptance of Nomination", description: "The nominated healthcare professional will be contacted by the office and must either accept or decline the nomination." },
                        { title: "Submission of Proof", description: "Upon acceptance of the nomination, the healthcare professional is required to submit proof of their work in the specific category they have been nominated for." },
                        { title: "Shortlisting and Selection", description: "The African Health Excellence Organisation Adjudication Committee will review the nominations, shortlist candidates, and select finalists based on established professional standards and criteria." },
                        { title: "Voting Process", description: "Individuals will have the opportunity to vote for their favorite healthcare professional or institution among those shortlisted as finalists." },
                        { title: "Winners Announcement", description: "The healthcare professionals who receive the most votes will be declared winners in their respective categories." }
                    ].map((item, index) => (
                        <li key={index} className={`flex flex-col transition-transform duration-500 transform ${isVisible ? 'translate-x-0' : 'translate-x-[-20px] opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="flex items-start mb-2">
                                <CheckCircle className="h-6 w-6 text-[#962326] mr-2" />
                                <strong>{item.title}:</strong>
                            </div>
                            <p className="ml-8">{item.description}</p> {/* Indent the description for better alignment */}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default TermsAndConditions;