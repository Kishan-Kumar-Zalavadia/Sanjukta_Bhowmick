import { Component, Input } from '@angular/core';
import { Project } from '../_model/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project!: Project;

  clickedProject(id: number): void {
    console.log("Project: "+this.project.id)
  }
}
