import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './date-picker.html',
  styleUrls: ['./date-picker.scss']
})
export class CustomCalendarComponent implements OnInit {
  @Input() initialDate: Date = new Date();
  @Output() dateSelected = new EventEmitter<Date>();
  currentMonth: number = 1;
  currentYear: number = 2;
  dayNames: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  years: number[] = [];
  calendarDays: Date[] = [];
  selectedDate: Date = new Date();

  ngOnInit() {
    this.selectedDate = this.initialDate;
    this.currentMonth = this.initialDate.getMonth();
    this.currentYear = this.initialDate.getFullYear();
    this.years = this.getYearsRange(1900, 2100);  // Add your desired range
    this.generateCalendarDays();
  }

  getYearsRange(start: number, end: number): number[] {
    const years = [];
    for (let year = start; year <= end; year++) {
      years.push(year);
    }
    return years;
  }

  generateCalendarDays() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const firstDayIndex = firstDay.getDay();
    const lastDayDate = lastDay.getDate();

    this.calendarDays = [];

    for (let i = 0; i < firstDayIndex; i++) {
      this.calendarDays.push(new Date(this.currentYear, this.currentMonth, i - firstDayIndex + 1));
    }

    for (let i = 1; i <= lastDayDate; i++) {
      this.calendarDays.push(new Date(this.currentYear, this.currentMonth, i));
    }
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendarDays();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendarDays();
  }

  onMonthChange(month: number) {
    this.currentMonth = month;
    this.generateCalendarDays();
  }

  onYearChange(year: number) {
    this.currentYear = year;
    this.generateCalendarDays();
  }

  selectDate(date: Date) {
    this.selectedDate = date;
    this.dateSelected.emit(date);
  }

  isCurrentMonth(date: Date): boolean {
    return date.getMonth() === this.currentMonth;
  }

  isSelected(date: Date): boolean {
    return date.toDateString() === this.selectedDate.toDateString();
  }
}
