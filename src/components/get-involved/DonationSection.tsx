import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const DonationSection = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Donate</h2>
        <p className="text-lg mb-6">
          Support our mission to promote conservation agriculture in Kenya. Your
          donation helps us expand our programs and reach more farmers with
          sustainable agricultural practices.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Bank Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-gray-700 mb-6">
              <p>
                <span className="font-semibold">Account Name:</span> AFRICAN
                CONSERVATION TILLAGE NETWORK
              </p>
              <p>
                <span className="font-semibold">Bank Name:</span> NCBA Bank
              </p>
              <p>
                <span className="font-semibold">Branch:</span> Westlands,
                Nairobi
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

            <div className="text-center">
              <Button size="lg" className="bg-green-700 hover:bg-green-800">
                Donate Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Our Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
