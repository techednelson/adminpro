import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _settings: SettingsService) { }

  ngOnInit() {
    this.setCheck();
  }

  public changeThemeColor(theme: string, link: any): void {
    this.applyCheck(link);
    this._settings.applyTheme(theme);
  }

  public applyCheck(link: any): void {
    const selectors: any = document.getElementsByClassName('selector');
    for (const ref of selectors) {
      ref.classList.remove('working');
    }
    link.classList.add('working');

  }

  setCheck() {
    const selectors: any = document.getElementsByClassName('selector');
    const theme = this._settings.settings.theme;
    for (const ref of selectors) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
