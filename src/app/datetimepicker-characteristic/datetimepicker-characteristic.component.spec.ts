import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimepickerCharacteristicComponent } from './datetimepicker-characteristic.component';

describe('DatetimepickerCharacteristicComponent', () => {
  let component: DatetimepickerCharacteristicComponent;
  let fixture: ComponentFixture<DatetimepickerCharacteristicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatetimepickerCharacteristicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatetimepickerCharacteristicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
