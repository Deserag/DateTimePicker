import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DateTimePickerData } from './interface';
import { DateTimePickerService } from './multiplatform-date-time-picker.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomCalendarComponent } from './date-picker/date-picker';
import { TimePickerComponent } from './time-picker/time-picker';

@Component({
  selector: 'lib-multiplatform-date-time-picker',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomCalendarComponent, TimePickerComponent],
  templateUrl: 'multiplatform-date-time-picker.component.html',
  styleUrls: ['multiplatform-date-time-picker.component.scss'],
})
export class MultiplatformDateTimePickerComponent implements OnInit {
  @Output() dateTimePickerDataChange = new EventEmitter<DateTimePickerData[]>();
  public DateTimePicker: DateTimePickerData[] = [];
  public selectedElement: DateTimePickerData | null = null;
  public isSettingSecondValue: boolean = false;
  public isSettingSecondDate: boolean = false;
  public numbers: number[] = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5];

  public static configuration: DateTimePickerData = {
    nameComponent: 'DateTimePicker',
    configuration: {
      id: 1,
      date_old: new Date(2024, 1, 23),
      date_new: new Date(2024, 1, 29),
      hour_old: 10,
      hour_new: 12,
      minute_old: 10,
      minute_new: 15,
      status: 'Time',
    }
  };
  initialDate: Date = new Date();

  constructor(private DateTimePickerService: DateTimePickerService) {}

  ngOnInit(): void {
    this.initialDate = MultiplatformDateTimePickerComponent.configuration.configuration.date_old;
    const newConfiguration: DateTimePickerData = {
      ...MultiplatformDateTimePickerComponent.configuration,
      configuration: { ...MultiplatformDateTimePickerComponent.configuration.configuration }
    };
    this.addDateTimePickerData(newConfiguration);
    this.selectedElement = this.DateTimePicker[0];
    this.DateTimePickerService.setSelectedElement(this.selectedElement);
  }

  public onClickDateTimePicker(element: DateTimePickerData): void {
    this.selectedElement = element;
  }

  public onTimeChange(event: { hour: number, minute: number }): void {
    if (this.isSettingSecondValue) {
      this.selectedElement!.configuration.hour_new = event.hour;
      this.selectedElement!.configuration.minute_new = event.minute;
    } else {
      this.selectedElement!.configuration.hour_old = event.hour;
      this.selectedElement!.configuration.minute_old = event.minute;
    }
  }

  public onDateSelected(date: Date, field: string = 'date_old'): void {
    if (this.isSettingSecondDate) {
      this.selectedElement!.configuration.date_new = date;
    } else {
      this.selectedElement!.configuration.date_old = date;
    }
  }

  public setSecondValue(): void {
    this.isSettingSecondValue = true;
  }

  public saveSecondValue(): void {
    this.isSettingSecondValue = false;
  }

  public setSecondDate(): void {
    this.isSettingSecondDate = true;
  }

  public saveSecondDate(): void {
    this.isSettingSecondDate = false;
  }

  public saveChanges(): void {
    this.dateTimePickerDataChange.emit(this.DateTimePicker);
    this.selectedElement = null;
  }

  private addDateTimePickerData(newConfiguration: DateTimePickerData): void {
    this.DateTimePicker.push(newConfiguration);
  }
}
