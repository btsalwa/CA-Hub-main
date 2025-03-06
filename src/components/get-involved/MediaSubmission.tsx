import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const MediaSubmission = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          Share Technology Photos/Videos
        </h2>
        <p className="text-lg mb-6">
          If you a member of this network and you have a CA based pictorials
          (photos and videos)/podcast on the various CA technologies, kindly
          share with us.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Photos and Videos</CardTitle>
            <p className="text-sm text-gray-500">
              They should be well captioned to include the locality and the
              date. These will be used to update the gallery section.
            </p>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Photo caption / Video title
                  </label>
                  <Input placeholder="Enter a descriptive title" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Locality
                  </label>
                  <Input placeholder="Where was this photo/video taken?" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Description of the photo / Video
                  </label>
                  <Textarea
                    placeholder="Provide a detailed description"
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Links
                  </label>
                  <Input placeholder="Provide links to videos if hosted elsewhere" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Upload Files
                  </label>
                  <Input type="file" className="cursor-pointer" />
                  <p className="text-sm text-gray-500 mt-1">
                    You can upload photos or videos directly
                  </p>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Submit Media
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MediaSubmission;
