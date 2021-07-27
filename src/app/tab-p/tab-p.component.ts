import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tab-p',
  templateUrl: './tab-p.component.html',
  styleUrls: ['./tab-p.component.scss']
})
export class TabPComponent  {
  activeTab: string;

  constructor(private cookieService:CookieService) {
    this.activeTab = this.cookieService.get('aTab');
    this.cookieService.set('test2','test=124',2);
    console.log(this.cookieService.get('test2'));
   }

  tabClickHandler(activeTab: string) {
    this.activeTab = activeTab;
    this.cookieService.set('aTab',this.activeTab);
  }
}


//if we use package then, package will provide predefine functions for check ,get, set, getall , delete , delete all
//and in my function if key or value contain '=' then it will create problem while in package it will not create any problem because function will encode that value before storing in cookies