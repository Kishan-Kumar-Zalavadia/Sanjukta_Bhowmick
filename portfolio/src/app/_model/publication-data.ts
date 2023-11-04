import { Publication } from './publication';

export const PUBLICATIONS: Publication[] = [
  {
    id: 1,
    title: 'Publication 1',
    projectID: 1,
    authorIDs: [1, 2],
  },
  {
    id: 2,
    title: 'Publication 2',
    projectID: 2,
    authorIDs: [2, 3, 4],
  },
  {
    id: 3,
    title: 'Publication 3',
    authorIDs: [1],
  },
  {
    id: 4,
    title: 'Publication 4',
    projectID: 3,
    authorIDs: [3, 4, 5],
  },
  {
    id: 5,
    title: 'Publication 5',
    authorIDs: [2, 5],
  },
];
