import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DateTimePickerData } from '../interface';
import { DateTimePickerService } from '../multiplatform-date-time-picker.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-datetimepicker-characteristic',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './datetimepicker-characteristic.component.html',
  styleUrls: ['./datetimepicker-characteristic.component.scss']
})
export class DatetimepickerCharacteristicComponent {
  @Input() selectedElement: any;
  @Output() selectedElementChange = new EventEmitter<DateTimePickerData>();

  constructor(private dateTimePickerService: DateTimePickerService) {
    this.dateTimePickerService.selectedElement$.subscribe(element => {
      this.selectedElement = element;
    });
  }

  onSelectedElementChange(): void {
    this.selectedElementChange.emit(this.selectedElement);
    this.dateTimePickerService.setSelectedElement(this.selectedElement);
  }

}
