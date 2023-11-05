import { Project } from "./project";

export const PROJECTS: Project[] = [
  {
    id: 1,
    image:
      'https://www.cse.unt.edu/~bhowmick/project/project_noise/featured_huab4d091ff7615c1ead0c2b196022ae98_912905_720x0_resize_lanczos_2.png',
    name: 'Analyzing Noisy Networks',
    date: '2001-01-01',
    description:
      'Real world data is inherently noisy. This noise is manifested in network models in the form of additional or missing edges. In this project we study how slight changes to the network affect its properties, and explore the structure of subgraphs that are stable under noise. This work is in collaboration with Dr. Animesh Mukherjee.',
    publicationIDs: [1, 2, 3, 4],
  },
  {
    id: 2,
    image:
      'https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg',
    name: 'Project 2',
    description: 'Description for Project 2',
    publicationIDs: [4],
  },
  {
    id: 3,
    image:
      'https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg',
    name: 'Project 3',
    description: 'Description for Project 3',
    publicationIDs: [3],
  },
  {
    id: 4,
    image:
      'https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg',
    name: 'Project 4',
    description: 'Description for Project 4',

    date: '2023-03-15',
  },
  {
    id: 5,
    image:
      'https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg',
    name: 'Project 5',
    description: 'Description for Project 5',
    publicationIDs: [3, 5],
  },
];
