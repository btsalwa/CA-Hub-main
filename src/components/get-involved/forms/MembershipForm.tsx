import React from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

const MembershipForm = () => {
  return (
    <Card className="w-full max-w-[800px] mx-auto">
      <CardHeader>
        <CardTitle>Membership Registration Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Organization Name
              </label>
              <Input placeholder="Full organization name" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Organization Acronym
              </label>
              <Input placeholder="Organization acronym" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Contact Person & Designation
              </label>
              <Input placeholder="Name and role" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Organization Address
              </label>
              <Textarea placeholder="Full address" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Organization Category
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="government">
                    National Government Department/Parastatal
                  </SelectItem>
                  <SelectItem value="county">County Government</SelectItem>
                  <SelectItem value="research">
                    National Research Organization
                  </SelectItem>
                  <SelectItem value="academic">Academia</SelectItem>
                  <SelectItem value="private">Private Sector</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Website</label>
              <Input type="url" placeholder="https://" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Operating Counties
              </label>
              <Textarea placeholder="List the counties where you operate" />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Submit Registration
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MembershipForm;
