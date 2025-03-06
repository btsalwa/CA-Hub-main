import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CalendarDays, FileText } from "lucide-react";
import { getNewsItems, getEvents } from "../../lib/api";

const NewsEvents = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Load data from API
    setNewsItems(getNewsItems());
    setEvents(getEvents());
  }, []);

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">News and Events</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* News Section */}
          <div>
            <Card>
              <CardHeader className="bg-green-50">
                <div className="flex items-center">
                  <FileText className="w-6 h-6 text-green-700 mr-2" />
                  <CardTitle>Latest News</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {newsItems.map((item) => (
                    <div
                      key={item.id}
                      className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                    >
                      <h3 className="text-lg font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                      <p className="text-gray-700">{item.excerpt}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events Section */}
          <div>
            <Card>
              <CardHeader className="bg-green-50">
                <div className="flex items-center">
                  <CalendarDays className="w-6 h-6 text-green-700 mr-2" />
                  <CardTitle>Upcoming Events</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                    >
                      <h3 className="text-lg font-semibold mb-1">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="mr-3">{event.date}</span>
                        <span>{event.location}</span>
                      </div>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
