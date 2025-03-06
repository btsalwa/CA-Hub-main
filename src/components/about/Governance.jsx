import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import OrganizationalStructure from "./OrganizationalStructure";

const Governance = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Structure and Governance</h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg">
            An elaborate structure of CA Hub-Kenya network has been established
            with clear roles as described below:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Secretariat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                A secretariat comprising a Program Officer, Accountant, Resource
                Mobilization Officer, and seconded technical experts from time
                to time.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Steering Committee (SC)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                The Secretariat reports to the Steering Committee drawn from the
                members of the Hub. The SC functions like a Board and provides
                strategic leadership on the operations of the Hub.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Working Groups (WG)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                These are thematic teams helping deliver on the various
                strategic areas of the CA Hub:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Scaling CA</li>
                  <li>Research & Capacity</li>
                  <li>Partnerships, Advocacy & Policy</li>
                  <li>Communication & Knowledge management</li>
                  <li>Resource Mobilization</li>
                </ul>
              </p>
            </CardContent>
          </Card>
        </div>

        <OrganizationalStructure />
      </div>
    </div>
  );
};

export default Governance;
