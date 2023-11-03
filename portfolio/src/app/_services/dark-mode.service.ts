import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class DarkModeService {
  constructor() {}

  darkMode = false;

  toggleDarkMode(): void {
    const root = document.documentElement;
    const isDarkMode =
      root.style.getPropertyValue('--background-color') === '#272935';

    if (isDarkMode) {
      root.style.setProperty("--background-color", "white");
      root.style.setProperty("--font-color", "black");
    } else {
      root.style.setProperty('--background-color', '#272935');
      root.style.setProperty("--font-color", "white");
    }
  }
}
