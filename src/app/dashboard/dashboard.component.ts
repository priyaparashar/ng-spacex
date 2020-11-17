import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'spacex';
  configUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
  programs: Object;
  constructor(private http: HttpClient) { }
  getConfig(url) {
    this.http.get(url).subscribe(
      response => {
          this.programs = response; 
      }
    )
  }
  addParameterToURL(param, url){
    url += (url.split('?')[1] ? '&':'?') + param;
    return url;
}
  ngOnInit() {
    this.getConfig(this.configUrl);
  }
  getListByFilter(formValues) {
    let url = this.configUrl;
    for (const property in formValues) {
      if(formValues[property]){
        url = this.addParameterToURL(`${property}=${formValues[property]}`,url);
      }
    }
    this.getConfig(url);
  }
}

