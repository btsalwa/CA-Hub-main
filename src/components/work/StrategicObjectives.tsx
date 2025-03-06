import React from "react";

const StrategicObjectives = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Strategic Objectives</h2>

        <p className="text-lg text-gray-700 mb-8">
          Strategically, CA Hub-Kenya network aims to create CA Champions,
          increase the area under CA as adopted by farmers, enhance the
          embracing and integration of CA in county policy frameworks, raise
          finances and investment in CA by the public and private sector and
          build a vibrant CA community of practice.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
              1
            </div>
            <p className="font-semibold">Create CA Champions</p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg text-center">
            <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
              2
            </div>
            <p className="font-semibold">
              Increase the area under CA as adopted by farmers
            </p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <div className="bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
              3
            </div>
            <p className="font-semibold">
              Enhance the embracing and integration of CA in county policy
              frameworks
            </p>
          </div>

          <div className="bg-red-100 p-4 rounded-lg text-center">
            <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
              4
            </div>
            <p className="font-semibold">
              Raise financing and investment in CA by the public and private
              sector
            </p>
          </div>

          <div className="bg-purple-100 p-4 rounded-lg text-center">
            <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
              5
            </div>
            <p className="font-semibold">
              Build a vibrant CA community of practice
            </p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Strategic Areas</h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">
                A. Delivering CA at Scale
              </h4>
              <p className="text-gray-700">
                The impact of CA can empirically be measured by the extent of
                adoption, acreage covered and livelihoods transformed. Thus,
                delivering CA at scale forms the basis for advocacy hence a
                critical component of the Hub. CA is a Community-based
                adaptation to climate change means community-led CA processes
                based on communities' priorities, needs, knowledge, and
                capacities, which should empower people to plan for and cope
                with the impacts of climate change.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">
                B. Research and Capacity Strengthening
              </h4>
              <p className="text-gray-700">
                Africa's agriculture is in great need of reform to minimize and
                eventually eliminate land degradation, improve yields per unit
                area, reduce the drudgery especially for smallholder farmers,
                sustain productivity and profitability and enhance environmental
                conservation. This strategic area aims at developing the
                capacity for innovations of the millions of smallholder farmers
                whose traditional practices (even where effective are largely
                ignored or underreported).
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">
                C. Partnerships, Advocacy and Policy
              </h4>
              <p className="text-gray-700">
                The mainstreaming and scaling of CA to national policies,
                frameworks and programmes requires the scientific evidence to
                convince the buy-in of policy makers and investors. Collective
                and concerted efforts are needed give voice to individuals and
                groups whose concerns and interests are not being heard in the
                advocacy for policy change to mainstream CA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicObjectives;
