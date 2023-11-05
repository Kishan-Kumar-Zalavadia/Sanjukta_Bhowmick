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
      'https://www.cse.unt.edu/~bhowmick/project/project_apps/featured_hue90256f1c82ac655c98823f8e4ee833e_1876205_720x0_resize_lanczos_2.png',
    name: 'Applications of Network Science',
    description:
      'Networks model the complex interactions between entities in many diverse disciplines. The properties of the networks provide insight to characteristics of the underlying complex system. We have used complex networks in many different areas including software engineering with Dr. Harvey Siy, bioinformatics with Dr. Hesham Ali and Dr. Kate Cooper, epidemiology with Dr. Armin Mikler , and narrative networks to study interactions between characters in plays.',
    publicationIDs: [5,6,7],
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
