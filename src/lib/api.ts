// Mock API functions for content management

// Types
export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface Newsletter {
  id: string;
  title: string;
  date: string;
  description: string;
  fileUrl?: string;
}

export interface SuccessStory {
  id: string;
  title: string;
  farmer: string;
  location: string;
  image: string;
  summary: string;
  fullStory?: string;
}

export interface TechnicalResource {
  id: string;
  title: string;
  type: string;
  date: string;
  location?: string;
  downloadable: boolean;
  fileUrl?: string;
  externalUrl?: string;
}

// Mock data storage (simulating a database)
let newsItems: NewsItem[] = [
  {
    id: "1",
    title: "CA Hub Kenya Hosts Successful Symposium",
    date: "March 15, 2023",
    excerpt:
      "Over 100 stakeholders gathered to discuss the future of Conservation Agriculture in Kenya.",
  },
  {
    id: "2",
    title: "New Research Shows CA Benefits for Small-Scale Farmers",
    date: "February 3, 2023",
    excerpt:
      "Recent study demonstrates significant yield improvements for farmers implementing CA practices.",
  },
  {
    id: "3",
    title: "Government Endorses CA Practices in New Agricultural Policy",
    date: "January 20, 2023",
    excerpt:
      "Ministry of Agriculture includes Conservation Agriculture as a key strategy in climate adaptation.",
  },
];

let events: Event[] = [
  {
    id: "1",
    title: "Conservation Agriculture Field Day",
    date: "June 15, 2023",
    location: "Nakuru County",
    description:
      "Practical demonstrations of CA techniques for farmers and extension officers.",
  },
  {
    id: "2",
    title: "CA Training Workshop for Extension Officers",
    date: "July 10-12, 2023",
    location: "KALRO Kabete, Nairobi",
    description:
      "Three-day intensive training on CA principles and implementation strategies.",
  },
  {
    id: "3",
    title: "Regional CA Network Meeting",
    date: "August 5, 2023",
    location: "Virtual",
    description:
      "Connecting CA practitioners across East Africa to share experiences and best practices.",
  },
];

let newsletters: Newsletter[] = [
  {
    id: "1",
    title: "CA Hub Kenya Newsletter - Q1 2023",
    date: "March 2023",
    description:
      "Featuring updates on CA adoption rates, success stories from Nakuru County, and upcoming events.",
    fileUrl: "/newsletters/q1-2023.pdf",
  },
  {
    id: "2",
    title: "CA Hub Kenya Newsletter - Q4 2022",
    date: "December 2022",
    description:
      "Year-end review of CA Hub activities, policy developments, and plans for 2023.",
    fileUrl: "/newsletters/q4-2022.pdf",
  },
  {
    id: "3",
    title: "CA Hub Kenya Newsletter - Q3 2022",
    date: "September 2022",
    description:
      "Special focus on CA mechanization options for small-scale farmers and training opportunities.",
    fileUrl: "/newsletters/q3-2022.pdf",
  },
  {
    id: "4",
    title: "CA Hub Kenya Newsletter - Q2 2022",
    date: "June 2022",
    description:
      "Highlighting research findings on CA benefits for soil health and climate resilience.",
    fileUrl: "/newsletters/q2-2022.pdf",
  },
];

let successStories: SuccessStory[] = [
  {
    id: "1",
    title: "Transforming Farming in Machakos County",
    farmer: "John Mwangi",
    location: "Machakos County",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80",
    summary:
      "After adopting CA practices, John has seen his maize yields increase by 40% while reducing his input costs by 25%. He now serves as a CA champion in his community.",
  },
  {
    id: "2",
    title: "Women's Group Embraces Conservation Agriculture",
    farmer: "Mwihaki Women's Group",
    location: "Muranga County",
    image:
      "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=800&q=80",
    summary:
      "A group of 15 women farmers have collectively implemented CA on their farms, sharing equipment and knowledge. They report improved soil health and water retention during dry seasons.",
  },
  {
    id: "3",
    title: "From Skeptic to Advocate",
    farmer: "David Kiprop",
    location: "Uasin Gishu County",
    image:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800&q=80",
    summary:
      "Initially skeptical about minimum tillage, David now practices full CA on his 10-acre farm. He has documented significant improvements in soil structure and biodiversity.",
  },
];

let technicalResources: TechnicalResource[] = [
  {
    id: "1",
    title:
      "Building networks and partnerships for effective knowledge sharing and promotion of Conservation Agriculture – The case of CA Hub-Kenya",
    type: "Paper",
    date: "June 2023",
    location: "Presented at 3ACCA in Rabat Morocco",
    downloadable: true,
    fileUrl: "/resources/ca-hub-networks-paper.pdf",
    externalUrl: "https://example.com/ca-hub-networks",
  },
  {
    id: "2",
    title:
      "Adoption and Practice of Conservation Agriculture (CA) and CA-Based Mechanization in Selected Counties in Kenya",
    type: "Research Paper",
    date: "June 2023",
    location: "Presented at 3ACCA in Rabat Morocco",
    downloadable: true,
    fileUrl: "/resources/ca-adoption-paper.pdf",
    externalUrl: "https://example.com/ca-adoption",
  },
  {
    id: "3",
    title: "CA Hub-Kenya Strategic Plan 2023-2026",
    type: "Strategic Document",
    date: "January 2023",
    downloadable: true,
    fileUrl: "/resources/ca-hub-strategic-plan.pdf",
  },
  {
    id: "4",
    title:
      "Conservation Agriculture: A Manual for Farmers and Extension Workers in Africa",
    type: "Manual",
    date: "2018",
    downloadable: true,
    fileUrl: "/resources/ca-manual.pdf",
    externalUrl: "https://example.com/ca-manual",
  },
  {
    id: "5",
    title: "CA Hub-Kenya Consortium Agreement",
    type: "Agreement Document",
    date: "2021",
    downloadable: true,
    fileUrl: "/resources/ca-hub-agreement.pdf",
  },
];

// API functions for News Items
export const getNewsItems = (): NewsItem[] => {
  return [...newsItems];
};

export const getNewsItem = (id: string): NewsItem | undefined => {
  return newsItems.find((item) => item.id === id);
};

export const createNewsItem = (item: Omit<NewsItem, "id">): NewsItem => {
  const newItem = {
    ...item,
    id: Date.now().toString(),
  };
  newsItems.push(newItem);
  return newItem;
};

export const updateNewsItem = (
  id: string,
  updates: Partial<NewsItem>,
): NewsItem | null => {
  const index = newsItems.findIndex((item) => item.id === id);
  if (index === -1) return null;

  newsItems[index] = { ...newsItems[index], ...updates };
  return newsItems[index];
};

export const deleteNewsItem = (id: string): boolean => {
  const initialLength = newsItems.length;
  newsItems = newsItems.filter((item) => item.id !== id);
  return newsItems.length < initialLength;
};

// API functions for Events
export const getEvents = (): Event[] => {
  return [...events];
};

export const getEvent = (id: string): Event | undefined => {
  return events.find((event) => event.id === id);
};

export const createEvent = (event: Omit<Event, "id">): Event => {
  const newEvent = {
    ...event,
    id: Date.now().toString(),
  };
  events.push(newEvent);
  return newEvent;
};

export const updateEvent = (
  id: string,
  updates: Partial<Event>,
): Event | null => {
  const index = events.findIndex((event) => event.id === id);
  if (index === -1) return null;

  events[index] = { ...events[index], ...updates };
  return events[index];
};

export const deleteEvent = (id: string): boolean => {
  const initialLength = events.length;
  events = events.filter((event) => event.id !== id);
  return events.length < initialLength;
};

// API functions for Newsletters
export const getNewsletters = (): Newsletter[] => {
  return [...newsletters];
};

export const getNewsletter = (id: string): Newsletter | undefined => {
  return newsletters.find((newsletter) => newsletter.id === id);
};

export const createNewsletter = (
  newsletter: Omit<Newsletter, "id">,
): Newsletter => {
  const newNewsletter = {
    ...newsletter,
    id: Date.now().toString(),
  };
  newsletters.push(newNewsletter);
  return newNewsletter;
};

export const updateNewsletter = (
  id: string,
  updates: Partial<Newsletter>,
): Newsletter | null => {
  const index = newsletters.findIndex((newsletter) => newsletter.id === id);
  if (index === -1) return null;

  newsletters[index] = { ...newsletters[index], ...updates };
  return newsletters[index];
};

export const deleteNewsletter = (id: string): boolean => {
  const initialLength = newsletters.length;
  newsletters = newsletters.filter((newsletter) => newsletter.id !== id);
  return newsletters.length < initialLength;
};

// API functions for Success Stories
export const getSuccessStories = (): SuccessStory[] => {
  return [...successStories];
};

export const getSuccessStory = (id: string): SuccessStory | undefined => {
  return successStories.find((story) => story.id === id);
};

export const createSuccessStory = (
  story: Omit<SuccessStory, "id">,
): SuccessStory => {
  const newStory = {
    ...story,
    id: Date.now().toString(),
  };
  successStories.push(newStory);
  return newStory;
};

export const updateSuccessStory = (
  id: string,
  updates: Partial<SuccessStory>,
): SuccessStory | null => {
  const index = successStories.findIndex((story) => story.id === id);
  if (index === -1) return null;

  successStories[index] = { ...successStories[index], ...updates };
  return successStories[index];
};

export const deleteSuccessStory = (id: string): boolean => {
  const initialLength = successStories.length;
  successStories = successStories.filter((story) => story.id !== id);
  return successStories.length < initialLength;
};

// API functions for Technical Resources
export const getTechnicalResources = (): TechnicalResource[] => {
  return [...technicalResources];
};

export const getTechnicalResource = (
  id: string,
): TechnicalResource | undefined => {
  return technicalResources.find((resource) => resource.id === id);
};

export const createTechnicalResource = (
  resource: Omit<TechnicalResource, "id">,
): TechnicalResource => {
  const newResource = {
    ...resource,
    id: Date.now().toString(),
  };
  technicalResources.push(newResource);
  return newResource;
};

export const updateTechnicalResource = (
  id: string,
  updates: Partial<TechnicalResource>,
): TechnicalResource | null => {
  const index = technicalResources.findIndex((resource) => resource.id === id);
  if (index === -1) return null;

  technicalResources[index] = { ...technicalResources[index], ...updates };
  return technicalResources[index];
};

export const deleteTechnicalResource = (id: string): boolean => {
  const initialLength = technicalResources.length;
  technicalResources = technicalResources.filter(
    (resource) => resource.id !== id,
  );
  return technicalResources.length < initialLength;
};
