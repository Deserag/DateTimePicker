import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplatformDateTimePickerComponent } from './multiplatform-date-time-picker.component';

describe('MultiplatformDateTimePickerComponent', () => {
  let component: MultiplatformDateTimePickerComponent;
  let fixture: ComponentFixture<MultiplatformDateTimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplatformDateTimePickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiplatformDateTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
