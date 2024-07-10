import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-picker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './time-picker.html',
  styleUrls: ['./time-picker.scss']
})
export class TimePickerComponent {
  @Input() hour: number = 0;
  @Input() minute: number = 0;
  @Output() timeChange = new EventEmitter<{ hour: number, minute: number }>();
  public numbers: number[] = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5];
  private currentHand: 'hour' | 'minute' | null = null;

  onMouseDown(hand: 'hour' | 'minute', event: MouseEvent): void {
    event.preventDefault();
    this.currentHand = hand;
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    if (this.currentHand) {
      this.currentHand = null;
      this.timeChange.emit({ hour: this.hour, minute: this.minute });
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.currentHand) {
      const clock = document.querySelector('.clock') as HTMLElement;
      const rect = clock.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;
      const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI) + 90;
      let value = Math.round(angle / 6);
      if (value < 0) {
        value += 60;
      }

      if (this.currentHand === 'hour') {
        this.hour = value % 24;
      } else if (this.currentHand === 'minute') {
        this.minute = value;
      }

      this.timeChange.emit({ hour: this.hour, minute: this.minute });
    }
  }

  calculateHourHandAngle(): string {
    const hourAngle = (this.hour % 24) * 15 + (this.minute / 4); // Angle for hour hand
    return `${hourAngle}deg`;
  }

  calculateMinuteHandAngle(): string {
    const minuteAngle = this.minute * 6; // Angle for minute hand
    return `${minuteAngle}deg`;
  }
}
