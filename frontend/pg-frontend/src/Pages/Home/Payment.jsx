import React, { useState } from 'react';
import './Payment.css';
import Navbar from '../../Components/Navbar';

const Payment = () => {
    const [amount, setAmount] = useState('');

    const handleAmountChange = (event) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setAmount(value);
        }
    };

    return (
        <>
            <Navbar />
            <div className="payment-container">
                <h1 className="headingp">Payment</h1>
                <div className="payment-box">
                    <h2>Confirm Your Booking</h2>
                    <p className="description">Secure your stay by completing the payment.</p>

                    <div className="payment-summary">
                        <div className="summary-item">
                            <span>PG Name:</span>
                            <strong>AeroNest Elite PG</strong>
                        </div>
                        <div className="summary-item">
                            <span>Enter Amount:</span>
                            <input
                                type="text"
                                value={amount}
                                onChange={handleAmountChange}
                                placeholder="Enter amount in ₹"
                                className="amount-input"
                            />
                        </div>
                        <div className="summary-item">
                            <span>Payment Method:</span>
                            <select>
                                <option>Credit Card</option>
                                <option>Debit Card</option>
                                <option>UPI</option>
                                <option>Net Banking</option>
                            </select>
                        </div>
                    </div>

                    <button className="pay-button" disabled={!amount}>Proceed to Payment</button>
                    <p className="support-text">
                        Need help? Contact us at <a href="mailto:support@aeronest360.com">support@aeronest360.com</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Payment;
