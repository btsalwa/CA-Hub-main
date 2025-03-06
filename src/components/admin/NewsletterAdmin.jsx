import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Mail, Plus, Pencil, Trash2, Upload } from "lucide-react";
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
  getNewsletters,
  createNewsletter,
  updateNewsletter,
  deleteNewsletter,
} from "../../lib/api";

const NewsletterAdmin = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentNewsletter, setCurrentNewsletter] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    fileUrl: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setNewsletters(getNewsletters());
  };

  const handleAdd = () => {
    setCurrentNewsletter(null);
    setFormData({ title: "", date: "", description: "", fileUrl: "" });
    setIsDialogOpen(true);
  };

  const handleEdit = (newsletter) => {
    setCurrentNewsletter(newsletter);
    setFormData({
      title: newsletter.title,
      date: newsletter.date,
      description: newsletter.description,
      fileUrl: newsletter.fileUrl || "",
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id) => {
    deleteNewsletter(id);
    loadData();
  };

  const handleSubmit = () => {
    if (currentNewsletter) {
      updateNewsletter(currentNewsletter.id, formData);
    } else {
      createNewsletter(formData);
    }
    setIsDialogOpen(false);
    loadData();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Newsletters</h2>
        <Button onClick={handleAdd} className="flex items-center gap-2">
          <Plus size={16} /> Add Newsletter
        </Button>
      </div>

      <div className="space-y-4">
        {newsletters.map((newsletter) => (
          <Card key={newsletter.id}>
            <CardContent className="p-6">
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {newsletter.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {newsletter.date}
                    </p>
                    <p className="text-gray-700 mb-3">
                      {newsletter.description}
                    </p>
                    {newsletter.fileUrl && (
                      <Button variant="outline" size="sm">
                        View Newsletter
                      </Button>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(newsletter)}
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
                        <AlertDialogTitle>Delete Newsletter</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this newsletter? This
                          action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(newsletter.id)}
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

      {/* Newsletter Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {currentNewsletter ? "Edit Newsletter" : "Add Newsletter"}
            </DialogTitle>
            <DialogDescription>
              Fill in the details for the newsletter.
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
                placeholder="Newsletter title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <Input
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                placeholder="e.g., March 2023"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Newsletter description"
                rows={4}
              />
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
                        fileUrl: `/newsletters/${e.target.files[0].name}`,
                      });
                    }
                  }}
                />
                <Button variant="outline" className="flex items-center gap-1">
                  <Upload className="h-4 w-4" /> Upload
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Upload the newsletter PDF file (max 10MB)
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              {currentNewsletter ? "Update" : "Add"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewsletterAdmin;
