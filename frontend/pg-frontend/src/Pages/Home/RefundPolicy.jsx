import React from "react";
import Navbar from "../../Components/Navbar";

const RefundPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Refund Policy</h1>
        <p className="text-lg mb-4">
          At Aeronest 360, we strive to provide the best possible experience for our users. However, we understand that situations may arise where a refund is necessary.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Eligibility for Refunds</h2>
        <p className="mb-4">
          Refunds are considered under the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Duplicate payment or overcharges.</li>
          <li>Technical issues preventing access to our services.</li>
          <li>Cancellation of services within the specified refund period.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-4">Non-Refundable Cases</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Failure to use the service due to user negligence.</li>
          <li>Refund requests made after the specified refund period.</li>
          <li>Violations of our terms of service.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-4">Processing Refunds</h2>
        <p className="mb-4">
          Refund requests must be submitted to our support team. Approved refunds will be processed within 5-10 business days.
        </p>
        <p className="text-lg font-semibold mt-4">For further assistance, contact us at support@aeronest360.com</p>
      </div>
    </>
  );
};

export default RefundPolicy;
