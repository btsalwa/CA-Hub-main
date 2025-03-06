import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { UserPlus, FileText, PenTool, Camera, Heart, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import MembershipSection from "./MembershipSection";
import ProjectRegistration from "./ProjectRegistration";
import BlogSubmission from "./BlogSubmission";
import SuccessStorySubmission from "./SuccessStorySubmission";
import MediaSubmission from "./MediaSubmission";
import DonationSection from "./DonationSection";

const GetInvolved = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Get Involved</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Be a Member */}
          <Card>
            <CardHeader>
              <UserPlus className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Be a Member</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Join our network of organizations promoting conservation
                agriculture in Kenya.
              </p>
              <Button variant="outline" className="w-full">
                <a href="#membership">Register as Member</a>
              </Button>
            </CardContent>
          </Card>

          {/* Register Project */}
          <Card>
            <CardHeader>
              <FileText className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Register Your Project</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Share your active conservation agriculture projects with our
                network.
              </p>
              <Button variant="outline" className="w-full">
                <a href="#project">Register Project</a>
              </Button>
            </CardContent>
          </Card>

          {/* Share Blog */}
          <Card>
            <CardHeader>
              <PenTool className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Share a Blog</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Write about your CA innovations and achievements.
              </p>
              <Button variant="outline" className="w-full">
                <a href="#blog">Submit Blog</a>
              </Button>
            </CardContent>
          </Card>

          {/* Share Success Stories */}
          <Card>
            <CardHeader>
              <Star className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Share Success Stories</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Share your CA success stories and best practices.
              </p>
              <Button variant="outline" className="w-full">
                <a href="#success">Share Story</a>
              </Button>
            </CardContent>
          </Card>

          {/* Share Technology */}
          <Card>
            <CardHeader>
              <Camera className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Share Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Share photos and videos of CA technologies and implementations.
              </p>
              <Button variant="outline" className="w-full">
                <a href="#media">Share Media</a>
              </Button>
            </CardContent>
          </Card>

          {/* Donate */}
          <Card>
            <CardHeader>
              <Heart className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Donate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Support our mission to promote conservation agriculture in
                Kenya.
              </p>
              <Button variant="outline" className="w-full">
                <a href="#donate">Donate Now</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="membership" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="membership">Membership</TabsTrigger>
            <TabsTrigger value="project">Projects</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="success">Success Stories</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="donate">Donate</TabsTrigger>
          </TabsList>

          <TabsContent value="membership" id="membership">
            <MembershipSection />
          </TabsContent>

          <TabsContent value="project" id="project">
            <ProjectRegistration />
          </TabsContent>

          <TabsContent value="blog" id="blog">
            <BlogSubmission />
          </TabsContent>

          <TabsContent value="success" id="success">
            <SuccessStorySubmission />
          </TabsContent>

          <TabsContent value="media" id="media">
            <MediaSubmission />
          </TabsContent>

          <TabsContent value="donate" id="donate">
            <DonationSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GetInvolved;
