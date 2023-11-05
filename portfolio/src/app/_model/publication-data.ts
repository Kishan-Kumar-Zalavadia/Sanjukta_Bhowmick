import { Publication } from './publication';

export const PUBLICATIONS: Publication[] = [
  {
    id: 1,
    title: 'On Rich Clubs of Path-Based Centralities in Networks',
    projectID: 1,
    pdf: 'https://arxiv.org/pdf/1808.02903.pdf',
    authorIDs: [1, 2],
  },
  {
    id: 2,
    title:
      'GenPerm: A Unified Method for Detecting Non-Overlapping and Overlapping Communities',
    pdf: 'https://arxiv.org/pdf/1604.03454.pdf',
    projectID: 1,
    authorIDs: [2, 3, 4],
  },
  {
    id: 3,
    title: 'On the Permanence of Vertices in Network Communities',
    pdf: 'https://arxiv.org/pdf/1406.2426.pdf',
    projectID: 1,
    authorIDs: [1],
  },
  {
    id: 4,
    title: 'Constant Communities in Complex Networks',
    pdf: 'https://www.nature.com/articles/srep01825',
    projectID: 1,
    authorIDs: [3, 4, 5],
  },
];
