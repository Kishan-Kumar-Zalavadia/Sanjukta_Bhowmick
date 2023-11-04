import { Injectable } from '@angular/core';
import { Project } from '../_model/project';
import { PROJECTS } from '../_model/project-data';
import { PUBLICATIONS } from '../_model/publication-data';
import { Publication } from '../_model/publication';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  private projects: Project[] = PROJECTS;

  // ************************************************************************
  // * Get project ID
  getProjectById(id: number): Project | undefined {
    // * Find the project by ID, or return undefined if not found
    return this.projects.find((project) => project.id === id);
  }

  // ************************************************************************
  // * Get all the publications for the project
  getPublicationsForProject(projectID: number): Publication[] {
    const project = PROJECTS.find((p) => p.id === projectID);

    if (project && project.publicationIDs) {
      return PUBLICATIONS.filter((publication) =>
        project.publicationIDs?.includes(publication.id)
      );
    }

    return []; // Return an empty array if no publications are found
  }
}
