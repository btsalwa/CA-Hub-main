import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { getTechnicalResources } from "../../lib/api";

const TechnicalResources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Load data from API
    setResources(getTechnicalResources());
  }, []);

  const handleDownload = (resource) => {
    // In a real app, this would download the file
    if (resource.fileUrl) {
      window.open(resource.fileUrl, "_blank");
    }
  };

  const handleViewOnline = (resource) => {
    // In a real app, this would open the external URL
    if (resource.externalUrl) {
      window.open(resource.externalUrl, "_blank");
    }
  };

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Technical Resources</h2>

        <div className="space-y-4">
          {resources.map((resource) => (
            <Card key={resource.id}>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FileText className="w-8 h-8 text-green-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      {resource.title}
                    </h3>
                    <div className="flex flex-wrap text-sm text-gray-500 mb-4">
                      <span className="mr-3">{resource.type}</span>
                      {resource.date && (
                        <span className="mr-3">{resource.date}</span>
                      )}
                      {resource.location && <span>{resource.location}</span>}
                    </div>
                    <div className="flex space-x-3">
                      {resource.downloadable && resource.fileUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center"
                          onClick={() => handleDownload(resource)}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      )}
                      {resource.externalUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center text-green-700"
                          onClick={() => handleViewOnline(resource)}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Online
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalResources;
