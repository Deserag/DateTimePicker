import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DateTimePickerData } from './interface';
@Injectable({
  providedIn: 'root'
})
export class DateTimePickerService {
  public allElements: DateTimePickerData[] = [];

  private selectedElementSource = new BehaviorSubject<DateTimePickerData | null>(null);
  selectedElement$ = this.selectedElementSource.asObservable();

  setSelectedElement(element: DateTimePickerData)
: void {
  this.selectedElementSource.next(element);
  const index = this.allElements.findIndex(el => el.configuration.id === element.configuration.id);
  if (index > -1){
    this.allElements[index]= element  }
  else {
    this.allElements.push(element)
  }
}
  getAllElements(): DateTimePickerData[]
  {
    return this.allElements;
  }
}
