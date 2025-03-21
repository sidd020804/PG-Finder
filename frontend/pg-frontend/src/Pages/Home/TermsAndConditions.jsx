import React from 'react';
import './TermsAndConditions.css';
import Navbar from "../../Components/Navbar";

const TermsAndConditions = () => {
    return (
        <>
        <Navbar />
        <div className="container">
            <h1 className="headingt">Terms and Conditions</h1>
            <p>Welcome to AeroNest 360! By using our platform, you agree to the following terms and conditions.</p>
            
            <h2 className="sub-heading">1. Registration & User Responsibilities</h2>
            <p>To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account information.</p>

            <h2 className="sub-heading">2. PG Listings & Accuracy</h2>
            <p>We strive to provide accurate listings, but AeroNest 360 is not responsible for any discrepancies between listings and actual PG conditions.</p>

            <h2 className="sub-heading">3. Payments & Refunds</h2>
            <p>Any transactions made through our platform are subject to the terms set by the respective PG owners. Refund policies vary and should be checked before booking.</p>

            <h2 className="sub-heading">4. Code of Conduct</h2>
            <ul>
                <li>Respect all PG rules and policies.</li>
                <li>No fraudulent listings or misleading information.</li>
                <li>Users engaging in illegal activities will be banned.</li>
            </ul>
            
            <h2 className="sub-heading">5. Liability Disclaimer</h2>
            <p>AeroNest 360 acts as a platform to connect users with PG accommodations. We are not liable for any disputes, damages, or losses incurred through bookings.</p>

            <h2 className="sub-heading">6. Privacy Policy</h2>
            <p>Your data is secure with us. We do not share personal information without consent. Read our <a href="#">Privacy Policy</a> for more details.</p>

            <h2 className="sub-heading">7. Changes to Terms</h2>
            <p>We may update these terms from time to time. Continued use of our platform means you accept the new terms.</p>

            <p><strong>Need help?</strong> Contact us at <a href="mailto:support@aeronest360.com">support@aeronest360.com</a></p>
        </div>
        </>
    );
};

export default TermsAndConditions;
