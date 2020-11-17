import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<any>();
  public radioGroupForm: FormGroup;
  public years = ['2006', '2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      'launch_year': '',
      'launch_success': '',
      'land_success': ''
    });
  }
  getListByFilter() {
    this.clickEvent.next(this.radioGroupForm.value);
  }
}
