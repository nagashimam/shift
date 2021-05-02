import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker-panel',
  templateUrl: './date-picker-panel.component.html',
  styleUrls: ['./date-picker-panel.component.scss'],
})
export class DatePickerPanelComponent {
  @ViewChild('picker')
  picker: MatDatepicker<Date>;

  @Input()
  label: string;
  @Input()
  dates: Date[] = [];
  @Output()
  datesChange = new EventEmitter<Date[]>();

  constructor() {}
  change() {
    this.datesChange.emit(this.dates);
  }
}
