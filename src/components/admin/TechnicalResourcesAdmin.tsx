import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  FileText,
  Download,
  ExternalLink,
  Plus,
  Pencil,
  Trash2,
  Upload,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import {
  getTechnicalResources,
  createTechnicalResource,
  updateTechnicalResource,
  deleteTechnicalResource,
  TechnicalResource,
} from "../../lib/api";

const TechnicalResourcesAdmin = () => {
  const [resources, setResources] = useState<TechnicalResource[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentResource, setCurrentResource] =
    useState<TechnicalResource | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    date: "",
    location: "",
    downloadable: true,
    fileUrl: "",
    externalUrl: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setResources(getTechnicalResources());
  };

  const handleAdd = () => {
    setCurrentResource(null);
    setFormData({
      title: "",
      type: "",
      date: "",
      location: "",
      downloadable: true,
      fileUrl: "",
      externalUrl: "",
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (resource: TechnicalResource) => {
    setCurrentResource(resource);
    setFormData({
      title: resource.title,
      type: resource.type,
      date: resource.date,
      location: resource.location || "",
      downloadable: resource.downloadable,
      fileUrl: resource.fileUrl || "",
      externalUrl: resource.externalUrl || "",
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    deleteTechnicalResource(id);
    loadData();
  };

  const handleSubmit = () => {
    if (currentResource) {
      updateTechnicalResource(currentResource.id, formData);
    } else {
      createTechnicalResource(formData);
    }
    setIsDialogOpen(false);
    loadData();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Technical Resources</h2>
        <Button onClick={handleAdd} className="flex items-center gap-2">
          <Plus size={16} /> Add Resource
        </Button>
      </div>

      <div className="space-y-4">
        {resources.map((resource) => (
          <Card key={resource.id}>
            <CardContent className="p-6">
              <div className="flex justify-between">
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
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Online
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(resource)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Delete Technical Resource
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this resource? This
                          action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(resource.id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Technical Resource Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              {currentResource ? "Edit Resource" : "Add Resource"}
            </DialogTitle>
            <DialogDescription>
              Fill in the details for the technical resource.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <Input
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Resource title"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Type</label>
                <Input
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  placeholder="e.g., Paper, Manual, Document"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <Input
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  placeholder="e.g., June 2023"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Location (Optional)
                </label>
                <Input
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="e.g., Conference location"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Upload PDF
              </label>
              <div className="flex gap-2">
                <Input
                  type="file"
                  accept=".pdf"
                  className="flex-1"
                  onChange={(e) => {
                    // In a real app, you would handle file upload here
                    // For this example, we'll just set a placeholder URL
                    if (e.target.files && e.target.files[0]) {
                      setFormData({
                        ...formData,
                        fileUrl: `/resources/${e.target.files[0].name}`,
                      });
                    }
                  }}
                />
                <Button variant="outline" className="flex items-center gap-1">
                  <Upload className="h-4 w-4" /> Upload
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Upload the resource PDF file (max 10MB)
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                External URL (Optional)
              </label>
              <Input
                value={formData.externalUrl}
                onChange={(e) =>
                  setFormData({ ...formData, externalUrl: e.target.value })
                }
                placeholder="https://example.com/resource"
              />
              <p className="text-xs text-gray-500 mt-1">
                Link to an external website where this resource is available
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              {currentResource ? "Update" : "Add"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TechnicalResourcesAdmin;
