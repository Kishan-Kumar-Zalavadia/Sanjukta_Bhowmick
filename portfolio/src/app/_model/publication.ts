export interface Publication {
  id: number;
  title?: string;
  projectID?: number;
  pdf?: string;
  authorIDs: number[];
}
