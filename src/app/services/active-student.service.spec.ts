import { TestBed } from '@angular/core/testing';

import { ActiveStudentService } from './active-student.service';

describe('ActiveStudentService', () => {
  let service: ActiveStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
