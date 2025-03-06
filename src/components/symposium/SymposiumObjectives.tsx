import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const SymposiumObjectives = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About the Symposium</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                The Conservation Agriculture Conference 2025 brings together key
                CA stakeholders to interact, synthesize, and share CA best
                practices and provoke strategic thinking on how to
                collaboratively promote and scale the adoption of the CA
                technologies, inputs, practices and services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Share evidence of best practices from small, medium, and
                  large–scale farmers
                </li>
                <li>Demystify and challenge the CA adoption data for Kenya</li>
                <li>
                  Probe key interventions for scaling and mainstreaming of CA
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">
            Expected Symposium Outcomes
          </h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>
              Enhanced understanding of the Conservation Agriculture root causes
              and opportunities
            </li>
            <li>
              Strategic recommendations to address barriers to wide-scale
              adoption of CA in Kenya
            </li>
            <li>New and strengthened partnerships for ushering CA adoption</li>
            <li>Summarized proceedings to guide action and advocacy for CA</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SymposiumObjectives;
