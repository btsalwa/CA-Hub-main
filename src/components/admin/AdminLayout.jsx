import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import NewsEventsAdmin from "./NewsEventsAdmin";
import NewsletterAdmin from "./NewsletterAdmin";
import SuccessStoriesAdmin from "./SuccessStoriesAdmin";
import TechnicalResourcesAdmin from "./TechnicalResourcesAdmin";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <AdminHeader />
        <h2 className="text-2xl font-bold mb-4">Content Management</h2>
        <p className="text-lg text-gray-700 mb-8">
          Manage website content including news, events, newsletters, success
          stories, and technical resources.
        </p>

        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="news">News & Events</TabsTrigger>
            <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
            <TabsTrigger value="success">Success Stories</TabsTrigger>
            <TabsTrigger value="technical">Technical Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            <NewsEventsAdmin />
          </TabsContent>

          <TabsContent value="newsletter">
            <NewsletterAdmin />
          </TabsContent>

          <TabsContent value="success">
            <SuccessStoriesAdmin />
          </TabsContent>

          <TabsContent value="technical">
            <TechnicalResourcesAdmin />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminLayout;
