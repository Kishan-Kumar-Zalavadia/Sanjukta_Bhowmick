import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Announcement } from 'src/app/_model/announcement';
import { announcements } from 'src/app/_model/announcement-data';
import { AnnouncementService } from 'src/app/_services/announcement.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent {
  announcements: Announcement[] = [];
  constructor(
    private router: Router,
    private announcementService: AnnouncementService
  ) {}

  ngOnInit(): void {
    this.getAnnouncements();
  }

  getAnnouncements(): void {
    this.announcements = announcements;
  }

  onAnnouncementClick(announcementId: number): void {
    const selectedAnnouncement = this.announcementService.announcements.find(
      (announcement) => announcement.id === announcementId
    );

    if (!selectedAnnouncement) {
      console.error(`Announcement with ID ${announcementId} not found.`);
      // You may want to add some user feedback or error handling here.
      return;
    }

    this.announcementService.setSelectedAnnouncement(selectedAnnouncement);
    this.router.navigate(['/annoncement', announcementId]);
  }
}
