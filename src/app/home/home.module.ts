import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NgxMultipleDatesModule } from 'ngx-multiple-dates';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatePickerPanelComponent } from './components/date-picker-panel/date-picker-panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    NgxMultipleDatesModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HomePageRoutingModule,
    FlexLayoutModule,
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
  declarations: [HomePage, DatePickerPanelComponent],
})
export class HomePageModule {}
