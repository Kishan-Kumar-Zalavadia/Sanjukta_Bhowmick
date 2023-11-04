import { Component, Input } from '@angular/core';
import { Project } from '../_model/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project!: Project;

  constructor(private router: Router) {}
  
  clickedProject(id: number): void {
    console.log('Project: ' + this.project.id);
  }

  navigateToProjectDetails() {
    this.router.navigate(['/project', this.project.id]);
  }
}
