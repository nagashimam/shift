import { Component, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  earlyShiftDays = {
    dates: [],
    label: '早出',
  };
  dayShiftDays = {
    dates: [],
    label: '日勤',
  };
  lateShiftDays = {
    dates: [],
    label: '遅出',
  };
  nightShiftDays = {
    dates: [],
    label: '夜勤',
  };
  password = '';
  constructor() {}

  add() {
    console.log('password:', this.password);
    console.log('shift', this.earlyShiftDays);
  }
}

interface Shift {
  dates: Date[];
  label: string;
}
