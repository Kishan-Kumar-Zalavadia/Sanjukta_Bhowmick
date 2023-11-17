// announcement-data.ts

import { Announcement } from "./announcement";

export const announcements: Announcement[] = [
  {
    id: 1,
    title: 'Important Event',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // imageUrl: '../../assets/images/ali_khan.jpeg',
    date: new Date('2023-01-01'),
  },
  {
    id: 2,
    title: 'New Project Announcement',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    imageUrl: '../../assets/images/ali_khan.jpeg',
    date: new Date('2023-02-15'),
  },
  // Add more announcements here
];
