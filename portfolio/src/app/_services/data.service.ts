import { Injectable } from '@angular/core';
import { Project } from '../_model/project';
import { PROJECTS } from '../_model/project-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  private projects: Project[] = PROJECTS;

  getProjectById(id: number): Project | undefined {
    // * Find the project by ID, or return undefined if not found
    return this.projects.find((project) => project.id === id);
  }
}
