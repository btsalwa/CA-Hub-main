import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Mail, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { getNewsletters, Newsletter as NewsletterType } from "../../lib/api";

const Newsletter = () => {
  const [newsletters, setNewsletters] = useState<NewsletterType[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  });

  useEffect(() => {
    // Load data from API
    setNewsletters(getNewsletters());
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the subscription data to a server
    alert(
      `Thank you for subscribing, ${formData.name}! You will receive our next newsletter.`,
    );
    setFormData({ name: "", email: "", organization: "" });
  };

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">CA Hub Kenya Newsletter</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Previous Newsletters</h3>
            <div className="space-y-4">
              {newsletters.map((newsletter) => (
                <Card key={newsletter.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Mail className="w-6 h-6 text-green-700" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">
                          {newsletter.title}
                        </h4>
                        <p className="text-sm text-gray-500 mb-2">
                          {newsletter.date}
                        </p>
                        <p className="text-gray-700 mb-3">
                          {newsletter.description}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            // In a real app, this would download or open the newsletter
                            if (newsletter.fileUrl) {
                              window.open(newsletter.fileUrl, "_blank");
                            }
                          }}
                        >
                          Read Newsletter
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="w-5 h-5 mr-2" />
                  Subscribe to Newsletter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Stay updated with the latest news, events, and resources from
                  CA Hub Kenya. Our newsletter is sent quarterly.
                </p>
                <form className="space-y-4" onSubmit={handleSubscribe}>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Organization
                    </label>
                    <Input
                      placeholder="Your organization (optional)"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organization: e.target.value,
                        })
                      }
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
