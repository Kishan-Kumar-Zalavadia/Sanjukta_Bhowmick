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
    publicationIDs: [5, 6, 7],
  },
  {
    id: 3,
    image: 'https://www.cse.unt.edu/~bhowmick/project/project_dyn/featured.png',
    name: 'Dynamic Network Algorithms',
    description:
      'Network dynamics involves studying how the properties of networks change as their structure evolves. In this project we aim to develop a template for creating parallel scalable algorithms for updating different properties of large-scale dynamic networks.Our goal is to move from the current approach of case by case algorithm design to an wholistic support infrastructure for dynamic network analysis. This project is funded by NSF and is in collaboration with Dr. Sajal Das a and Dr. Boyana Norris.Another aspect of dynamic networks is to create the graph by observing temporal events. This work is in collaboration with Dr. Jeremy Wendt, Dr. Richard Field, Dr. Cynthia Phillips, and Dr. Sucheta Soundarajan',
    publicationIDs: [8, 9, 10],
  },
  {
    id: 4,
    image:
      'https://www.cse.unt.edu/~bhowmick/project/project_exa/featured_hu144723ade7e6fffc131eac38d938c768_362739_720x0_resize_lanczos_2.png',
    name: 'Modeling NonDeterminism in Exascale Applications',
    description:
      'The convergence of extremely high levels of hardware concurrency and the effective overlap of computation and communication in asynchronous executions are resulting in growing nondeterminism in High Performance Computing (HPC) applications. In this project we aim to model nondeterministic executions by determining nondeterministic motifs in executions of HPC applications and using graph theory to categorize and compare the motifs to study the impact of non-determinism. This project is funded by NSF and is in collaboration with Dr. Michela Taufer and Dr. Heike Jagode .',
  },
  {
    id: 5,
    image:
      'https://www.cse.unt.edu/~bhowmick/project/project_mln/featured_hu28a36bdb3c6d028862b60a20f10d1cc1_492700_720x0_resize_lanczos_2.png',
    name: 'Multilayer Network Analysis',
    description:
      'Multilayer networks model systems that are related via multiple features and/or are formed of multiple types of entities. We are developing a decoupling based method for efficiently analyzing multilayer networks. Using decoupling component networks can be analyzed independently and then the analysis results can be combined to produce the final results. This work is in collaboration with Dr. Sharma Chakravarthy.',
    publicationIDs: [11, 12, 13],
  },
  {
    id: 6,
    image:
      'https://www.cse.unt.edu/~bhowmick/project/project_chordal/featured_hu798e0ab217f3378bb06818d1d1c9cf5a_131013_720x0_resize_lanczos_2.png',
    name: 'Perfect Graphs for Network Analysis',
    description:
      'A perfect graphs is a graph in which the chromatic number of every induced subgraph equals the size of the largest clique of that subgraph. Perfect graphs have special properties in that several NP-complete problems can be solved in polynomial time on them. Many real-world networks are also nearly perfect, such as bipartite graphs and chordal (triangulated graphs). Our goal is to leverage properties of perfect graphs to obtain faster/ more accurate network analysis results.',
    publicationIDs: [14, 15, 16],
  },
];
