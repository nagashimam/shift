import { Component } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  readonly correctHashedPassword =
    '872e2ead08575be6429990d9784ebf706f47aa99f66ec6579c01f47cf8aed2d2';
  password = new FormControl();
  earlyShiftDays: Shift = {
    dates: [],
    label: '早出',
  };
  dayShiftDays: Shift = {
    dates: [],
    label: '日勤',
  };
  lateShiftDays: Shift = {
    dates: [],
    label: '遅出',
  };
  nightShiftDays: Shift = {
    dates: [],
    label: '夜勤',
  };
  constructor() {
    this.password.setAsyncValidators(async (password: AbstractControl) => {
      const input = password.value;
      const encoder = new TextEncoder();
      const hashBuffer = await crypto.subtle.digest(
        'SHA-256',
        encoder.encode(input)
      );
      const hashArray = Array.from(new Uint8Array(hashBuffer)); // バッファーをバイト列に変換
      const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');

      return hashHex === this.correctHashedPassword
        ? null
        : { incorrectPassword: 'パスワードが間違っているみたいだよ' };
    });
  }

  add() {
    console.log('password:', this.password.getError('incorrectPassword'));
    console.log('invalid', this.password.invalid);
    console.log('shift', this.earlyShiftDays);
  }
}

interface Shift {
  dates: Date[];
  label: string;
}
