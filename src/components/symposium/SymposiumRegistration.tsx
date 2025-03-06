import React from "react";
import { Button } from "../ui/button";

const SymposiumRegistration = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Registration</h2>
        <p className="text-lg text-gray-700 mb-6">
          The registration fee for the symposium, covering venue and meals, is
          KES. 5,000 per person.
        </p>

        <h3 className="text-xl font-semibold mb-4">Corporate Sponsorship</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-xl font-semibold text-green-700 mb-2">Gold</h4>
            <p className="text-2xl font-bold mb-2">KES 250,000</p>
            <p className="text-gray-600">Full recognition in all materials</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-xl font-semibold text-green-700 mb-2">
              Silver
            </h4>
            <p className="text-2xl font-bold mb-2">KES 125,000</p>
            <p className="text-gray-600">Recognition in select materials</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-xl font-semibold text-green-700 mb-2">
              Bronze
            </h4>
            <p className="text-2xl font-bold mb-2">KES 50,000</p>
            <p className="text-gray-600">Basic recognition</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Account Name:</span> AFRICAN
              CONSERVATION TILLAGE NETWORK
            </p>
            <p>
              <span className="font-semibold">Bank Name:</span> NCBA Bank
            </p>
            <p>
              <span className="font-semibold">Branch:</span> Westlands, Nairobi
            </p>
            <p>
              <span className="font-semibold">Country:</span> Kenya
            </p>
            <p>
              <span className="font-semibold">Account No:</span> 2591280018
            </p>
            <p>
              <span className="font-semibold">Swift Code:</span> CBAFKENX
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-green-700 hover:bg-green-800">
            Register Now
          </Button>
          <p className="mt-4 text-gray-600">
            For enquiries, contact the CA Hub Secretariat at:{" "}
            <a
              href="mailto:info@act-africa.org"
              className="text-green-700 hover:underline"
            >
              info@act-africa.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SymposiumRegistration;
