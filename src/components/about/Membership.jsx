import React from "react";
import { Button } from "../ui/button";
import MembershipCategories from "./MembershipCategories";

const Membership = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Membership</h1>

        <div className="prose max-w-none mb-12">
          <p className="text-lg mb-6">
            CA Hub-Kenya is a member organization currently hosted by the Africa
            Conservation Tillage Network (ACT), at KALRO Kabete, Nairobi.
            Membership to the Hub is open to organizations promoting
            conservation agriculture in Kenya. The organizations sign a
            Consortium Agreement committing to the aspirations of the CA
            Hub-Kenya.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to Join</h2>
            <p className="mb-4">
              As an organization / institution promoting CA in Kenya, you can
              become a member of the Hub by expressing your interest for
              consideration by the Steering committee by providing organization
              details in our membership form.
            </p>
            <p className="mb-6">
              The Steering committee once satisfied with your intention will
              share with you the Consortium Agreement for your organization to
              commit to operation of the CA Hub.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-green-700 hover:bg-green-800">
                <a href="/get-involved#membership">Apply for Membership</a>
              </Button>
            </div>
          </div>
        </div>

        <MembershipCategories />

        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Our Current Members</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=act"
              alt="ACT Logo"
              className="h-16 object-contain"
            />
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=fao"
              alt="FAO Logo"
              className="h-16 object-contain"
            />
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=worldrenew"
              alt="World Renew Logo"
              className="h-16 object-contain"
            />
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=kalro"
              alt="KALRO Logo"
              className="h-16 object-contain"
            />
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=worldconcern"
              alt="World Concern Logo"
              className="h-16 object-contain"
            />
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=ncck"
              alt="NCCK Logo"
              className="h-16 object-contain"
            />
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=sasakawa"
              alt="Sasakawa Logo"
              className="h-16 object-contain"
            />
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=worldvision"
              alt="World Vision Logo"
              className="h-16 object-contain"
            />
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=nuru"
              alt="Nuru Logo"
              className="h-16 object-contain"
            />
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=udo"
              alt="UDO Logo"
              className="h-16 object-contain"
            />
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=sabol"
              alt="SABOL Logo"
              className="h-16 object-contain"
            />
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=interreligious"
              alt="Inter-Religious Council Logo"
              className="h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
