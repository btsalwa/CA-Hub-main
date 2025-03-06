import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const BlogSubmission = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Share a Blog</h2>
        <p className="text-lg mb-6">
          If you a member of this network and you have a CA based interesting
          innovations and achievement, kindly share with us its summary as an
          article in the form provided below (these blogs will be periodically
          compiled into CA Hub Kenya Newsletter):
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Blog Submission</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Title
                  </label>
                  <Input placeholder="Enter blog title" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Locality
                  </label>
                  <Input placeholder="Where is this innovation/achievement from?" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Summary / Description
                  </label>
                  <Textarea
                    placeholder="Provide a detailed summary of your innovation or achievement"
                    rows={6}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Key issues / References / additional information
                  </label>
                  <Textarea
                    placeholder="Any additional information, references or key issues to highlight"
                    rows={4}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Submit Blog
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogSubmission;
