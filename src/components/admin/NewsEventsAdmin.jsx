import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { CalendarDays, FileText, Plus, Pencil, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
  getNewsItems,
  createNewsItem,
  updateNewsItem,
  deleteNewsItem,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../../lib/api";

const NewsEventsAdmin = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [events, setEvents] = useState([]);
  const [isNewsDialogOpen, setIsNewsDialogOpen] = useState(false);
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);
  const [currentNewsItem, setCurrentNewsItem] = useState(null);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [newsFormData, setNewsFormData] = useState({
    title: "",
    date: "",
    excerpt: "",
  });
  const [eventFormData, setEventFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setNewsItems(getNewsItems());
    setEvents(getEvents());
  };

  // News item handlers
  const handleAddNews = () => {
    setCurrentNewsItem(null);
    setNewsFormData({ title: "", date: "", excerpt: "" });
    setIsNewsDialogOpen(true);
  };

  const handleEditNews = (item) => {
    setCurrentNewsItem(item);
    setNewsFormData({
      title: item.title,
      date: item.date,
      excerpt: item.excerpt,
    });
    setIsNewsDialogOpen(true);
  };

  const handleDeleteNews = (id) => {
    deleteNewsItem(id);
    loadData();
  };

  const handleNewsSubmit = () => {
    if (currentNewsItem) {
      updateNewsItem(currentNewsItem.id, newsFormData);
    } else {
      createNewsItem(newsFormData);
    }
    setIsNewsDialogOpen(false);
    loadData();
  };

  // Event handlers
  const handleAddEvent = () => {
    setCurrentEvent(null);
    setEventFormData({ title: "", date: "", location: "", description: "" });
    setIsEventDialogOpen(true);
  };

  const handleEditEvent = (event) => {
    setCurrentEvent(event);
    setEventFormData({
      title: event.title,
      date: event.date,
      location: event.location,
      description: event.description,
    });
    setIsEventDialogOpen(true);
  };

  const handleDeleteEvent = (id) => {
    deleteEvent(id);
    loadData();
  };

  const handleEventSubmit = () => {
    if (currentEvent) {
      updateEvent(currentEvent.id, eventFormData);
    } else {
      createEvent(eventFormData);
    }
    setIsEventDialogOpen(false);
    loadData();
  };

  return (
    <div>
      <Tabs defaultValue="news" className="w-full">
        <TabsList className="w-[400px] mb-6">
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="news">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Latest News</h2>
            <Button onClick={handleAddNews} className="flex items-center gap-2">
              <Plus size={16} /> Add News Item
            </Button>
          </div>

          <div className="space-y-4">
            {newsItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <FileText className="w-6 h-6 text-green-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          {item.date}
                        </p>
                        <p className="text-gray-700">{item.excerpt}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditNews(item)}
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
                              Delete News Item
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this news item?
                              This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteNews(item.id)}
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

          {/* News Dialog */}
          <Dialog open={isNewsDialogOpen} onOpenChange={setIsNewsDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {currentNewsItem ? "Edit News Item" : "Add News Item"}
                </DialogTitle>
                <DialogDescription>
                  Fill in the details for the news item.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Title
                  </label>
                  <Input
                    value={newsFormData.title}
                    onChange={(e) =>
                      setNewsFormData({
                        ...newsFormData,
                        title: e.target.value,
                      })
                    }
                    placeholder="News title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <Input
                    value={newsFormData.date}
                    onChange={(e) =>
                      setNewsFormData({ ...newsFormData, date: e.target.value })
                    }
                    placeholder="e.g., March 15, 2023"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Content
                  </label>
                  <Textarea
                    value={newsFormData.excerpt}
                    onChange={(e) =>
                      setNewsFormData({
                        ...newsFormData,
                        excerpt: e.target.value,
                      })
                    }
                    placeholder="News content"
                    rows={4}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsNewsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleNewsSubmit}>
                  {currentNewsItem ? "Update" : "Add"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TabsContent>

        <TabsContent value="events">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <Button
              onClick={handleAddEvent}
              className="flex items-center gap-2"
            >
              <Plus size={16} /> Add Event
            </Button>
          </div>

          <div className="space-y-4">
            {events.map((event) => (
              <Card key={event.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <CalendarDays className="w-6 h-6 text-green-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">
                          {event.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span className="mr-3">{event.date}</span>
                          <span>{event.location}</span>
                        </div>
                        <p className="text-gray-700">{event.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditEvent(event)}
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
                            <AlertDialogTitle>Delete Event</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this event? This
                              action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteEvent(event.id)}
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

          {/* Event Dialog */}
          <Dialog open={isEventDialogOpen} onOpenChange={setIsEventDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {currentEvent ? "Edit Event" : "Add Event"}
                </DialogTitle>
                <DialogDescription>
                  Fill in the details for the event.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Title
                  </label>
                  <Input
                    value={eventFormData.title}
                    onChange={(e) =>
                      setEventFormData({
                        ...eventFormData,
                        title: e.target.value,
                      })
                    }
                    placeholder="Event title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <Input
                    value={eventFormData.date}
                    onChange={(e) =>
                      setEventFormData({
                        ...eventFormData,
                        date: e.target.value,
                      })
                    }
                    placeholder="e.g., June 15, 2023"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Location
                  </label>
                  <Input
                    value={eventFormData.location}
                    onChange={(e) =>
                      setEventFormData({
                        ...eventFormData,
                        location: e.target.value,
                      })
                    }
                    placeholder="Event location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <Textarea
                    value={eventFormData.description}
                    onChange={(e) =>
                      setEventFormData({
                        ...eventFormData,
                        description: e.target.value,
                      })
                    }
                    placeholder="Event description"
                    rows={4}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsEventDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleEventSubmit}>
                  {currentEvent ? "Update" : "Add"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NewsEventsAdmin;
