import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ProjectRegistration = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Register Your Project</h2>
        <p className="text-lg mb-6">
          If you a member of this network and you have an active project, kindly
          register with us by providing a summary of your project in the form
          below:
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Project Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Project Name/Title
                  </label>
                  <Input placeholder="Enter project title" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Project Locality
                  </label>
                  <Input placeholder="Where is the project located?" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Partners Involved
                  </label>
                  <Input placeholder="List all partners involved in the project" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Description of project (Main activities)
                  </label>
                  <Textarea
                    placeholder="Describe the main activities of your project"
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Achievements / Milestones
                  </label>
                  <Textarea
                    placeholder="List key achievements and milestones"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Source of project funds
                  </label>
                  <Input placeholder="Who is funding this project?" />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Submit Project
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectRegistration;
