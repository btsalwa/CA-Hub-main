import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const SuccessStorySubmission = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Share Success Stories</h2>
        <p className="text-lg mb-6">
          If you a member of this network and you have a CA based success
          stories or best practices, kindly share with us a summarize profile of
          it as an article or video(with links) in the form provided below (The
          success stories/best practices will be periodically compiled and
          included in CA Hub Kenya Newsletter):
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Success Story / Best Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Title
                  </label>
                  <Input placeholder="Enter success story title" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Locality
                  </label>
                  <Input placeholder="Where is this success story from?" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Summary / Description of the story/ case study
                  </label>
                  <Textarea
                    placeholder="Provide a detailed description of your success story or best practice"
                    rows={6}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Notable Key issues / References / additional information
                  </label>
                  <Textarea
                    placeholder="Any additional information, references or key issues to highlight"
                    rows={4}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Submit Success Story
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SuccessStorySubmission;
