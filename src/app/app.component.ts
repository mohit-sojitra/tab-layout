import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tab-layout';
  activeTab: string;

  constructor() {
    this.activeTab = this.getCookie('activeTab') ? this.getCookie('activeTab') : 'tab1';
    this.setCookie('test','test=124',2);
    console.log(this.getCookie('test'));
  }

  tabClickHandler(activeTab: string) {
    this.activeTab = activeTab;
    this.setCookie('activeTab', this.activeTab, 3);
  }


  private setCookie(
    name: string,
    value: string,
    expireDays: number,
  ) {
    let d: Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires: string = `expires=${d.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}`;
  }

  private getCookie(name: string) {
    let ca:string[]= document.cookie.split(';');
    let value =  ca.find(value => value.trim().split('=')[0] == name);
    return value ? value.split('=')[1] : '';
  }
}
