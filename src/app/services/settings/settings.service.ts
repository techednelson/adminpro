import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    urlTheme: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.loadSettings();
  }

  public saveSettings(): void {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  public loadSettings(): void {
    if (localStorage.getItem('settings'))  {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
    this.applyTheme(this.settings.theme);
  }

  public applyTheme(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
    this.settings.theme = theme;
    this.settings.urlTheme = url;
    this.saveSettings();
  }

}

interface Settings {
  urlTheme: string;
  theme: string;
}

