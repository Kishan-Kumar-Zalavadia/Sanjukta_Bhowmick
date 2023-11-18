import { Component } from '@angular/core';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { Announcement } from 'src/app/_model/announcement';
import { announcements } from 'src/app/_model/announcement-data';
import { AnnouncementService } from 'src/app/_services/announcement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  faGithub = faGithub;
  faFile = faFile;
  faGoogle = faGoogle;

  messageForAnnouncements: string = 'Hello from HomeComponent!';

  homeAnnouncements: Announcement[];

  constructor(private announcementService: AnnouncementService) {
    this.homeAnnouncements = this.announcementService.getHomeAnnouncements();
  }
}
