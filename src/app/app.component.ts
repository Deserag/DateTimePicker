import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiplatformDateTimePickerComponent } from "../../projects/multiplatform-date-time-picker/src/lib/multiplatform-date-time-picker.component";
import { DatetimepickerCharacteristicComponent } from "../../projects/multiplatform-date-time-picker/src/lib/datetimepicker-characteristic/datetimepicker-characteristic.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MultiplatformDateTimePickerComponent, DatetimepickerCharacteristicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'date-time-picker';
}
