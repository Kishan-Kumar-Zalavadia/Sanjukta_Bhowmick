import { Project } from "./project";

export const PROJECTS: Project[] = [
  {
    id: 1,
    image:
      'https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg',
    name: 'Project 1',
    date: '2023-01-01',
    description: 'Description for Project 1',
    publicationIDs: [1, 2, 3],
  },
  {
    id: 2,
    image:
      'https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg',
    name: 'Project 2',
    description: 'Description for Project 2',
    publicationIDs: [4, 5],
  },
  {
    id: 3,
    image:
      'https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg',
    name: 'Project 3',
    description: 'Description for Project 3',
    publicationIDs: [5],
  },
  {
    id: 4,
    image:
      'https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg',
    name: 'Project 4',
    date: '2023-03-15',
  },
  {
    id: 5,
    image:
      'https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg',
    name: 'Project 5',
    description: 'Description for Project 5',
    publicationIDs: [3,5],
  },
];
