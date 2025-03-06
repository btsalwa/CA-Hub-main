import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Plus, Pencil, Trash2, Upload } from "lucide-react";
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
  getSuccessStories,
  createSuccessStory,
  updateSuccessStory,
  deleteSuccessStory,
} from "../../lib/api";

const SuccessStoriesAdmin = () => {
  const [stories, setStories] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentStory, setCurrentStory] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    farmer: "",
    location: "",
    image: "",
    summary: "",
    fullStory: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setStories(getSuccessStories());
  };

  const handleAdd = () => {
    setCurrentStory(null);
    setFormData({
      title: "",
      farmer: "",
      location: "",
      image: "",
      summary: "",
      fullStory: "",
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (story) => {
    setCurrentStory(story);
    setFormData({
      title: story.title,
      farmer: story.farmer,
      location: story.location,
      image: story.image,
      summary: story.summary,
      fullStory: story.fullStory || "",
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id) => {
    deleteSuccessStory(id);
    loadData();
  };

  const handleSubmit = () => {
    if (currentStory) {
      updateSuccessStory(currentStory.id, formData);
    } else {
      createSuccessStory(formData);
    }
    setIsDialogOpen(false);
    loadData();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Success Stories</h2>
        <Button onClick={handleAdd} className="flex items-center gap-2">
          <Plus size={16} /> Add Success Story
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <Card key={story.id} className="overflow-hidden">
            <div>
              <AspectRatio ratio={16 / 9}>
                <img
                  src={story.image}
                  alt={story.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="flex-1">{story.title}</CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(story)}
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
                          Delete Success Story
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this success story?
                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(story.id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-sm text-gray-500">
                  <span className="font-medium">{story.farmer}</span> •{" "}
                  {story.location}
                </p>
              </div>
              <p className="text-gray-700">{story.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Success Story Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              {currentStory ? "Edit Success Story" : "Add Success Story"}
            </DialogTitle>
            <DialogDescription>
              Fill in the details for the success story.
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
                placeholder="Story title"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Farmer/Group Name
                </label>
                <Input
                  value={formData.farmer}
                  onChange={(e) =>
                    setFormData({ ...formData, farmer: e.target.value })
                  }
                  placeholder="Name of farmer or group"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Location
                </label>
                <Input
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="e.g., Machakos County"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Image URL
              </label>
              <div className="flex gap-2">
                <Input
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  placeholder="Image URL"
                  className="flex-1"
                />
                <Button variant="outline" className="flex items-center gap-1">
                  <Upload className="h-4 w-4" /> Upload
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Enter an image URL or upload a new image
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Summary</label>
              <Textarea
                value={formData.summary}
                onChange={(e) =>
                  setFormData({ ...formData, summary: e.target.value })
                }
                placeholder="Brief summary of the success story"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Story
              </label>
              <Textarea
                value={formData.fullStory}
                onChange={(e) =>
                  setFormData({ ...formData, fullStory: e.target.value })
                }
                placeholder="Full success story content"
                rows={6}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              {currentStory ? "Update" : "Add"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SuccessStoriesAdmin;
