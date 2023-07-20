import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  currentColorTheme = localStorage.getItem('colorTheme');
  colorTheme = signal<'dark' | 'light'>('light');


  setNewColorTheme(theme: 'dark' | 'light'): void {
    this.colorTheme.set(theme);
    document.body.classList.add(theme);
  }

  changeColorTheme(theme: 'dark' | 'light') {
    localStorage.setItem('colorTheme', theme);
  }
}
