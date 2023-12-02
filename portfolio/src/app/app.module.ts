import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { HomeComponent } from './_components/home/home.component';
import { ProjectsComponent } from './_components/projects/projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectCardComponent } from './_components/project-card/project-card.component';
import { ProjectDetailsComponent } from './_components/project-details/project-details.component';
import { PublicationComponent } from './_components/publication/publication.component';
import { PersonCardComponent } from './_components/person-card/person-card.component';
import { PeopleComponent } from './_components/people/people.component';
import { AnnouncementsComponent } from './_components/announcements/announcements.component';
import { AnnouncementDetailsComponent } from './_components/announcement-details/announcement-details.component';
import { TestComponent } from './_components/test/test/test.component';
import { TestCardComponent } from './_components/test/test-card/test-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    PublicationComponent,
    PersonCardComponent,
    PeopleComponent,
    AnnouncementsComponent,
    AnnouncementDetailsComponent,
    TestComponent,
    TestCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
