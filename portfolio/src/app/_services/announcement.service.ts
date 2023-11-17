import { Injectable } from '@angular/core';
import { announcements } from '../_model/announcement-data';
import { Announcement } from '../_model/announcement';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  constructor() {}

  private _announcements: Announcement[] = announcements;
  private _selectedAnnouncement: Announcement | undefined;

  get announcements(): Announcement[] {
    return this._announcements;
  }

  get selectedAnnouncement(): Announcement | undefined {
    return this._selectedAnnouncement;
  }

  setSelectedAnnouncement(announcement: Announcement): void {
    this._selectedAnnouncement = announcement;
  }
  
}
