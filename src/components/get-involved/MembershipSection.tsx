import React from "react";
import { Button } from "../ui/button";

const MembershipSection = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Become a Member</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-lg mb-6">
            As an organization / institution promoting CA in Kenya, you can
            become a member of the Hub by expressing your interest for
            consideration by the Steering committee by providing organization
            details indicated in the form. The Steering committee once satisfied
            with your intention will share with you the Consortium Agreement for
            your organization to commit to operation of the CA Hub.
          </p>

          <p className="mb-6">
            For any inquiries contact the CA Hub Kenya Secretariat: Peter Kuria
            | M: 0722451704 | E:{" "}
            <a
              href="mailto:peter.kuria@act-africa.org"
              className="text-green-700 hover:underline"
            >
              peter.kuria@act-africa.org
            </a>
          </p>

          <div className="text-center">
            <Button size="lg" className="bg-green-700 hover:bg-green-800">
              Register Here
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;
