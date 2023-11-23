import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class DarkModeService {
  constructor() {}

  darkMode = false;

  toggleDarkMode(): void {
    const root = document.documentElement;
    const isDarkMode = root.style.getPropertyValue('--background-color') === '#272935';
    const bg_dark = window.getComputedStyle(root).getPropertyValue('--bg-dark');
    const bg_light = window.getComputedStyle(root).getPropertyValue('--bg-light');

    if (isDarkMode) {
      root.style.setProperty("--background-color", "white");
      root.style.setProperty("--font-color", "black");
      root.style.setProperty('--bg', bg_light);

    } else {
      root.style.setProperty('--background-color', '#272935');
      root.style.setProperty("--font-color", "white");
      root.style.setProperty('--bg', bg_dark);
    }
  }
}
