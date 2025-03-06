import React from "react";

const OrganizationalStructure = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Organizational Structure</h2>

        <div className="space-y-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-green-200">
            <p className="text-xl font-semibold text-green-700">ACT Network</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-green-200">
            <p className="text-xl font-semibold text-green-700">CA Hub Kenya</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-green-200">
              <p className="text-xl font-semibold text-green-700">
                CA Hub Funding Partners
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-green-200">
              <p className="text-xl font-semibold text-green-700">
                CA Hub Steering Committee
              </p>
            </div>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-green-200">
            <p className="text-xl font-semibold text-green-700">
              CA Hub Secretariat
            </p>
            <p className="text-gray-600 mt-2">
              A secretariat comprising a Program Officer, Accountant, Resource
              Mobilization Officer, and seconded technical experts from time to
              time.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-green-200">
            <p className="text-xl font-semibold text-green-700">
              Working Groups
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="font-medium">Scaling CA</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="font-medium">Research & Capacity</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="font-medium">Partnerships, Advocacy & Policy</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="font-medium">
                  Communication & Knowledge Management
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="font-medium">Resource Mobilization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalStructure;
