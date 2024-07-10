import { TestBed } from '@angular/core/testing';

import { MultiplatformDateTimePickerService } from './multiplatform-date-time-picker.service';

describe('MultiplatformDateTimePickerService', () => {
  let service: MultiplatformDateTimePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiplatformDateTimePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
